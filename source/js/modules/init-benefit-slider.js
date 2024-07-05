// const initBenefitSlider = () => {
//   const benefitSlider = new Swiper('.tab-panel', {
//     // autoHeight: true, //enable auto height
//     // slidesPerView: 1,
//     loop: true,
//     // spaceBetween: 30,
//     // effect: 'fade',
//     pagination: {
//       // el: '.swiper-pagination',
//       clickable: true,
//     },
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
//   });
// };

// export {initBenefitSlider};

const initBenefitSlider = () => {
  const createSlider = () => {
    if (window.innerWidth <= 767 && !document.querySelector('.tab-panel').swiper) {
      const benefitSlider = new Swiper('.tab-panel', {
        loop: true,
        pagination: {
          clickable: true,
        },
      });
    } else if (window.innerWidth > 767 && document.querySelector('.tab-panel').swiper) {
      document.querySelector('.tab-panel').swiper.destroy(true, true);
    }
  };

  createSlider();

  window.addEventListener('resize', createSlider);
};

export {initBenefitSlider};
