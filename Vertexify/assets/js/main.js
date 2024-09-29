

jQuery(window).on('load', function(){

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
					end: "top 70%",
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
					scrub: 2,
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
				delay: 5000,
			},

			pagination: {
				el: ".vy-h1-pagination",
				clickable: true,
			},


		});
	}

	// vy-hero-2
	if($(".vy-h2-img-active").length) {

		var swiper = new Swiper(".vy-h2-img-active-2", {
			speed: 1000,
			loop: true,
			allowTouchMove: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
	
		});
	
		var swiper2 = new Swiper(".vy-h2-img-active", {
			speed: 1000,
			loop: true,
			grabCursor: true,
			autoplay: {
				delay: 5000,
			},

			effect: "creative",
			creativeEffect: {
			  prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
			  },
			  next: {
				translate: ["100%", 0, 0],
			  },
			},
	
			pagination: {
				el: ".vy-h2-pagination",
				clickable: true,
			},
	
			thumbs: {
				swiper: swiper,
			},
		});
	}
	gsap.from('.vy-hero-2-img-single img', { xPercent: 100 , duration: 1 })


	
	// vy-hero-3
	if($(".vy-h3-active").length) {

		var swiper3 = new Swiper(".vy-h3-active", {
			speed: 1000,
			loop: true,
			
			watchSlidesProgress: true,
			slideToClickedSlide: true,

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
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 4,
				},
				1600: {
					slidesPerView: 5,
				},
			},
	
		});
	
		var swiper2 = new Swiper(".vy-h3-active-2", {
			speed: 1000,
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
				
			thumbs: {
				swiper: swiper3,
			},
	
		});
	}
	gsap.from('.vy-hero-3-content-slider .swiper-slide', { 
		xPercent: 50, 
		opacity: 0,    
		duration: 1.5, 
		stagger: 0.2, 
		ease: "power2.out", 
		delay: .5
	});


	if($('.vy-h3-blog-active').length) {
		let slider = new Swiper('.vy-h3-blog-active', {
			loop: true,
			spaceBetween: 0,
			speed: 500,

			navigation: {
				nextEl: ".vy-h3-blog-right",
				prevEl: ".vy-h3-blog-left",
			},
	
		});
	}
	
});






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


// services-1
if($('.vy-s1-active').length) {
    let slider = new Swiper('.vy-s1-active', {
        loop: true,
        spaceBetween: 32,
        speed: 500,
        autoplay: {
            delay: 5000,
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
            delay: 5000,
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

// cta
var vycta1 = gsap.timeline({

	scrollTrigger: {
	  animation: vycta1,
	  trigger: '.vy-get-touch-1-area',
	  start: "top 90%",
	  end: "top 0%",
	  scrub: .5,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
vycta1.from(".vy-get-touch-1-bg-img" , { yPercent: -50 ,  duration:1 })

// img-parallax
gsap.utils.toArray(".wa-img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: .5,
		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});


// line-scale
const txaascale0 = gsap.utils.toArray('.txaascale0');
txaascale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0, duration: 2, }, 
	{ scaleX: 1, duration: 2, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
})

// scale
const wascale0 = gsap.utils.toArray('.wascale0');
wascale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: .9, duration: .3, }, 
	{ scale: 1, duration: .3, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 95%",
		animation: anim,
		toggleActions: 'play none none reverse',
		markers: false,

	});
})

// translate
const wastranslate = gsap.utils.toArray('.watranslate');
wastranslate.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ xPercent: 100, yPercent: 100, duration: .5, }, 
	{ xPercent: 0, yPercent: 0, duration: .5, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 95%",
		animation: anim,
		toggleActions: 'play none none reverse',
		markers: false,

	});
})


// footer
var vyf1 = gsap.timeline({

	scrollTrigger: {
	  animation: vyf1,
	  trigger: '.vy-footer-1-bg-shape',
	  start: "top 100%",
	  end: "top 0%",
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
vyf1.from(".vy-footer-1-bg-shape img" , { yPercent: 50 , xPercent: 50,  duration:1 })
vyf1.from(".vy-footer-1-bg-shape" , { opacity: 1 ,  duration:1 } , "<=.5")

// video-1
var vyvideo1 = gsap.timeline({

	scrollTrigger: {
	  animation: vyvideo1,
	  trigger: '.has-video-ani',
	  start: "top 70%",
	  end: "top 0%",
	  toggleActions: "play none none reverse",
	  markers: false
	}
});
vyvideo1.fromTo(".has-video-ani" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",  duration:1 }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 })
vyvideo1.from(".has-video-ani-elm" , { top: "-100%" ,  duration:1 }, "<=.2")

// testimonial-1
var vytesti1 = gsap.timeline({

	scrollTrigger: {
	  animation: vytesti1,
	  trigger: '.vy-testimonial-2-pattern',
	  start: "top 90%",
	  end: "top 0%",
	  toggleActions: "play none none reverse",
	  markers: false
	}
});
vytesti1.fromTo(".vy-testimonial-2-pattern" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",  duration:4 }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:4 })

// mouse-drag
if ($(".vy-cursor").length) {
	const cursor = document.querySelector('.vy-cursor');
	gsap.set(cursor, {
		xPercent: -50,
		yPercent: -50,
	});
	document.addEventListener('pointermove', movecursor);
	function movecursor(e) {
		gsap.to(cursor, {
			duration: 0.2,
			x: e.clientX,
			y: e.clientY,
		});
	}
}


// vy-video-2
if($('.vy-video-2-active').length) {
	let slider = new Swiper('.vy-video-2-active', {
		loop: true,
		spaceBetween: 0,
		speed: 2000,
		effect: "creative",
		creativeEffect: {
		  prev: {
			shadow: true,
			translate: ["-20%", 0, -1],
		  },
		  next: {
			translate: ["100%", 0, 0],
		  },
		},

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: ".vy-vi2-pagi",
			clickable: true,
		},


	});
}

// vy-property-2
if($('.vy-property-2-active').length) {
	let slider = new Swiper('.vy-property-2-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		grabCursor: true,
		effect: "creative",
		creativeEffect: {
		  prev: {
			shadow: false,
			translate: ["-20%", 0, -1],
		  },
		  next: {
			translate: ["100%", 0, 0],
		  },
		},

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: ".vy-h1-pagination",
			clickable: true,
		},

		navigation: {
			nextEl: ".vy-pro1-btn-right",
			prevEl: ".vy-pro1-btn-left",
		},


	});
}

// vy-choose-2
if($('.vy-choose-2-img-active').length) {
	let slider = new Swiper('.vy-choose-2-img-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		grabCursor: true,
		effect: "creative",
		creativeEffect: {
		  prev: {
			shadow: true,
			translate: ["-20%", 0, -1],
		  },
		  next: {
			translate: ["100%", 0, 0],
		  },
		},
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".vy-ch2-btn-right",
			prevEl: ".vy-ch2-btn-left",
		},


	});
}

// vy-testimonial-2
if($('.vy-testimonial-2-active').length) {
	let slider = new Swiper('.vy-testimonial-2-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		// effect: "fade",
		// fadeEffect: {
		// 	crossFade: true
		// },

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".vy-t2-btn-right",
			prevEl: ".vy-t2-btn-left",
		},

		pagination: {
			el: ".vy-t2-pagination",
			type: 'fraction',
			formatFractionCurrent: function (number) {
				if (number < 10) {
					return '0' + number;
				} else {
					return number;
				}
			}

		},

	});
}

// vy-pather-2
if($('.vy-c2-patner-active').length) {
	let slider = new Swiper('.vy-c2-patner-active', {
		loop: true,
		spaceBetween: 40,
		speed: 1000,

		autoplay: {
			delay: 5000,
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
		},

	});
}

gsap.utils.toArray(".txxaslideup").forEach(function(container) {
    let image = container.querySelector(".txxaslideup-item");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
		  start: "top 90%",
		  toggleActions: 'play none none reverse',
		  markers: false,
		  stagger: 0.3,
        },
      }); 

      tl.from(image, {
        yPercent: 100,
		duration: .5,
		stagger: 0.3,
      }).to(image, {
		yPercent: 0,
		duration: .5,
		stagger: 0.3,
      }); 

});

// services-3-slider
if($('.vy-s3-active').length) {
	let slider = new Swiper('.vy-s3-active', {
		loop: true,
		spaceBetween: 32,
		speed: 500,

		navigation: {
			nextEl: ".vy-s3-right",
			prevEl: ".vy-s3-left",
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


const waascale0 = gsap.utils.toArray('.txaascale0');
txaascale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0, duration: 1, }, 
	{ scaleX: 1, duration: 1, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
});


document.querySelectorAll(".vy-cover-trigger").forEach(trigger => {

	const vyct = gsap.timeline({
	  scrollTrigger: {
		trigger: trigger, 
		start: "top 85%", 
		toggleActions: "play none none reverse", 
		markers: false 
	  }
	});
  
	vyct.to(trigger.querySelectorAll(".vy-cover-slice"), 1, { 
	  height: 0, 
	  ease: "power4.InOut",
	  stagger: { amount: 0.33 } 
	}, 'start')
	
	.from(trigger.querySelector(".vy-cover-slice-img"), 1.2, { 
	  scale: 1.3, 
	  ease: "power4.InOut"
	}, 'start');

});
  