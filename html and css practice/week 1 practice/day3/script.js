document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector(".main-nav");
    const navOffset = mainNav.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY > navOffset) {
            mainNav.classList.add("sticky");
        } else {
            mainNav.classList.remove("sticky");
        }
    });
});