console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
const p = document.createElement("p");
const username = document.createElement("username");
const button = document.createElement("button");
const footer = document.createElement("footer");

p.textContent = "Hi. Das ist ein neuer Content";
button.textContent = "<3Like";
username.textContent = "@vanessa";

article.classList.add("post");
p.classList.add("post__content");
username.classList.add("post__username");
footer.classList.add("post__footer");
button.classList.add("post__button");

footer.append(username, button);
article.append(p, footer);

document.body.append(article);

button.addEventListener("click", handleLikeButtonClick);
