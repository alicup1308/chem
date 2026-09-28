/* language: JavaScript, file: helper.js, purpose: v8 — no browser download, all server-side */

const HELPER_CONFIG = {
  workerUrl: 'https://chem-proxy.cupali892.workers.dev'
};

const Helper = {
  open: false,

  el(id){ return document.getElementById(id); },

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

    const typing = this.pushMsg('bot', `<div class="answer-main" id="liveAnswer"></div>`);
    const live = typing.querySelector('#liveAnswer');

    try {
      const res = await fetch(HELPER_CONFIG.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, lang: isAr ? 'ar' : 'en' })
      });

      if (!res.ok){
        live.textContent = isAr ? 'حدث خطأ. حاول مرة أخرى.' : 'Error. Try again.';
        return;
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
            const t = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (t){
              full += t;
              live.textContent = full;
              this.el('helperBody').scrollTop = this.el('helperBody').scrollHeight;
            }
          } catch {}
        }
      }

      if (!full){
        live.textContent = isAr ? 'لم أستطع توليد إجابة.' : 'Couldn\'t generate an answer.';
      }
    } catch (e){
      console.error(e);
      live.textContent = isAr ? 'فشل الاتصال.' : 'Connection failed.';
    }
  },

  openPanel(){
    this.el('helperPanel').classList.remove('hidden');
    this.open = true;
    setTimeout(()=> this.el('helperInput').focus(), 100);
  },
  closePanel(){
    this.el('helperPanel').classList.add('hidden');
    this.open = false;
  },
  toggle(){ this.open ? this.closePanel() : this.openPanel(); },

  updateWelcome(){
    const isAr = ChemI18N.lang === 'ar';
    const suggestions = isAr
      ? ['ما هي الكيمياء؟', 'ما هي استخدامات الكيمياء العضوية؟', 'ما هي قاعدة هوند؟', 'قواعد الأمن والسلامة']
      : ['What is chemistry?', 'What are the uses of organic chemistry?', "What is Hund's rule?", 'Lab safety rules'];
    const body = this.el('helperBody');
    body.innerHTML = '';
    const intro = isAr
      ? 'مرحباً نونو. اسألني أي سؤال عن الكتاب.'
      : 'Hey Nono. Ask me any question about the book.';
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
      <button class="helper-fab" id="helperFab" aria-label="Ask the book">💬</button>
      <div class="helper-panel hidden" id="helperPanel" role="dialog">
        <div class="helper-head">
          <div class="av">Ac</div>
          <div class="info">
            <div class="nm">Atrax Book Helper</div>
            <div class="st" id="helperStatus" style="color:var(--accent-3)">Ready</div>
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

    this.updateWelcome();
    document.addEventListener('langchange', ()=> this.updateWelcome());
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
  }
};

document.addEventListener('DOMContentLoaded', ()=> Helper.init());
