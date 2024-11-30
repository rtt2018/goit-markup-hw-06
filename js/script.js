const openButton = document.getElementById("order-button");
const closeButton = document.getElementById("close-button");
const backdropWindow = document.querySelector(".backdrop");
// mobile menu
const openMobilemenu = document.querySelector(".burger-menu-button");
const closeMobileMenu = document.getElementById("close-menu-button");
const menuContainer = document.querySelector(".menu-mobile");

openButton.addEventListener("click", () => {
  backdropWindow.classList.toggle("is-open");
});

closeButton.addEventListener("click", () => {
  backdropWindow.classList.toggle("is-open");
});

openMobilemenu.addEventListener("click", () => {
  menuContainer.classList.toggle("is-open");
});

closeMobileMenu.addEventListener("click", () => {
  menuContainer.classList.toggle("is-open");
});
