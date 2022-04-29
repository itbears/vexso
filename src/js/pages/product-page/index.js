import Swiper from 'swiper/bundle';

const productThumbs = new Swiper(".js-product-thumbs", {
    direction: "vertical",
    spaceBetween: 15,
    slidesPerView: 6,
    watchSlidesProgress: true,
});

const productSlider = new Swiper(".js-product-slider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".js-product-slider .swiper-button-next",
        prevEl: ".js-product-slider .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    thumbs: {
        swiper: productThumbs,
    },
});