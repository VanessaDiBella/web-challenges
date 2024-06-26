console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");
console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);

console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = null;

const allCardsWithTagsHTMLOrJSThatAreBookmarked = null;

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

/*In the `./index.js` file, there is a `cards` array with three objects.
Below this array, you will find a couple of variables (e.g. `onlyCardsWithTagHTML`). 
They are all initialized with `null`.

And now it's your turn: delete the value `null` and write code such 
that the variables have a value corresponding to their name. 
Use `filter` to achieve this goal.

Switch to the `./index.js` file and map / filtersome recipes!*/
