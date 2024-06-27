import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>I can do this!</h1>
      <p>{"It's easy right?"}</p>
    </article>
  );
}
