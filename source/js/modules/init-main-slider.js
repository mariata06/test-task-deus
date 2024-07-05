const initMainSlider = () => {
  const slides = document.querySelector('.main-slider');
  const prevButton = document.querySelector('.main-slider__btn-prev');
  const nextButton = document.querySelector('.main-slider__btn-next');
  let currentIndex = 0;
  let isAnimating = false;

  // prevButton.addEventListener('click', () => {
  //   currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
  //   updateSlider();
  // });

  // nextButton.addEventListener('click', () => {
  //   currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
  //   updateSlider();
  // });

  // function updateSlider() {
  //   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  // }

  prevButton.addEventListener('click', () => {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });

  function updateSlider() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.addEventListener('transitionend', () => {
      isAnimating = false;
    }, {
      once: true,
    });
  }
};

export {initMainSlider};
