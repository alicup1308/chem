/* language: JavaScript, file: shells.js, purpose: animated Bohr shell renderer */

const ShellRenderer = {
  PALETTE: ['#4cc9f0','#7b61ff','#38ef7d','#f783ac','#ffd43b','#ff922b','#b197fc'],

  render(container, shells, sym, accentColor){
    container.innerHTML = '';
    if (!shells || !shells.length) return;

    const size = 260;
    const cx = size/2, cy = size/2;
    const maxR = size/2 - 6;
    const n = shells.length;
    // rings evenly spaced — first ring smallest
    const ringGap = (maxR - 22) / Math.max(n, 1);

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.setAttribute('aria-label', `${sym} electron shells`);

    // gradient def
    const defs = document.createElementNS(svgNS, 'defs');
    defs.innerHTML = `
      <radialGradient id="nucleusGrad" cx="35%" cy="35%">
        <stop offset="0%" stop-color="${accentColor || '#4cc9f0'}"/>
        <stop offset="100%" stop-color="#7b61ff"/>
      </radialGradient>
    `;
    svg.appendChild(defs);

    // nucleus
    const nucleus = document.createElementNS(svgNS, 'circle');
    nucleus.setAttribute('cx', cx);
    nucleus.setAttribute('cy', cy);
    nucleus.setAttribute('r', 12);
    nucleus.setAttribute('class', 'nucleus');
    svg.appendChild(nucleus);

    // nucleus symbol text
    const nucText = document.createElementNS(svgNS, 'text');
    nucText.setAttribute('x', cx);
    nucText.setAttribute('y', cy + 3);
    nucText.setAttribute('text-anchor', 'middle');
    nucText.setAttribute('font-size', '9');
    nucText.setAttribute('font-weight', '900');
    nucText.setAttribute('fill', '#05101f');
    nucText.setAttribute('font-family', 'Inter, sans-serif');
    nucText.textContent = sym;
    svg.appendChild(nucText);

    // rings + electrons
    shells.forEach((count, i)=>{
      const r = 22 + ringGap * i;
      const ring = document.createElementNS(svgNS, 'circle');
      ring.setAttribute('cx', cx);
      ring.setAttribute('cy', cy);
      ring.setAttribute('r', r);
      ring.setAttribute('class', 'shell-ring');
      ring.setAttribute('stroke-dasharray', count > 12 ? '3 2' : '0');
      svg.appendChild(ring);

      // group electrons on this ring, rotated slightly per ring
      const g = document.createElementNS(svgNS, 'g');
      const spinClass = i % 3 === 0 ? 'spin-slow' : i % 3 === 1 ? 'spin-mid' : 'spin-fast';
      g.setAttribute('class', spinClass);
      // transform-origin around center
      g.style.transformOrigin = `${cx}px ${cy}px`;
      // alternate spin direction
      if (i % 2 === 1) g.style.animationDirection = 'reverse';

      const offset = (i * Math.PI * 2) / Math.max(shells.length, 1);
      for (let k = 0; k < count; k++){
        const angle = (k / count) * Math.PI * 2 + offset;
        const ex = cx + r * Math.cos(angle);
        const ey = cy + r * Math.sin(angle);
        const e = document.createElementNS(svgNS, 'circle');
        e.setAttribute('cx', ex);
        e.setAttribute('cy', ey);
        e.setAttribute('r', count > 18 ? 2 : 3);
        e.setAttribute('class', 'shell-e' + (i >= 3 ? ' outer' : ''));
        g.appendChild(e);
      }
      svg.appendChild(g);
    });

    container.appendChild(svg);

    // chip legend
    const legend = document.createElement('div');
    legend.className = 'shell-legend';
    shells.forEach((c, i)=>{
      const chip = document.createElement('span');
      chip.className = 'shell-chip';
      const col = this.PALETTE[i % this.PALETTE.length];
      chip.innerHTML = `<span class="dot" style="background:${col}"></span>K${i+1}: ${c}e⁻`;
      legend.appendChild(chip);
    });
    // use localized shell label if available
    container.appendChild(legend);
  }
};