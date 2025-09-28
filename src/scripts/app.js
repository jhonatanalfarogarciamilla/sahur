
document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    '¿Que si me gustas? ¡Qué va!.',
    'Solo que cada neurona mía guarda en su memoria',
    'el brillo de tus pupilas.',
    'como un ángulo recto que no sabe de tangentes,',
    'como los átomos que se rompen en silencio',
    'cada vez que tus ojos atraviesan mi existencia.'
  ];

  const particles = document.getElementById('particles');
  const linesContainer = document.getElementById('lines');
  const stage = document.getElementById('stage');

  let currentIndex = -1;

  function clearStage() {
    particles.innerHTML = '';
    linesContainer.innerHTML = '';
  }

  function showLine(index) {
    clearStage();
    const text = document.createElement('div');
    text.className = 'textBubble';
    text.textContent = lines[index];
    linesContainer.appendChild(text);

    // Show particles for the current line
    const particleSpawners = [
      spawnFlowersAndQmarks,
      spawnBrains,
      spawnStars,
      spawnMath,
      spawnAtoms,
      spawnHeartsAndTulips
    ];
    particleSpawners[index]();
  }

  function next() {
    currentIndex = (currentIndex + 1) % lines.length;
    showLine(currentIndex);
  }

  stage.addEventListener('click', next);

  function spawnFlowersAndQmarks() {
    const emojis = ['🌸', '🌺', '🌷', '🌼'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'flower';
      el.textContent = Math.random() < 0.5 ? emojis[Math.floor(Math.random() * emojis.length)] : '❓';
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = '-40px';
      el.style.animationDuration = `${4 + Math.random() * 4}s`;
      particles.appendChild(el);
    }
  }

  function spawnBrains() {
    for (let i = 0; i < 10; i++) {
      const el = document.createElement('div');
      el.className = 'brain';
      el.textContent = '🧠';
      el.style.left = `${Math.random() * 90}%`;
      el.style.top = `${Math.random() * 80}%`;
      particles.appendChild(el);
    }
  }

  function spawnStars() {
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'star';
      el.textContent = '✦';
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.fontSize = `${12 + Math.random() * 16}px`;
      particles.appendChild(el);
    }
  }

  function spawnMath() {
    const symbols = ['∠', '√', 'π', '∞', '∑', 'θ', '∆'];
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');
      el.className = 'math';
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left = `${Math.random() * 90}%`;
      el.style.top = `${Math.random() * 80}%`;
      particles.appendChild(el);
    }
  }

  function spawnAtoms() {
    const wrap = document.createElement('div');
    wrap.className = 'atom';
    const nuc = document.createElement('div');
    nuc.className = 'nucleus';
    wrap.appendChild(nuc);
    [40, 60, 80].forEach((r, i) => {
      const el = document.createElement('div');
      el.className = 'electron';
      el.style.left = '50%';
      el.style.top = '50%';
      el.style.transformOrigin = `0 -${r}px`;
      el.style.animation = `orbit ${3 + i * 1.5}s linear infinite`;
      wrap.appendChild(el);
    });
    particles.appendChild(wrap);
  }

  function spawnHeartsAndTulips() {
    const emojis = ['❤️', '🌷'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'flower'; // Reusing flower animation
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = '-40px';
      el.style.animationDuration = `${4 + Math.random() * 4}s`;
      particles.appendChild(el);
    }
  }

  // Initial line
  next();
});
