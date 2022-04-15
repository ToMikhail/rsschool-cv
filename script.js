const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".header__link");

//burger menu
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

//scrolling when clicking for burger menu
function onMenuLinkClick(e) {
  const menuLink = e.target;
  const gotoBlock = document.querySelector(menuLink.dataset.goto);
  const gotoBlockValue =
    gotoBlock.getBoundingClientRect().top +
    pageYOffset -
    document.querySelector(".header__body").offsetHeight;

  window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth",
  });

  e.preventDefault();

  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }
}

//toggling burger menu
burger.onclick = function openMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
};