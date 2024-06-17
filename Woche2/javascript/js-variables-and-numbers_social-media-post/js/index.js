console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "La Dolce Vita";
const text = "It's important to understand the meaning of life.";
const numbersOfLikes = 320;
const user = "Vanessa";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);
console.log(numbersOfLikes);
console.log(user);
console.log(isReported);

const addedLikes = 1;
const increasedLikes = numbersOfLikes + addedLikes;
console.log(increasedLikes);
// --^-- write your code here --^--
