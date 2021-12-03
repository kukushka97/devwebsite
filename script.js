new Swiper('.swiper-container' , {

	navigation: {
		nextEl: '.arrow_shadow__reversed',
		prevEl: '.arrow_shadow'
	},

	simulateTouch: false,

	slidesPerView: 1,

	spaceBetween: 10,

	loop: true,

	pagination : {
		el: '.swiper-pagination',
		type: 'bullets',
	},

	breakpoints: {
    // when window width is >= 480px
    900: {
      slidesPerView: 2, 
      spaceBetween: 0
    },
    // when window width is >= 640px
    1240: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
