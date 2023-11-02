window.onload = function () {
    var swiperMain01 = new Swiper('.voice-slider', {
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiperMain02 = new Swiper('.voice-slider-sp', {
        slidesPerView: 1.8,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiperMain03 = new Swiper('.Achievements-slider-sp', {
        slidesPerView: 1.8,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}