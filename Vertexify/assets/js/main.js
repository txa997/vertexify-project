

// title-animation
if($('[txaa-split-text-1]').length) {
	var txasplit1 = $('[txaa-split-text-1]');
	if(txasplit1.length == 0) gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
		el.split = new SplitText(el, { 
		type: "lines",
		linesClass: "split-line"
		});
	});
}


if($('.txaa-split-text-3').length) {
	var txasplit2 = $(".txaa-split-text-3");

	if(txasplit2.length == 0) ; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
	
		if( $(el).hasClass('txaa-split-text-3-ani') ){
			gsap.set(el.split.lines, {
				color: "#3533ff",
				yPercent: -100,
			});
		}
	
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},
	
			xPercent: 0,
			yPercent: 0,
			color: "inherit",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
	
	});
}

if($('.txaa-split-text-4').length) {
	var txasplit2 = $(".txaa-split-text-4");

	if(txasplit2.length == 0) ; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
	
		if( $(el).hasClass('txaa-split-text-4-ani') ){
			gsap.set(el.split.chars, {
				opacity: 0,
			});
		}
	
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},
	
			xPercent: 0,
			yPercent: 0,
			color: "inherit",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
	
	});
}

// home-1-hero
if($('.vy-h1-active').length) {
    let slider = new Swiper('.vy-h1-active', {
        loop: true,
        spaceBetween: 0,
        speed: 1000,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },

        autoplay: {
            delay: 50000000,
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

		navigation: {
			nextEl: ".vy-t1-slider-btn-right",
			prevEl: ".vy-t1-slider-btn-left",
		},


        breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
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