console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
