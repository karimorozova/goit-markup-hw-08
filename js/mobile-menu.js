(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
    // menu: document.querySelector('.backdrop'),
    menuItem: document.querySelector('.mobile-menu')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuItem.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menuItem.classList.toggle('is-hidden');
  }
  function removeMenu(e) {
    if (e.target === refs.menuItem) {
      refs.menuItem.classList.add('is-hidden');
    }
  }
})();