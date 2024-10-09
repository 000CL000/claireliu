let lastScrollTop = 0;
const appHeader = document.getElementById("app-header");
const stickyPoint = appHeader.offsetTop;

window.addEventListener("scroll", function () {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("Current Scroll:", currentScrollTop);
    console.log("Last Scroll:", lastScrollTop);

    if (currentScrollTop > lastScrollTop) {
        console.log("Scrolling Down - Hiding Header");
        appHeader.style.top = "-100px"; // Hide header
    } else if (currentScrollTop < lastScrollTop) {
        console.log("Scrolling Up - Showing Header");
        appHeader.style.top = "0"; // Show header
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
