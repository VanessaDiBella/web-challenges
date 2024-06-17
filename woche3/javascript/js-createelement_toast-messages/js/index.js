console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// const messageText = "Hello";

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  //ListItem erstellt und benannt als newMessage
  const newMessage = document.createElement("li");

  newMessage.textContent = "Hi";
  newMessage.classList.add("toast-container__message");
  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = " ";
});
