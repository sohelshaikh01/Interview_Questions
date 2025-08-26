// Functions in Javascript

// Q1 - What is Function Declarations? -------------------

function square(num) {
    return num * num;
}


// Q2 - What is Function Expressions? ------------------------
// Storing function inside a variable
const square = function (num) {
    return num * num;
}

// anonymus function has no name, can be assigned to the variable, can be passed as callback.
// called as normal function
square();


// Q3 - What are First Class Function? -------------------------
// Function can be passed, return as value.
// Every things a variable can do is done by function.
// That's why they are called First Class Function

function square(num) {
    return num * num;
}

function displaySquare(fn) {
    console.log("square is", fn(2));
}

displaySquare(square);


// Q4 - What if IIFE? -------------------------------------------
// Immediatly Invoked Function Expression

// Syntax: (fn)();

(function getSq(num) {
    console.log(num * num);
})(5);


// Q5 - IIFE - O/P Based Question? ---------------------------------

(function (x){
    return (function (y) {
        console.log(x);
    })(2);
})(1);

// Function has reference to outer scope, so it access x outside scope because of 'Closure'


// Q6 - Function Scope ----------------------------------

let num1 = 20,
num2 = 2,
name = 'Topper';

function multiply() {
    return num1 * num2;
}

multiply(); // Returns 40

// A nested function example
function getScore() {
    let num1 = 2,
    num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

getScore();


// Q7 - Function Scope - O/P Based Question -------------------------

for(let i=0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}

// If there is 'var' it return 5 5 5 5 5


// Q8 - Function Hoisting -------------------------------------

function functionName() {
    console.log("workbench");
}

functionName(); // functions hoisted completly
// If this line was at top it works fine - as Global scope

let x = 5;

console.log(x);


// Q9 - Function Hoisting - O/P Based Question ---------------------

var x = 21;
var fun = function () {
    console.log(x); // x present in local so it refers it
    var x = 20;
};

fun();

// Hoist in Global Scope
// then Hoist in Local Scope
// x present in Local Scope
// As x is below it is undefined


// Q10 - Params vs Arguments ---------------------------------------

function double(num) { // Params - When we received
    console.log(num + num);
}

double(12); // Arguments - When we pass

// Spread vs Rest

function multiply (...nums) { // Rest Operator
    console.log(nums[0] * nums[1]);
}

let arr = [5, 6];

multiply(...nums); // Spread Operator



// Q11 - Params vs Arguments - O/P Based Question -------------------

const fn = (a, ...numbers, x, y) => { // Rest must be last Parameters
    console.log(x, y, numbers);
}

fn(5, 6, 7, 8);
// Like this fn(a, x, y, ...numbers)


// Q12 - Callback Function -------------------------------------

function name() {
    setTimeout(() => {
        console.log("Timeout !!!");
    }, 1500);
}
name(); // Ex - SetTimeout

// Another Example

function writeName(name) {
    console.log("The name is", name);
}

function runFn(callFn) {
    const name = "Amandeep";
    callFn(name);
}

runFn(writeName);

// Another Example

document.addEventListener('click', () => {
    console.log("Mene Touch Kiya");
});



// Q13 - Arrow Functions ---------------------------

const add = function (firstNum, secondNum) {
    return firstNum + secondNum;
};
// Normal Function

const squareArrow = (num) => {
    return num * num;
}
// Arrow Function

// Implicit "return" keyword

const squareArr = (num) => num * num;

// Argument 
function fn() {
    console.log(arguments);
}

fn(1, 2, 3); // Work Fine

const arrFn = () => {
    console.log(arguments);
}

fn(1, 3, 4); // Give 'argument not defined error'

// "this" keyword
let user = {
    username: "Teriffic",
    rc1: () => {
        console.log("Subscribe to " + this.username);
    },
    rc2() {
        console.log("Subscribe to " + this.username);
    },
}

user.rc1(); // ... undefined - as this is global object
user.rc2(); // ... Teriffic - as this is parent scope/object