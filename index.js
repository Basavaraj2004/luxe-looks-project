document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.querySelector(".side-navbar");
    if (sidenav) {
        sidenav.style.display = "none"; // Initially hide the side navbar
    }
});

function toggleNavbar() {
    var sidenav = document.querySelector(".side-navbar");
    if (sidenav) {
        // Always set display to "block"
        sidenav.style.display = "block";
    }
}
function closeNavbar() {
    var sidenav = document.querySelector(".side-navbar");
    if (sidenav) {
        // Always set display to "block"
        sidenav.style.display = "none";
    }
}