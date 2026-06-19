/* Function Introduction */

// 1. Basic Function Syntax and Call.
function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
}

// reference to call
sayMyName();

// 2. Function for doing work
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

// 3. Function returning value
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
    console.log("Code Man"); // after return unreachable code
}

// passing arguments
addTwoNumbers(3, 4); // 7
addTwoNumbers(3, null); // 3

// storing return value
const result = addTwoNumbers(5, 2);
console.log("Result: ", result);


// 4. Default parameter
function loginUserMessage(username = "sam") {
    // username === undefined
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

let icemanLogin = loginUserMessage("Iceman");
console.log(icemanLogin);
