// console.log('Hello Samuel');

// Importo la funzione name
const createName = require('./name.js');

// Importo la funzione da hobbies 
const createHobbies = require('./hobbies.js');

function createPerson() {
    
    // uso le funzioni importate
    const name = createName('firstName', 'lastName');
    const hobbies = createHobbies('hobbyOne, hobbyTwo, hobbyThree');
    console.log('Oggetto nome:', name);
    console.log('Oggetto hobbies:', hobbies);


    // costruisco l'oggetto
    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies: hobbies.hobbies
    };
}

module.exports = createPerson;

