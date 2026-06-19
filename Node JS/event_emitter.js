// It running JS File content in itself

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('please turn of the event');
    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle reminder');
    }, 3000);
});

console.log("This script is running");
console.log("This script is still running");

// Here event is emiting
myEmitter.emit('WaterFull');