// HEADER
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const header = document.getElementById("header");

// Mobile Menu
menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

closeMenu?.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay?.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

// Header Scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        header.classList.remove("transparent");
    } else {
        header.classList.add("transparent");
        header.classList.remove("scrolled");
    }

});
