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