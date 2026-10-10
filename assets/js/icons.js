document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[href]').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const menuButton = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('site-nav');
  if (!menuButton || !navigation) return;

  const setMenuState = isOpen => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    navigation.classList.toggle('is-open', isOpen);
    menuButton.innerHTML = isOpen
      ? '<i data-lucide="x"></i><span>Cerrar</span>'
      : '<i data-lucide="menu"></i><span>Menú</span>';

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  menuButton.addEventListener('click', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenuState(false);
  });
});
