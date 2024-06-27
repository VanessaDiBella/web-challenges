import "./styles.css";

export default function App() {
  return <Greeting name="Merle" />;
}

function Greeting({ name }) {
  return <h1> Hello, {name === "Merle" ? "Coach" : name}!</h1>;
}
