import React from "react";
import "./styles.css";

export default function App() {
  return <Sum x={2} y={3} />;
}

function Sum({ x, y }) {
  return <p>{x + y}</p>;
}
