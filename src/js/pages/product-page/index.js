import Swiper from 'swiper/bundle';

const productThumbs = new Swiper(".js-product-thumbs", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    breakpoints: {
        450: {
            spaceBetween: 20,
            slidesPerView: 6,
        },
        700: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
        1050: {
            direction: "vertical",
            spaceBetween: 15,
            slidesPerView: 6,
            watchSlidesProgress: true,
        }
    }
});

const productSlider = new Swiper(".js-product-slider", {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
        nextEl: ".js-product-slider .swiper-button-next",
        prevEl: ".js-product-slider .swiper-button-prev",
    },
    thumbs: {
        swiper: productThumbs,
    }
});