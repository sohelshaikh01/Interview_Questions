
// New Keyword

const newHero = ["Hulk", "Spiderman"];

// Prototype is behavior. Which find things in parent scopes until null value.
// If somethings not find in that scope it find it in parent scope this is prototypal inheritance.
// Going in details of somethings

// Everything in javascript is object. all properties object have also array & string have.
// Object is last parent and its prototype is null.


function multiplyby5(num) {
    return num*5;
}

multiplyby5.power = 2;
// function also refers to the object

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Adding your own prototype properties to functions

createUser.prototype.increment = function() {
    this.score++;
    // Who call it, there value get increase.
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
// new keyword is responsible to tell that properties are added

// For Array using map prototype

// newHero.prototype.map();

chai.printMe();

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means  that it has access to properties and methods defined on the contructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created boject. If no explicit return value is specifed from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new Object is returned: After the constructor function has been called. if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
