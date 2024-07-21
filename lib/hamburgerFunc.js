"use strict";
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const aboutMeLink = document.getElementById("about-me-link");
const howIWorkLink = document.getElementById("how-i-work");
const contactLink = document.getElementById("contact-link");
const nav = document.getElementsByTagName("nav");
function toggleButton() {
    navList === null || navList === void 0 ? void 0 : navList.classList.toggle("show");
}
function onMenuItemClick() {
    if (navList === null || navList === void 0 ? void 0 : navList.classList.contains("show")) {
        navList.classList.remove("show");
    }
}
hamburgerButton === null || hamburgerButton === void 0 ? void 0 : hamburgerButton.addEventListener("click", toggleButton);
aboutMeLink === null || aboutMeLink === void 0 ? void 0 : aboutMeLink.addEventListener("click", onMenuItemClick);
howIWorkLink === null || howIWorkLink === void 0 ? void 0 : howIWorkLink.addEventListener("click", onMenuItemClick);
contactLink === null || contactLink === void 0 ? void 0 : contactLink.addEventListener("click", onMenuItemClick);
//# sourceMappingURL=hamburgerFunc.js.map