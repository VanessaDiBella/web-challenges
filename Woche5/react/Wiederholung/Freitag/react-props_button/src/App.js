import React from "react";
import "./styles.css";

export default function App() {
  return <Button backgroundColor="red" text="Click me" disabled="true" />;
}

function Button({ backgroundColor, disabled, text }) {
  return (
    <section>
      <button
        type="button"
        style={{ backgroundColor: backgroundColor, color: "white" }}
        disabled={disabled}
      >
        {text}
      </button>
    </section>
  );
}
