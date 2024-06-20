console.clear();

// Part 1: Password

/*check if the received password matches our 
`SUPER_SECRET_PASSWORD`
- if the password is wrong, console.log "Access denied!"
- if the password matches, console.log "Welcome! 
You are logged in as Brunhilde1984."
- try our different values for `receivedPassword`*/

const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Acces denied");
}

// Part 2: Even / Odd
/*- use an if/else statement to log 'even number' 
if the variable `number` is even, and 'odd number' otherwise
- use different values for `number` to check if all cases work. */
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
/*- for a given `numberOfHotdogs` a person buys, 
log the respective price that the person has to pay:
- for less than 5 hotdogs: 2 euro per hotdog
- for at least 5 but less than 100 hotdogs: 1.50 euro 
per hotdog
- for at least 100 but less than 1 000 000 hotdogs:
1 euro per hotdog
- for at least 1 000 000 hotdogs: 0.10 euro per hotdog
- change the `numberOfHotdogs` to see if your code works 
properly*/
const numberOfHotdogs = 4;
let totalPrice;

if (numberOfHotdogs < 5) {
  totalPrice = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  totalPrice = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  totalPrice = numberOfHotdogs * 1;
} else {
  totalPrice = numberOfHotdogs * 0.1;
}
const formattedPrice = totalPrice.toFixed(2);
console.log(`total price: ${formattedPrice} €`);

// Part 4: Daytime
/*- use a ternary operator to define the `statement` 
variable as follows:
- if the currentHour is smaller than 17, 
`statement` should read "Still need to learn..."
- if the currentHour is greater or equal to 17 it 
should equal "Partytime!!!"*/
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
