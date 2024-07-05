const initProductSlider = () => {
  const productSlider = new Swiper('.product__swiper', {
    autoHeight: true,
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function adjustSlidesForMobile() {
    if (window.innerWidth < 768) {

      const slides = document.querySelectorAll('.product__slide');
      if (slides.length > 5) {
        for (let i = slides.length - 1; i >= 5; i--) {
          productSlider.removeSlide(i);
        }
        productSlider.update();
      }
    }
  }

  window.addEventListener('load', adjustSlidesForMobile);
  window.addEventListener('resize', adjustSlidesForMobile);
};

export {initProductSlider};
