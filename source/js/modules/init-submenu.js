const initSubmenu = () => {
  let menuLink = document.querySelectorAll('.main-nav__item');

  menuLink.forEach((link) => {
    link.addEventListener('click', function () {
      const isActive = link.classList.contains('is-active');

      menuLink.forEach((l) => l.classList.remove('is-active'));

      if (!isActive) {
        link.classList.add('is-active');
      }
    });
  });
};

export {initSubmenu};
