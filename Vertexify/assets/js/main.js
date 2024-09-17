

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