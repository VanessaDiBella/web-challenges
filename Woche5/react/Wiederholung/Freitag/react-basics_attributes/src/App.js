import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">{"My favourite Anime:"}</h2>
      <label htmlFor="Name of the Anime">{"Name of Anime"}</label>
      <input name="Name of the Anime" id="my first id"></input>
      <a
        className="article__Link"
        href="https://de.wikipedia.org/wiki/Pok%C3%A9mon"
      >
        Click me
      </a>
    </article>
  );
}
