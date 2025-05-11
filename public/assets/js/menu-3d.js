function init3DMenu() {
  const panel = document.getElementById('tiltPanel');
  if (!panel) return; // Перевірка наявності елементу

  // Паралакс-ефект
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    panel.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  // Скидання при виході курсору
  document.addEventListener('mouseleave', () => {
    panel.style.transform = 'rotateY(0) rotateX(0)';
  });
}

// Запускаємо при повному завантаженні DOM
document.addEventListener('DOMContentLoaded', init3DMenu);