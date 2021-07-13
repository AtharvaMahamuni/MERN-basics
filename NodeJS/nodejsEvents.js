const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => { // you can change name of event with anything
  console.log("Please turn off the motor");
  setTimeout( () => {
    console.log('Plearse turn off the motor! It\'s a gentle reminder');
  }, 3000);
});

console.log("the is running");
console.log("the script is still running");

myEmitter.emit('event');