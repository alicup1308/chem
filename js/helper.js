/* language: JavaScript, file: helper.js — browser model + semantic search + Gemini brain */

const HELPER_CONFIG = {
  textUrl:      'book-text.txt',
  pdfUrl:       '',
  useBookData:  true,
  model:        'Xenova/multilingual-e5-small',
  cacheKey:     'chem-emb-cache-v7',
  cacheVersion: 7,
  chunkSize:    400,
  chunkOverlap: 80,
  minChunk:     60,
  topK:         6,
  minScore:     0.50,
  workerUrl:    'https://chem-proxy.cupali892.workers.dev'
};

function vecToB64(f32){
  const bytes = new Uint8Array(f32.buffer);
  let bin = '';
  const CH = 0x8000;
  for (let i = 0; i < bytes.length; i += CH){
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  }
  return btoa(bin);
}
function b64ToVec(b64){
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Float32Array(bytes.buffer);
}
function cos(a, b){
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

const Helper = {
  open: false,
  embedder: null,
  index: [],
  loadStatus: 'idle',
  loadProgress: 0,
  loadMessage: '',

  el(id){ return document.getElementById(id); },

  async loadModel(){
    this.loadStatus = 'model';
    this.loadMessage = 'Loading AI model (~30 MB, first time only)…';
    this.updateStatusUI();

    const mod = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2');
    mod.env.allowLocalModels = false;
    mod.env.useBrowserCache = true;

    this.embedder = await mod.pipeline('feature-extraction', HELPER_CONFIG.model, {
      quantized: true,
      progress_callback: (p) => {
        if (p.status === 'progress' && p.file && p.file.endsWith('.onnx')){
          const pct = Math.round((p.loaded / p.total) * 100);
          this.loadMessage = `Loading AI model… ${pct}%`;
          this.updateStatusUI();
        }
      }
    });

    await new Promise(r => setTimeout(r, 50));
  },

  async embed(text, kind = 'passage'){
    const prefix = (kind === 'query') ? 'query: ' : 'passage: ';
    const out = await this.embedder(prefix + text, { pooling: 'mean', normalize: true });
    return out.data;
  },

  async loadTextFile(){
    const res = await fetch(HELPER_CONFIG.textUrl);
    if (!res.ok) throw new Error('book-text.txt not found');
    return await res.text();
  },

  chunkText(fullText){
    const chunks = [];
    const { chunkSize, chunkOverlap, minChunk } = HELPER_CONFIG;
    const pageParts = fullText.split(/===+\s*Page\s+(\d+)\s*===+/gi);
    for (let i = 1; i < pageParts.length; i += 2){
      const page = parseInt(pageParts[i], 10);
      const raw = pageParts[i+1] || '';
      const clean = raw.replace(/\s+/g, ' ').trim();
      if (!clean) continue;
      let pos = 0;
      while (pos < clean.length){
        let end = Math.min(pos + chunkSize, clean.length);
        if (end < clean.length){
          const sp = clean.lastIndexOf(' ', end);
          if (sp > pos + 100) end = sp;
        }
        const piece = clean.slice(pos, end).trim();
        if (piece.length >= minChunk) chunks.push({ text: piece, page });
        if (end >= clean.length) break;
        pos = end - chunkOverlap;
      }
    }
    return chunks;
  },

  collectBookEntries(){
    const items = [];
    if (typeof BOOK === 'undefined') return items;
    BOOK.units.forEach(u => u.chapters.forEach(c => c.lessons.forEach(l => {
      (l.sections || []).forEach((s, i) => {
        const textEn = ((s.h_en || '') + '. ' + (s.p_en || '')).trim();
        const textAr = ((s.h_ar || '') + '. ' + (s.p_ar || '')).trim();
        if (textEn) items.push({ text: textEn, kind: 'section', lessonId: l.id, idx: i, sectionHead: s.h_en, sectionBody: s.p_en, lang: 'en' });
        if (textAr) items.push({ text: textAr, kind: 'section', lessonId: l.id, idx: i, sectionHead: s.h_ar, sectionBody: s.p_ar, lang: 'ar' });
      });
      (l.questions || []).forEach((q, i) => {
        const textEn = ((q.q_en || '') + ' ' + (q.a_en || '')).trim();
        const textAr = ((q.q_ar || '') + ' ' + (q.a_ar || '')).trim();
        if (textEn) items.push({ text: textEn, kind: 'qa', lessonId: l.id, idx: i, q: q.q_en, a: q.a_en, lang: 'en' });
        if (textAr) items.push({ text: textAr, kind: 'qa', lessonId: l.id, idx: i, q: q.q_ar, a: q.a_ar, lang: 'ar' });
      });
    })));
    return items;
  },

  async embedAll(items){
    const total = items.length;
    const out = [];
    for (let i = 0; i < total; i++){
      try {
        const vec = await this.embed(items[i].text, 'passage');
        out.push({ ...items[i], vec });
      } catch (e){
        console.warn('[helper] embed fail', i, e);
      }
      if (i % 10 === 0 || i === total - 1){
        this.loadProgress = (i + 1) / total;
        this.loadMessage = `Analyzing book… ${Math.round(this.loadProgress * 100)}%`;
        this.updateStatusUI();
      }
      await new Promise(r => setTimeout(r, 0));
    }
    return out;
  },

  saveCache(items){
    try {
      const slim = items.map(it => ({
        text: it.text, page: it.page, lessonId: it.lessonId, kind: it.kind,
        sectionHead: it.sectionHead, sectionBody: it.sectionBody,
        q: it.q, a: it.a, idx: it.idx, lang: it.lang,
        b64: vecToB64(it.vec)
      }));
      localStorage.setItem(HELPER_CONFIG.cacheKey, JSON.stringify({ v: HELPER_CONFIG.cacheVersion, data: slim }));
    } catch (e){ console.warn('[helper] cache write failed:', e); }
  },
  loadCache(){
    try {
      const raw = localStorage.getItem(HELPER_CONFIG.cacheKey);
      if (!raw) return null;
      const p = JSON.parse(raw);
      if (p.v !== HELPER_CONFIG.cacheVersion) return null;
      return p.data.map(it => ({ ...it, vec: b64ToVec(it.b64) }));
    } catch { return null; }
  },

  async buildIndex(){
    try { await this.loadModel(); }
    catch (e){
      console.error('[helper] model load failed:', e);
      this.loadStatus = 'error';
      this.loadMessage = 'Model failed to load';
      this.updateStatusUI();
      return;
    }

    const cached = this.loadCache();
    if (cached && cached.length){
      this.index = cached;
      this.loadStatus = 'ready';
      this.updateStatusUI();
      return;
    }

    const items = [];
    if (HELPER_CONFIG.useBookData) items.push(...this.collectBookEntries());

    this.loadStatus = 'extracting';
    this.loadMessage = 'Reading book text…';
    this.updateStatusUI();

    try {
      const txt = await this.loadTextFile();
      items.push(...this.chunkText(txt).map(c => ({ text: c.text, page: c.page, kind: 'pdf' })));
    } catch (e){ console.warn('[helper] no book-text.txt'); }

    this.loadStatus = 'embedding';
    this.loadProgress = 0;
    this.updateStatusUI();
    const embedded = await this.embedAll(items);
    this.index = embedded;
    this.saveCache(embedded);
    this.loadStatus = 'ready';
    this.updateStatusUI();
  },

  async search(query){
    if (!this.embedder) return [];
    const qVec = await this.embed(query, 'query');
    const scored = [];
    for (const item of this.index){
      scored.push({ item, score: cos(qVec, item.vec) });
    }
    scored.sort((a, b) => b.score - a.score);
    const seen = new Set();
    const out = [];
    for (const r of scored){
      if (r.score < HELPER_CONFIG.minScore) break;
      const key = r.item.lessonId
        ? `${r.item.lessonId}:${r.item.kind}:${r.item.idx}`
        : `p${r.item.page}:${(r.item.text || '').slice(0, 40)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(r);
      if (out.length >= HELPER_CONFIG.topK) break;
    }
    return out;
  },

  async askGemini(question, matches, lang){
    const isAr = lang === 'ar';

    const context = matches.map((r, i) => {
      const it = r.item;
      if (it.kind === 'section'){
        return `[Source ${i+1} | ${it.sectionHead}]\n${it.sectionBody}`;
      } else if (it.kind === 'qa'){
        return `[Source ${i+1} | Q&A]\nQ: ${it.q}\nA: ${it.a}`;
      } else {
        return `[Source ${i+1} | page ${it.page}]\n${it.text}`;
      }
    }).join('\n\n---\n\n');

    const system = isAr
      ? `أنت مساعد متخصص في كتاب الكيمياء للصف العاشر في الكويت. أجب عن سؤال الطالب اعتماداً فقط على المصادر المرفقة. لا تخترع أي معلومة من خارج المصادر. إذا لم تجد الإجابة في المصادر قل فقط: "لم أجد هذه المعلومة في الكتاب." اكتب الإجابة بالعربية بشكل مباشر ومختصر وواضح، كأنك تشرح لطالب. لا تذكر "المصدر ١" — فقط أجب.`
      : `You are a helper for the Kuwait Grade 10 Chemistry textbook. Answer using ONLY the provided sources. Never invent information. If the answer isn't in the sources, reply exactly: "I couldn't find that in the book." Answer directly and clearly.`;

    const userMsg = isAr
      ? `المصادر:\n\n${context}\n\nالسؤال: ${question}\n\nالإجابة:`
      : `Sources:\n\n${context}\n\nQuestion: ${question}\n\nAnswer:`;

    const body = {
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: 'user', parts: [{ text: userMsg }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 800, topP: 0.9 }
    };

    try {
      const res = await fetch(HELPER_CONFIG.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!res.ok){
        const err = await res.text();
        console.error('[helper] Worker error:', res.status, err);
        return null;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let full = '';

      while (true){
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines){
          if (!line.startsWith('data: ')) continue;
          const chunk = line.slice(6).trim();
          if (chunk === '[DONE]') continue;
          try {
            const parsed = JSON.parse(chunk);
            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) full += text;
          } catch {}
        }
      }
      return full || null;
    } catch (e){
      console.error('[helper] Worker fetch failed:', e);
      return null;
    }
  },

  renderAnswer(answerText, matches, lang){
    const isAr = lang === 'ar';
    const safe = (s) => (s || '').replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));

    const answerBlock = answerText
      ? `<div class="answer-main">${safe(answerText).replace(/\n/g, '<br>')}</div>`
      : `<div class="answer-main em">${isAr ? 'لم أستطع توليد إجابة.' : 'Couldn\'t generate an answer.'}</div>`;

    if (!matches.length) return answerBlock;

    const lessonTitle = (id) => {
      if (typeof BOOK === 'undefined') return '';
      for (const u of BOOK.units) for (const c of u.chapters) for (const l of c.lessons)
        if (l.id === id) return isAr ? l.ar : l.en;
      return '';
    };

    const sourceCards = matches.slice(0, 4).map(r => {
      const it = r.item;
      if (it.kind === 'section'){
        return `<div class="result" data-lesson="${it.lessonId}"><div class="top"><span class="tag">${isAr ? 'شرح' : 'Section'}</span><span class="lname">${lessonTitle(it.lessonId)}</span></div><div class="excerpt"><strong>${safe(it.sectionHead)}</strong></div></div>`;
      }
      if (it.kind === 'qa'){
        return `<div class="result" data-lesson="${it.lessonId}"><div class="top"><span class="tag">${isAr ? 'سؤال' : 'Q&A'}</span><span class="lname">${lessonTitle(it.lessonId)}</span></div><div class="excerpt">${safe(it.q)}</div></div>`;
      }
      return `<div class="result result-pdf"><div class="top"><span class="tag tag-pdf">${isAr ? 'من الكتاب' : 'From book'}</span><span class="lname">${isAr ? 'صفحة' : 'Page'} ${it.page}</span></div></div>`;
    }).join('');

    const sourcesLabel = isAr ? 'المصادر:' : 'Sources:';
    return `${answerBlock}<div class="sources-label">${sourcesLabel}</div>${sourceCards}`;
  },

  pushMsg(role, html){
    const body = this.el('helperBody');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerHTML = html;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  },

  async handleQuery(text){
    const q = text.trim();
    if (!q) return;
    const isAr = ChemI18N.lang === 'ar';

    const escaped = q.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
    this.pushMsg('user', escaped);

    if (this.loadStatus !== 'ready'){
      this.pushMsg('bot', `<div class="em">${isAr ? 'لا يزال قيد التحضير. حاول بعد قليل.' : 'Still preparing. Try again in a moment.'}</div>`);
      return;
    }

    const typing = this.pushMsg('bot', `<div class="dots"><span></span><span></span><span></span></div>`);

    try {
      const matches = await this.search(q);
      if (!matches.length){
        typing.innerHTML = isAr ? 'لم أجد هذه المعلومة في الكتاب.' : 'I couldn\'t find that in the book.';
        return;
      }

      typing.innerHTML = `<div class="em" style="margin-bottom:6px">${isAr ? 'جاري صياغة الإجابة…' : 'Writing the answer…'}</div><div class="dots"><span></span><span></span><span></span></div>`;
      const answer = await this.askGemini(q, matches, isAr ? 'ar' : 'en');

      if (!answer){
        typing.innerHTML = `<div class="em">${isAr ? 'تعذّر توليد إجابة — إليك المصادر:' : 'Couldn\'t generate — here are the sources:'}</div>`;
        const sourcesHtml = matches.slice(0,3).map(r => {
          const it = r.item;
          if (it.kind === 'section') return `<div class="result" data-lesson="${it.lessonId}"><div class="excerpt"><strong>${it.sectionHead}</strong><div style="margin-top:4px">${(it.sectionBody||'').slice(0,220)}</div></div></div>`;
          if (it.kind === 'qa') return `<div class="result" data-lesson="${it.lessonId}"><div class="excerpt">${it.q}</div><div class="ans"><span class="lbl">${isAr?'الإجابة':'Answer'}</span><div>${it.a}</div></div></div>`;
          return `<div class="result result-pdf"><div class="excerpt">${(it.text||'').slice(0,220)}</div></div>`;
        }).join('');
        typing.innerHTML += sourcesHtml;
      } else {
        typing.innerHTML = this.renderAnswer(answer, matches, isAr ? 'ar' : 'en');
      }

      typing.querySelectorAll('.result[data-lesson]').forEach(el=>{
        el.addEventListener('click', ()=> this.openLesson(el.dataset.lesson));
      });
    } catch (e){
      console.error(e);
      typing.innerHTML = isAr ? 'حدث خطأ.' : 'Error.';
    }
    this.el('helperBody').scrollTop = this.el('helperBody').scrollHeight;
  },

  openLesson(lessonId){
    if (typeof About !== 'undefined' && document.getElementById('aboutContent')){
      About.showLesson(lessonId);
      this.closePanel();
      setTimeout(()=>{
        const p = document.getElementById('lessonPanel');
        if (p) p.scrollIntoView({behavior:'smooth', block:'start'});
      }, 100);
    } else {
      window.location.href = `about.html#${lessonId}`;
    }
  },

  openPanel(){
    this.el('helperPanel').classList.remove('hidden');
    this.open = true;
    setTimeout(()=> this.el('helperInput').focus(), 100);
    if (this.loadStatus === 'idle') this.buildIndex();
  },
  closePanel(){ this.el('helperPanel').classList.add('hidden'); this.open = false; },
  toggle(){ this.open ? this.closePanel() : this.openPanel(); },

  updateStatusUI(){
    const st = this.el('helperStatus');
    if (!st) return;
    const isAr = ChemI18N.lang === 'ar';
    if (this.loadStatus === 'ready'){
      const n = this.index.length;
      st.textContent = isAr ? `جاهز · ${n} مصدر مفهرس` : `Ready · ${n} sources indexed`;
      st.style.color = 'var(--accent-3)';
    } else if (this.loadStatus === 'error'){
      st.textContent = isAr ? 'فشل التحميل' : 'Load failed';
      st.style.color = 'var(--danger)';
    } else {
      st.textContent = isAr ? `جاري التحضير… ${this.loadMessage || ''}` : this.loadMessage || 'Preparing…';
      st.style.color = 'var(--accent-2)';
    }
  },

  updateWelcome(){
    const isAr = ChemI18N.lang === 'ar';
    const suggestions = isAr
      ? ['ما هي الكيمياء؟', 'ما هي استخدامات الكيمياء العضوية؟', 'ما هي قاعدة هوند؟', 'قواعد الأمن والسلامة']
      : ['What is chemistry?', 'What are the uses of organic chemistry?', "What is Hund's rule?", 'Lab safety rules'];
    const body = this.el('helperBody');
    body.innerHTML = '';
    const intro = isAr
      ? `مرحباً نونو. اسألني أي سؤال عن الكتاب — سأقرأ المحتوى وأكتب لك الإجابة.`
      : `Hey Nono. Ask any question about the book — I'll read the content and write you the answer.`;
    const w = this.pushMsg('bot', intro);
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:8px';
    wrap.innerHTML = suggestions.map(s => `<span class="chip-suggest" data-q="${s.replace(/"/g,'&quot;')}">${s}</span>`).join('');
    w.appendChild(wrap);
    wrap.querySelectorAll('.chip-suggest').forEach(c=>{
      c.style.cssText = 'padding:5px 10px;border-radius:16px;background:var(--card);border:1px solid var(--line);font-size:.76rem;font-weight:600;color:var(--muted);cursor:pointer;transition:all .15s';
      c.addEventListener('click', ()=> this.handleQuery(c.dataset.q));
    });
  },

  mount(){
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button class="helper-fab" id="helperFab" aria-label="Ask the book">💬<span class="badge"></span></button>
      <div class="helper-panel hidden" id="helperPanel" role="dialog">
        <div class="helper-head">
          <div class="av">Ac</div>
          <div class="info">
            <div class="nm">Atrax Book Helper</div>
            <div class="st" id="helperStatus">Preparing…</div>
          </div>
          <button class="x" id="helperClose">✕</button>
        </div>
        <div class="helper-body" id="helperBody"></div>
        <div class="helper-compose">
          <textarea id="helperInput" rows="1" placeholder="Ask anything from the book…"></textarea>
          <button class="send" id="helperSend">➤</button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    this.el('helperFab').addEventListener('click', ()=> this.toggle());
    this.el('helperClose').addEventListener('click', ()=> this.closePanel());
    this.el('helperSend').addEventListener('click', ()=> this.submit());
    this.el('helperInput').addEventListener('keydown', e=>{
      if (e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); this.submit(); }
    });
    const ta = this.el('helperInput');
    ta.addEventListener('input', ()=>{ ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 110) + 'px'; });

    this.updateStatusUI();
    this.updateWelcome();
    document.addEventListener('langchange', ()=>{ this.updateStatusUI(); this.updateWelcome(); });
  },

  submit(){
    const inp = this.el('helperInput');
    const text = inp.value;
    inp.value = '';
    inp.style.height = 'auto';
    if (text.trim()) this.handleQuery(text);
  },

  init(){
    this.mount();
    this.updateStatusUI();
    this.updateWelcome();
  }
};

document.addEventListener('DOMContentLoaded', ()=> Helper.init());
