import Swiper from 'swiper/bundle';

const product = document.querySelector(".product")

if (product) {
    const controlBtns = document.querySelectorAll(".product__num-btn")
    const input = document.querySelector(".product__controls .input-text.qty");

    controlBtns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const button = event.target;
            if (button.dataset.operation === "decrement") {
                input.value = parseInt(input.value) - 1;
            } else if (button.dataset.operation === "increment") {
                input.value = parseInt(input.value) + 1;
            }
        })
    })
}

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