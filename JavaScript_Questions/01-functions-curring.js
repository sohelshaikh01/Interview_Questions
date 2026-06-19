// Functions in Javascript + Currying remains

// Q1 - What is Function Declarations? -------------------

function square(num) {
    return num * num;
}

// Q2 - What is Function Expressions? ------------------------
// Storing function inside a variable
// anonymus function has no name, can be assigned to the variable, can be passed as callback.
// called as normal function
square();

// Q3 - What are First Class Function? -------------------------
// Function can be passed, return as value.
// Every things a variable can do is done by function.
// That's why they are called First Class Function


// Q4 - What if IIFE? -------------------------------------------
// Immediatly Invoked Function Expression

// Syntax: (fn)(args);
// Function can have name or not.


// Q5 - IIFE - O/P Based Question? ---------------------------------

(function (x){
    return (function (y) {
        // closure
        console.log(x);
    })(2);
})(1);

// Function has reference to outer scope, so it access x outside scope because of 'Closure'

// Q6 - Function Scope ----------------------------------
// Function Accessing variables from args
// Variables outside function
// nested function accessing name variable outside parent function

// Q7 - Function Scope - O/P Based Question -------------------------
// For Loop 0 to 5
// Inside that setTimeout which console i and time is i*1000
// If there is 'var' it return 5 5 5 5 5


// Q8 - Function Hoisting -------------------------------------
// Functions are also hoisted like variables in JS
// Which means there are declared at top of code while execution

// Hoisted variables are only after the initialization line.


// Q10 - Params vs Arguments ---------------------------------------
// Params - when we receives
// Arguments - when we pass

// REST and SPREAD
// Rest - when we receives
// Spread - when we pass

// Spread passes each element in array as arguments
// Ex: arr[1, 2, 3]  => (...arr);

// Rest must be last parameters
// Ex: (a, b, ...abc);


// Q12 - Callback Function -------------------------------------
// Also Used on Event Listeners
// Used in setTimeout, Intervals
// Function can also be passed to other function

// Q13 - Arrow Functions ---------------------------
// Function using  () => {}
// Can be return in one line with return

// Function Argument function fn() {}
// Fn Exp, Arrow Fn, Callback Fn, Anonymus fn

// It works in Normal Function
// fn() { console.log(arguments) }
// fn(1, 2, 3)

// "this" keyword
// Only have parent object context in normal function
// In arrow function it point to global object

// Currying in Javascript

// Example f(a, b) and f(a)(b) -------------------------
// Create for sum(10)(5)(7)

function f(a) {
    return function (b) {
        console.log(a, b);
    }
}

f(11)(2);


// Q1 - Why should we use currying ?

// To Avoid Passing Same variable again and again.
// To Create Higher Order Function
// To Make your functions pure
// To Make function less prone to errors


// Q2 - Create Evaluate Function --------------------------
/*
    evaluate("sum")(4)(2) => 6
    evaluate("subtract")(4)(2) => 2
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
*/
// Can also be done using if-else

function evaluate(operation) {
    return function (a) {
        return function (b) {

            switch (operation) {
                case "sum":
                    return a + b;
                    break;
                case "subtract":
                    return a - b;
                    break;
                case "multiply":
                    return a * b;
                    break;
                case "divide":
                    return a / b;
                    break;
                default:
                    break;
            }
        }
    }
}

// console.log(evaluate("sum")(3)(4));
const add = evaluate("sum");
sum(2)(7);


// Q4 - Infinite Currying -> sum(1)(2)(3)....(n) --------------------

function add(a) {
    return function (b) {
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(2)(4)(5)(7));


// Q5 - Currying vs Partial Applications -----------------------
// Partial Applications: Transform function with small arity,
// Which have different number of function and params.

function sum(a) {
    return function (b, c) {
        return a + b + c;
    }
}

const x = sum(10);

console.log(x(5,6));
console.log(x(11, 5));

// or

console.log(sum(20)(1, 4));


// Q6 - Manipulation DOM ------------------------

function updateElementText(id) {
    return function (content) {
        document.querySelector('#' + id).textContent = content;
    };
}

const updateHeader = updateElementText('content');
updateHeader('This is my JavaScript Code');


// Q7 - curry() implementation
// Converts f(a, b, c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
