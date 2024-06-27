import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 3245,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1248,
      name: "🍉 Watermelon",
      color: "red",
    },
    {
      id: 8943,
      name: "🍑 Peach",
      color: "green",
    },
    {
      id: 2976,
      name: "🍍 Pineapple",
      color: "yellow",
    },
  ];

  return (
    <main className="app">
      <div>
        {fruits.map(({ id, name, color }) => {
          return (
            <div key={id}>
              <Card name={name} color={color} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

// Create an array 'fruits'. It should contain at least 5
// objects which all have the properties 'name', 'id', 'color',
// e.g.:

// ```
// {
//   id: 1337,
//   name: '🍌 Banana',
//   color: 'yellow',
// }
// ```

// - Hint: the ids need to be unique.

// Use the array method `map` to create a Card component
// for each fruit in your array. Use the name of each object
// as the text of the component and the id as the key prop.
