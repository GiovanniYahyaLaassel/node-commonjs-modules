const createPerson = require('./people.js');

createPerson();

// Ottengo il parametro dal CLI
const firstName = process.argv[2];
const lastName = process.argv[3];
const hobbyOne = process.argv[4];
const hobbyTwo = process.argv[5];
const hobbyThree = process.argv[6];


console.log(`Hello: ${firstName}, ${lastName}`);
console.log(`The Hobbies is: ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`);










// firstName, lastName, hobbyOne, hobbyTwo, hobbyThree