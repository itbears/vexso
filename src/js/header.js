// Menu
const menuBurger = document.querySelector(".js-menu-burger")
const menu = document.querySelector(".js-menu")
const menuBack = document.querySelector(".js-menu-back")

menuBurger.addEventListener("click", () => {
    menu.classList.toggle("active")
    menuBack.classList.toggle("active")
    setTimeout(() => {
        menuBack.classList.toggle("on")
    }, 400)
})

menuBack.addEventListener("mouseover", () => {
    if (menuBack.classList.contains("on")) {
        menu.classList.add("exit")
        setTimeout(() => {
            menu.classList.toggle("active")
            menuBack.classList.toggle("active")
            menuBack.classList.toggle("on")
            menu.classList.toggle("exit")
        }, 500)
    }
})

// Scroll Header
const header = document.querySelector(".js-header")
const page = document.querySelector(".page")
const pagePadding = header.offsetHeight
const scrollHeader = () => {
    if (window.pageYOffset >= header.offsetHeight) {
        // page.style.paddingTop = `${pagePadding}px`;
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
        // page.style.paddingTop = `0px`;
    }
}
window.onscroll = function () { scrollHeader() };