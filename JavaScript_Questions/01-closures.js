// Closures in Javascript

// Lexical Scope
// Scope refers to the current context of the code

var username = "Superman";

// global scope
function local() {
    // local scope
    console.log(username);
} 
local();

// A variable define outside a function can be accessible inside of another function
// A variable define inside a function cannot be accessible outside the function

// Gives error

function local() {
    var username = "Superman";
}
console.log(username);
local();

// Another Example ----------------------------------

// global scope
function subscribe() {
    var name = 'Superman';
    // inner scope 2
    function displayName() {
        // inner scope 1
        alert(name);
    }
    displayName(); // This is a Closure
}

subscribe();

// Another Example

var username = 'Superman'
function makeFunc() {
    var name = 'Mozilla'; // Create and Killed when function finishes execution
    function displayName(num) {
        alert(name, num, username);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc(4); // It bind it to its environment / Lexical Scope

// This can also call as
// makeFunc()(5);

// Every Closure have three scopes ---------------------
// Local Scope
// Outer Function Scope
// Global Scope

// global scope
var e = 10;
function sum(a) {
    // All are anonymous functions
    return function (b) {
        return function (c) {
            // outer function scope
            return function (d) {
                // local scope
                return a + b + c + d;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // log 10


// Closures Questions in Javascript

// Q1 - What will be logged to console? ---------------------------

let count = 0;
(function printCount() {
    if(count === 0) {
        let count = 1; // shadowing
        console.log(count); // 1
    }
    console.log(count); // 0
})();

// returns 1 0

// Q2 - Write a function that will allow you to do this ------------

function createBase(num) {
    return function (innerNum) {
        return num + innerNum;
    }
} // We just pass value for first function only once.
// It is usecase that set value.

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27

// Q3 - Time Optimization -----------------------------

function find(index) {
    let a = [];
    for(let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    
    console.log(a[index]);
}

console.time('6');
find(6);
console.timeEnd('6');

console.time('12');
find(12);
console.timeEnd('12');

// Answer

// function find() {
//     let a = [];
//     for(let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     return function (index) {
//         console.log(a[index]);
//     }
// }

// var findIn = find();

// console.time('6');
// findIn(6);
// console.timeEnd('6');

// console.time('12');
// findIn(12);
// console.timeEnd('12');


// Q4 - Block scope and setTimeout -----------------------------

function a() {
    for(var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000) 
    }
}

a();

// return 3 3 3
// As js engine refering to the current value of i
// use 'let' instead of 'var'
// { i = 0 } { i = 1 } { i = 2 } has value of each scope   

// Doing using clousures -------------------------------

for(var i = 0; i<2; i++) {
    function inner (i) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }

    inner(i);
}

// return 0 1 2


// Q5 - How would you use a closure to create a private counter? ----

function counter() {
    var _counter = 0;

    function add(increament) {
        _counter += increament;
    }
    
    function retrive() {
        return 'Counter = ' + _counter;
    }

    return {
        add,
        retrive,
    }
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());


// Q6 - What is Module Pattern? --------------------------------

var Module = (function () {
    function privateMethod() {
        console.log('Private Method')
    }

    return {
        publicMethod: function () {
            console.log('Public Method');
        },
    };
})();

Module.publicMethod();
Module.privateMethod();

// Private function can't be accessed outside the Module
// Public functions help to access Private function

// Q7 - Make this run only once --------------------------

let view;
function likeTheVideo() {
    view = 'Superman';
    console.log('Subscribe to ' + view);
}

likeTheVideo();

// Answer

let view;
function likeTheVideo() {
    let called = 0;

    return function() {
        if(called > 0) {
            console.log('Already a Superfan');
        } else {
            view = 'Roadside Coder';
            console.log("Subscribe to", view);
            called++;
        }
    }
}

let isSubscribe = likeTheVideo();
isSubscribe();
isSubscribe();


// Q8 - Once Polyfill ------------------------------
// Difficult

function once(func, context) {

    let ran;
    
    return function() {
        if(func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
    };
    return ran;
}

const hello = once(() => console.log('hello', a, c));

hello(1, 2);
hello(1, 2);
hello(1, 2);
// returns - hello 1 2

// Q9 - Memoize Polyfill --------------------------------
// Difficult

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        } 
        return res[argsCache];
    }
}

const clumsyProduct = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++) {}

    return num1 * num2;
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('First Call');

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('Second Call');


// Q10 - Difference between Closure and Scope

// Closure: When you create a function inside the function. The inner function is a Closure. This Closure is usually return so we can use outer function variables at later time.
// Local, Outer and Global Scope.

// Scope: What variable you have access to.
// Local and Global Scope