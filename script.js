/**
 * Add background colour to navbar on scroll.
 */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", e => {
    if (window.pageYOffset >= 500) {
        navbar.classList.add("navscroll");
    }
    else {
        navbar.classList.remove("navscroll");
    }
})