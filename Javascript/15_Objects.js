// Object and its properties

// 1. Direct access of Object and can see its properties.

// Math Module => PI property
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// object can be iteratable if property is enable

// console.log(descripter);
// console.log(Math.PI); // this property strict in JS Engine to overwrite

// const mynewObject = Object.create(null);
// console.log(mynewObject);

// 2. Object and accessing properties

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log(this.name);
    }
}

console.log(chai);

// Accessing this object properties
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Configuring Properties in object
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false, 
    // unable to traverse this property in object loop
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "masala chai";
console.log("Object printing:", chai);

// 3. Iterating object properties using for-of

// When object is not iterable (enumerable: false);
for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
