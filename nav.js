(function () {
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobileNav');
  if (!btn || !menu) return;

  function setExpanded(isOpen) {
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menu.hidden = !isOpen;
  }

  function closeMenu() {
    setExpanded(false);
  }

  function toggleMenu() {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  }

  // initialize state
  setExpanded(false);

  btn.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (menu.hidden) return;
    if (e.target.closest('.nav-toggle')) return;
    if (e.target.closest('#mobileNav')) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu if switching to desktop layout
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
})();
