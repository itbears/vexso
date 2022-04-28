/* Your JS Code goes here */
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const introSlider = new Swiper(".js-intro-slider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".js-intro-slider .swiper-button-next",
        prevEl: ".js-intro-slider .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const newProducts = new Swiper(".js-products-slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
        nextEl: '.js-products-slider .swiper-button-next',
        prevEl: '.js-products-slider .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1160: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})