import "./styles.css";

export default function App() {
  return <Greeting name="Vanessa" />;
}

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}
