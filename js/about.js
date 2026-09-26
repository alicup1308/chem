/* language: JavaScript, file: about.js, purpose: render book data + interactions */
/* v2 — multi-line section renderer */

const About = {
  activeLessonId: null,

  init(){
    this.renderMeta();
    this.renderBook();
    document.addEventListener('langchange', ()=>{
      this.renderMeta();
      this.renderBook();
      if (this.activeLessonId) this.showLesson(this.activeLessonId, false);
    });
  },

  el(id){ return document.getElementById(id); },

  /* ---------- Meta (title, authors) ---------- */
  renderMeta(){
    const meta = BOOK.meta;
    const isAr = ChemI18N.lang === 'ar';
    const hero = document.querySelector('.book-hero');
    if (!hero) return;

    hero.innerHTML = `
      <h1>${isAr ? meta.title_ar : meta.title_en}</h1>
      ${isAr ? `<div class="ar-title">${meta.title_en}</div>` : `<div class="ar-title">${meta.title_ar}</div>`}
      <div class="meta-chips">
        <span class="meta-chip"><strong>${isAr ? 'الناشر:' : 'Publisher:'}</strong> ${isAr ? meta.publisher_ar : meta.publisher_en}</span>
        <span class="meta-chip"><strong>${isAr ? 'الطبعة:' : 'Edition:'}</strong> ${isAr ? meta.edition_ar : meta.edition_en}</span>
        <span class="meta-chip"><strong>ISBN:</strong> ${meta.isbn}</span>
      </div>
      <div class="contributors">
        <h3>${isAr ? 'فريق التأليف والإشراف' : 'Authors & Supervision'}</h3>
        <ul>
          ${meta.authors_ar.map(a => `<li>${a}</li>`).join('')}
          ${meta.supervision_ar.map(a => `<li>${isAr ? 'متابعة وتنسيق: ' : 'Supervision: '}${a}</li>`).join('')}
          ${meta.lang_review_ar.map(a => `<li>${isAr ? 'مراجعة لغوية: ' : 'Language review: '}${a}</li>`).join('')}
          ${meta.design_ar.map(a => `<li>${isAr ? 'تصميم وتنفيذ: ' : 'Design: '}${a}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  /* ---------- Full book (units → chapters → lessons) ---------- */
  renderBook(){
    const container = this.el('aboutContent');
    if (!container) return;
    const isAr = ChemI18N.lang === 'ar';
    container.innerHTML = '';

    BOOK.units.forEach((unit, ui)=>{
      const unitEl = document.createElement('div');
      unitEl.className = 'unit-section';
      unitEl.id = unit.id;
      unitEl.innerHTML = `
        <div class="unit-header">
          <div class="unit-badge">${ui+1}</div>
          <div>
            <h2>${isAr ? unit.ar : unit.en}</h2>
            <div class="sub">${isAr ? unit.en : unit.ar}</div>
          </div>
        </div>
      `;

      unit.chapters.forEach(chapter=>{
        const chEl = document.createElement('div');
        chEl.className = 'chapter-block';
        chEl.innerHTML = `<div class="chapter-head">${isAr ? chapter.ar : chapter.en}</div>`;

        const grid = document.createElement('div');
        grid.className = 'lesson-grid';

        chapter.lessons.forEach(lesson=>{
          const card = document.createElement('button');
          card.type = 'button';
          card.className = 'lesson-card' + (this.activeLessonId === lesson.id ? ' active' : '');
          card.dataset.lesson = lesson.id;
          card.innerHTML = `
            <div class="icon">📘</div>
            <div class="body">
              <div class="title">${isAr ? lesson.ar : lesson.en}</div>
              <div class="qcount">${lesson.sections.length} ${isAr ? 'أقسام' : 'sections'} · ${lesson.questions.length} ${isAr ? 'سؤال' : 'questions'}</div>
            </div>
          `;
          card.addEventListener('click', ()=> this.showLesson(lesson.id));
          grid.appendChild(card);
        });

        chEl.appendChild(grid);
        unitEl.appendChild(chEl);
      });

      container.appendChild(unitEl);
    });

    // single lesson panel container
    let panel = this.el('lessonPanel');
    if (!panel){
      panel = document.createElement('div');
      panel.id = 'lessonPanel';
      panel.className = 'lesson-panel hidden';
      container.appendChild(panel);
    }
  },

  /* ---------- Split a text block into lines ---------- */
  /* Splits on: " | " (pipe) OR newlines. Trims each. Drops empties. */
  splitLines(text){
    if (!text) return [];
    return text
      .split(/\s*\|\s*|\n+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  },

  /* ---------- Bold a leading label before a colon ---------- */
  /* "Organic Chemistry: substances" → "<strong>Organic Chemistry</strong> — substances" */
  fmtLine(text){
    const idx = text.search(/[:：]/);
    if (idx > 0 && idx < 60){
      const label = text.slice(0, idx).trim();
      const rest = text.slice(idx + 1).trim();
      return `<strong>${label}</strong><span class="sep">—</span>${rest}`;
    }
    return text;
  },

  /* ---------- Show one lesson ---------- */
  showLesson(id, scroll = true){
    const isAr = ChemI18N.lang === 'ar';
    this.activeLessonId = id;

    // find lesson
    let lesson = null;
    BOOK.units.forEach(u => u.chapters.forEach(c => c.lessons.forEach(l => { if (l.id === id) lesson = l; })));
    if (!lesson) return;

    // update card highlights
    document.querySelectorAll('.lesson-card').forEach(c=>{
      c.classList.toggle('active', c.dataset.lesson === id);
    });

    const panel = this.el('lessonPanel');
    if (!panel) return;

    panel.innerHTML = `
      <button class="close-btn" id="lessonClose" aria-label="Close">✕</button>
      <h3>${isAr ? lesson.ar : lesson.en}</h3>
      ${isAr ? `<div class="lesson-alt">${lesson.en}</div>` : `<div class="lesson-alt">${lesson.ar}</div>`}

      ${lesson.sections.map(s=>{
        const h = isAr ? (s.h_ar || '') : (s.h_en || '');
        const raw = isAr ? (s.p_ar || '') : (s.p_en || '');
        const lines = this.splitLines(raw);
        let body;
        if (lines.length > 1){
          body = `<ul class="line-list">${lines.map(l => `<li>${this.fmtLine(l)}</li>`).join('')}</ul>`;
        } else {
          body = `<p class="single">${raw}</p>`;
        }
        return `
          <div class="section-block">
            <h4>${h}</h4>
            ${body}
          </div>
        `;
      }).join('')}

      <div class="questions-head">${isAr ? 'أسئلة وأجوبة' : 'Questions & Answers'}</div>

      ${lesson.questions.map((q, i)=>{
        const qt = isAr ? q.q_ar : q.q_en;
        const at = isAr ? q.a_ar : q.a_en;
        return `
          <div class="q-item">
            <div class="q-text">${i+1}. ${qt}</div>
            <button class="q-answer-btn" data-q="${i}">${isAr ? 'اعرض الإجابة' : 'Show answer'}</button>
            <div class="q-answer" data-ans="${i}">
              <span class="lbl">${isAr ? 'الإجابة' : 'Answer'}</span>
              <div>${at}</div>
            </div>
          </div>
        `;
      }).join('')}
    `;

    panel.classList.remove('hidden');

    // wire answer toggles
    panel.querySelectorAll('.q-answer-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const i = btn.dataset.q;
        const ans = panel.querySelector(`.q-answer[data-ans="${i}"]`);
        if (!ans) return;
        const isOpen = ans.classList.toggle('show');
        btn.textContent = isOpen
          ? (isAr ? 'أخفِ الإجابة' : 'Hide answer')
          : (isAr ? 'اعرض الإجابة' : 'Show answer');
      });
    });

    panel.querySelector('#lessonClose').addEventListener('click', ()=>{
      panel.classList.add('hidden');
      this.activeLessonId = null;
      document.querySelectorAll('.lesson-card').forEach(c=>c.classList.remove('active'));
    });

    if (scroll){
      setTimeout(()=> panel.scrollIntoView({behavior:'smooth', block:'start'}), 50);
    }
  }
};

document.addEventListener('DOMContentLoaded', ()=> About.init());