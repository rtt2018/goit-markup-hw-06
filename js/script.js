const openButton = document.getElementById("order-button");
const closeButton = document.getElementById("close-button");
const backdropWindow = document.querySelector(".backdrop");

// console.log(openButton);
// console.log(closeButton);
// console.log(modalWindow);

openButton.addEventListener("click", () => {
  backdropWindow.classList.toggle("is-open");
});

closeButton.addEventListener("click", () => {
  backdropWindow.classList.toggle("is-open");
});
