/* language: JavaScript, file: table.js, purpose: render periodic table + modal */

const PTable = {
  filterCat: 'all',
  searchQuery: '',
  currentIdx: -1,

  el(id){ return document.getElementById(id); },

  init(){
    this.renderChips();
    this.renderLegend();
    this.renderTable();
    this.bindUI();
    document.addEventListener('langchange', ()=> {
      this.renderChips();
      this.renderLegend();
      this.renderTable();
      if (this.currentIdx >= 0){
        const el = ELEMENTS[this.currentIdx];
        if (el) this.openModal(el);
      }
    });
  },

  renderChips(){
    const wrap = this.el('chips');
    if (!wrap) return;
    wrap.innerHTML = '';
    const cats = ['all','alkali','alkaline','transition','post','metalloid','nonmetal','halogen','noble','lanthanide','actinide'];
    cats.forEach(cat=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (this.filterCat === cat ? ' active' : '');
      b.dataset.cat = cat;
      b.textContent = cat === 'all' ? ChemI18N.t('el.all') : ChemI18N.t('cat.' + cat);
      b.addEventListener('click', ()=> this.setFilter(cat));
      wrap.appendChild(b);
    });
  },

  renderLegend(){
    const wrap = this.el('legend');
    if (!wrap) return;
    wrap.innerHTML = '';
    const cats = ['alkali','alkaline','transition','post','metalloid','nonmetal','halogen','noble','lanthanide','actinide'];
    cats.forEach(cat=>{
      const c = CATEGORIES[cat];
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'legend-item' + (this.filterCat === cat ? ' active' : '');
      b.dataset.cat = cat;
      b.innerHTML = `<span class="legend-dot" style="background:${c.color}"></span><span>${ChemI18N.t(c.key)}</span>`;
      b.addEventListener('click', ()=> this.setFilter(cat));
      wrap.appendChild(b);
    });
  },

  renderTable(){
    const grid = this.el('ptable');
    if (!grid) return;
    grid.innerHTML = '';

    const map = {};
    const lanth = [], act = [];
    ELEMENTS.forEach((el, idx)=>{
      const cat = el[5], p = el[6], g = el[7], num = el[0];
      if (cat === 'lanthanide' && num >= 57 && num <= 71) lanth.push(idx);
      else if (cat === 'actinide' && num >= 89 && num <= 103) act.push(idx);
      else map[`${p}-${g}`] = idx;
    });

    // main 7x18
    for (let p = 1; p <= 7; p++){
      for (let g = 1; g <= 18; g++){
        const key = `${p}-${g}`;
        if (map[key] !== undefined){
          grid.appendChild(this.makeCell(map[key]));
        } else if ((p === 6 && g === 3) || (p === 7 && g === 3)){
          const lab = document.createElement('div');
          lab.className = 'pt-label';
          lab.textContent = p === 6 ? '57–71' : '89–103';
          grid.appendChild(lab);
        } else {
          const e = document.createElement('div');
          e.className = 'pt-cell hidden';
          grid.appendChild(e);
        }
      }
    }

    // spacer row
    for (let g = 1; g <= 18; g++){
      const sp = document.createElement('div');
      sp.className = 'pt-cell hidden';
      sp.style.aspectRatio = '1 / 0.35';
      grid.appendChild(sp);
    }

    // lanth + act rows
    const fillStrip = (arr)=>{
      for (let g = 1; g <= 18; g++){
        if (g >= 3 && g <= 17){
          const idx = arr[g - 3];
          if (idx !== undefined) grid.appendChild(this.makeCell(idx));
          else { const e = document.createElement('div'); e.className = 'pt-cell hidden'; grid.appendChild(e); }
        } else {
          const e = document.createElement('div'); e.className = 'pt-cell hidden'; grid.appendChild(e);
        }
      }
    };
    fillStrip(lanth);
    fillStrip(act);

    this.applyFilter();
  },

  makeCell(idx){
    const el = ELEMENTS[idx];
    const [num, sym, enName, arName, mass, cat] = el;
    const c = CATEGORIES[cat];
    const name = ChemI18N.lang === 'ar' ? arName : enName;

    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'pt-cell';
    cell.dataset.idx = idx;
    cell.dataset.cat = cat;
    cell.dataset.sym = sym.toLowerCase();
    cell.dataset.nameEn = enName.toLowerCase();
    cell.dataset.nameAr = arName;
    cell.dataset.num = num;
    cell.title = `${num}. ${sym} — ${name}`;
    cell.style.background = `linear-gradient(180deg, ${c.color}22, ${c.color}0d)`;
    cell.innerHTML = `
      <span class="num">${num}</span>
      <span class="sym">${sym}</span>
      <span class="nm">${name}</span>
      <span class="cat-bar" style="background:${c.color}"></span>
    `;
    cell.addEventListener('click', ()=> this.openModal(el));
    return cell;
  },

  setFilter(cat){
    this.filterCat = cat;
    document.querySelectorAll('.chip').forEach(ch=>{
      ch.classList.toggle('active', ch.dataset.cat === cat);
    });
    document.querySelectorAll('.legend-item').forEach(ch=>{
      ch.classList.toggle('active', ch.dataset.cat === cat);
    });
    this.applyFilter();
  },

  applyFilter(){
    const cells = document.querySelectorAll('.pt-cell:not(.hidden)');
    let matches = 0;
    const q = this.searchQuery.trim().toLowerCase();
    cells.forEach(cell=>{
      const cat = cell.dataset.cat;
      const sym = cell.dataset.sym;
      const ne = cell.dataset.nameEn;
      const na = cell.dataset.nameAr;
      const num = cell.dataset.num;

      const catOK = (this.filterCat === 'all') || (cat === this.filterCat);
      const searchOK = !q || sym.includes(q) || ne.includes(q) || na.includes(q) || num === q;

      if (catOK && searchOK){
        cell.classList.remove('dim');
        cell.classList.toggle('match', q.length > 0);
        matches++;
      } else {
        cell.classList.add('dim');
        cell.classList.remove('match');
      }
    });

    const noRes = this.el('noResMsg');
    if (noRes){
      if (matches === 0){
        noRes.textContent = ChemI18N.t('modal.noresult');
        noRes.classList.add('show');
      } else {
        noRes.classList.remove('show');
      }
    }
  },

  bindUI(){
    const search = this.el('elSearch');
    const clear = this.el('searchClear');
    if (search){
      search.addEventListener('input', e=>{
        this.searchQuery = e.target.value;
        if (clear) clear.classList.toggle('show', this.searchQuery.length > 0);
        this.applyFilter();
      });
    }
    if (clear){
      clear.addEventListener('click', ()=>{
        search.value = '';
        this.searchQuery = '';
        clear.classList.remove('show');
        this.applyFilter();
        search.focus();
      });
    }

    // modal close
    this.el('modalClose')?.addEventListener('click', ()=> this.closeModal());
    this.el('modalOverlay')?.addEventListener('click', e=>{
      if (e.target.id === 'modalOverlay') this.closeModal();
    });
    document.addEventListener('keydown', e=>{
      if (e.key === 'Escape') this.closeModal();
      if (this.currentIdx < 0) return;
      if (e.key === 'ArrowRight'){
        this.nav(1);
      } else if (e.key === 'ArrowLeft'){
        this.nav(-1);
      }
    });
  },

  nav(dir){
    if (this.currentIdx < 0) return;
    let next = this.currentIdx + dir;
    if (next < 0) next = ELEMENTS.length - 1;
    if (next >= ELEMENTS.length) next = 0;
    this.openModal(ELEMENTS[next]);
  },

  openModal(el){
    const idx = ELEMENTS.indexOf(el);
    this.currentIdx = idx;
    const [num, sym, enName, arName, mass, cat, period, group, phase, econfig, shells] = el;
    const c = CATEGORIES[cat];
    const name = ChemI18N.lang === 'ar' ? arName : enName;
    const catName = ChemI18N.t(c.key);
    const phaseName = ChemI18N.t('phase.' + ({s:'solid',l:'liquid',g:'gas',u:'unknown'}[phase]));
    const desc = getDesc(num, ChemI18N.lang) || ChemI18N.t('modal.placeholder');

    // left column
    const hero = this.el('elHero');
    hero.style.background = `linear-gradient(180deg, ${c.color}33, ${c.color}11)`;
    hero.style.borderColor = c.color;
    hero.innerHTML = `
      <span class="num">${num}</span>
      <span class="sym">${sym}</span>
      <span class="nm">${name}</span>
    `;

    const stage = this.el('shellStage');
    ShellRenderer.render(stage, shells, sym, c.color);

    // right column
    const right = this.el('modalRight');
    right.innerHTML = `
      <h2 id="modalTitle">${name}</h2>
      <span class="cat-badge" style="background:${c.color}">${catName}</span>
      <div class="stat-grid">
        <div class="stat"><div class="label">${ChemI18N.t('modal.atomic')}</div><div class="value">${num}</div></div>
        <div class="stat"><div class="label">${ChemI18N.t('modal.mass')}</div><div class="value">${mass} u</div></div>
        <div class="stat"><div class="label">${ChemI18N.t('modal.period')}</div><div class="value">${period}</div></div>
        <div class="stat"><div class="label">${ChemI18N.t('modal.group')}</div><div class="value">${group || '—'}</div></div>
        <div class="stat"><div class="label">${ChemI18N.t('modal.phase')}</div><div class="value">${phaseName}</div></div>
        <div class="stat"><div class="label">${ChemI18N.t('modal.shells')}</div><div class="value">${shells.join(' · ')}</div></div>
      </div>
      <div class="modal-section-title">${ChemI18N.t('modal.econfig')}</div>
      <div class="econfig-box">${econfig}</div>
      <div class="modal-section-title">${ChemI18N.t('modal.about')}</div>
      <p class="modal-desc">${desc}</p>
      <div class="modal-nav">
        <button class="btn" id="modalPrev">${ChemI18N.t('modal.prev')}</button>
        <button class="btn" id="modalNext">${ChemI18N.t('modal.next')}</button>
      </div>
    `;

    right.querySelector('#modalPrev').addEventListener('click', ()=> this.nav(-1));
    right.querySelector('#modalNext').addEventListener('click', ()=> this.nav(1));

    this.el('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeModal(){
    this.el('modalOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
    this.currentIdx = -1;
  }
};

document.addEventListener('DOMContentLoaded', ()=> PTable.init());