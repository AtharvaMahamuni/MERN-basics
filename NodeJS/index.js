 
const atharva = require('./second');

console.log("Hello World", atharva);

console.log("Hello World", atharva.name);

function sayName(name) {
    console.log("Hello", name);
}

sayName(atharva.name);