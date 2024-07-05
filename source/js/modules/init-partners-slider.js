const initPartnersSlider = () => {
  const partnersSlider = new Swiper('.partners__swiper', {
    autoHeight: true, //enable auto height
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1,
    loop: false,
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //   },

    //   // when window width is >= 768px
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //   },
    // },
  });
};

export {initPartnersSlider};
