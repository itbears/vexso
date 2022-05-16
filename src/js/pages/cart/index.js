const cart = document.querySelector(".cart-wrapper")

if (cart) {
    const controlBtnsMinus = document.querySelectorAll(".js-product-num-minus")
    const controlBtnsPLus = document.querySelectorAll(".js-product-num-plus")
    const input = document.querySelectorAll(".product__controls-inner .input-text.qty");

    input.forEach((input, index) => {
        controlBtnsMinus[index].addEventListener("click", () => {
            input.value = parseInt(input.value) - 1;
        })
        controlBtnsPLus[index].addEventListener("click", () => {
            input.value = parseInt(input.value) + 1;
        })
    })
}