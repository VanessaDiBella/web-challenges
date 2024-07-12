import { createServer, request } from "node:http";
import Chance from "chance";
import { Console } from "node:console";

const chance = new Chance();
console.log(chance);
export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const message = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  response.statusCode = 200;
  response.end(message);
});
