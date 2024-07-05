const initMobileMenu = () => {
  const btnReset = document.querySelector('.main-nav__toggle');
  const mobileNav = document.querySelector('.main-nav__wrapper');

  btnReset.addEventListener('click', function () {
    btnReset.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  });
};

export {initMobileMenu};
