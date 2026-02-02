(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobileNav');
  if(!btn || !menu) return;

  function closeMenu(){
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }
  function toggleMenu(){
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  }

  btn.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (e) => {
    if(e.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (e) => {
    if(menu.hidden) return;
    if(e.target.closest('.nav-toggle')) return;
    if(e.target.closest('#mobileNav')) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
  });
})();
