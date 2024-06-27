import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        One <strong>Piece</strong>
      </Button>
      <Button>Bleach</Button>
      <Button>Spy Family</Button>
      <Button>My Hero Academy</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
