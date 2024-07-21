const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const aboutMeLink = document.getElementById("about-me-link");
const howIWorkLink = document.getElementById("how-i-work");
const contactLink = document.getElementById("contact-link");
const nav = document.getElementsByTagName("nav");

function toggleButton() {
  navList?.classList.toggle("show");
}

function onMenuItemClick() {
  if (navList?.classList.contains("show")) {
    navList.classList.remove("show");
  }
}

hamburgerButton?.addEventListener("click", toggleButton);
aboutMeLink?.addEventListener("click", onMenuItemClick);
howIWorkLink?.addEventListener("click", onMenuItemClick);
contactLink?.addEventListener("click", onMenuItemClick);
