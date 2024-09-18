

// home-1-hero
if($('.vy-h1-active').length) {
    let slider = new Swiper('.vy-h1-active', {
        loop: true,
        spaceBetween: 0,
        speed: 500,
        // effect: "fade",
        // fadeEffect: {
        //     crossFade: true
        // },

        autoplay: {
            delay: 5000000,
        },

        pagination: {
            el: ".vy-h1-pagination",
            clickable: true,
        },


    });
}

// services-1
if($('.vy-s1-active').length) {
    let slider = new Swiper('.vy-s1-active', {
        loop: true,
        spaceBetween: 32,
        speed: 500,
        autoplay: {
            delay: 5000000,
        },


        breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			},
		},

    });
}

// testimonial-1
if($('.vy-t1-active').length) {
    let slider = new Swiper('.vy-t1-active', {
        loop: true,
        spaceBetween: 32,
        speed: 500,
        autoplay: {
            delay: 5000000,
        },

        pagination: {
            el: ".vy-t1-pagination",
            clickable: true,
        },


        breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			},
		},

    });
}