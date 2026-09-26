/* language: JavaScript, file: app.js, purpose: nav + theme + lang boot */

const ChemApp = {
  init(){
    this.initTheme();
    this.initLang();
    this.initNav();
  },
  initTheme(){
    const saved = localStorage.getItem('cf-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('themeBtn');
    if (btn){
      btn.addEventListener('click', ()=>{
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('cf-theme', next);
      });
    }
  },
  initLang(){
    ChemI18N.apply();
    const btn = document.getElementById('langBtn');
    if (btn){
      btn.addEventListener('click', ()=> ChemI18N.toggle());
    }
  },
  initNav(){
    // smooth-scroll only for same-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth'});
        }
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', ()=> ChemApp.init());