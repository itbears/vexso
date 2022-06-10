// Fix scroll
import smoothscroll from 'smoothscroll-polyfill';

// Плавная анимация элементов
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

// Элементы
const fadeInElements = document.querySelectorAll(".intro h2, .intro p, .reviews__item-text, .about-intro__texts-box-text, p.story__box-text")
const fadeInDelayElements = document.querySelectorAll(".intro a")
const fadeInLeftElements = document.querySelectorAll(".about__pic, .plus__row:nth-child(1) img, .plus__row:nth-child(1) img, .plus__row:nth-child(3) img, .story__box-pic_left")
const fadeInRightElements = document.querySelectorAll(".plus__row:nth-child(2) img, .story__box-pic_right")

function scrolling(e) {
    fadeInElements.forEach(el => {
        if (isPartiallyVisible(el)) {
            el.classList.add("fade-in")
        }
    })

    fadeInDelayElements.forEach(el => {
        if (isFullyVisible(el)) {
            el.classList.add("fade-in_delay")
        }
    })

    fadeInLeftElements.forEach(el => {
        if (isPartiallyVisible(el)) {
            el.classList.add("fade-in-left")
        }
    })

    fadeInRightElements.forEach(el => {
        if (isPartiallyVisible(el)) {
            el.classList.add("fade-in-right")
        }
    })
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Плавный скролл для страницы. Предустановка npm install smoothscroll-polyfill для safari
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        document.querySelector('.header').classList.remove('header__active')
        document.querySelector("body").classList.remove("scroll-off")
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 100; // если не нужен отступ сверху, либо число в px
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});