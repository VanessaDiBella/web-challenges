import { Fragment } from "react";
import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1324, name: "🍌 banana", color: "yellow" },
    { id: 45345, name: "🍍 Pineapple", color: "yellow" },
    { id: 4355632, name: "🍑 peach", color: "orange" },
    { id: 5667844, name: "🍉 watermelon", color: "red" },
    { id: 8956342, name: "🍓 strawberry", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
