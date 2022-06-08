import '../scss/app.scss';
import './header';
import './pages/main/index';
import "./pages/product-page/index";
import "./pages/cart/index";

const filterLabels = document.querySelectorAll(".wpfLiLabel")

filterLabels.forEach((label, i) => {
    label.addEventListener("click", () => {
        label.classList.add("active")
        filterLabels.forEach(l => {
            l.classList.remove("active")
        })
    })
})


