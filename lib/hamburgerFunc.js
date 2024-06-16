"use strict";
console.log("hello!");
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
function toggleButton() {
    navList === null || navList === void 0 ? void 0 : navList.classList.toggle("show");
}
hamburgerButton === null || hamburgerButton === void 0 ? void 0 : hamburgerButton.addEventListener("click", toggleButton);
//# sourceMappingURL=hamburgerFunc.js.map