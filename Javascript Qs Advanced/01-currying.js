// Currying in Javascript

// Example f(a, b) and f(a)(b) -------------------------

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

// Q2 - Create Function: sum(2)(6)(1) ---------------------

function sum(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}

sum(12)(2)(5);

// Q3 - Create Evaluate Function --------------------------
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
