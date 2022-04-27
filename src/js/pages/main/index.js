/* Your JS Code goes here */
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const introSlider = new Swiper(".js-intro-slider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});