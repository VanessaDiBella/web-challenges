import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleDif() {
    setCount(count - 1);
  }
  function handleSum() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDif}>
          -
        </button>
        <button type="button" onClick={handleSum}>
          +
        </button>
      </div>
    </div>
  );
}
