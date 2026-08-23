// Function with Objects and Arrays

// 1. Rest and Spread

// rest must be at end
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

// 2. Object with Function

const user = {
    username: "iceman",
    price: 99
}

// function taking object
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// passing object or reference
// handleObject(user);
handleObject({
    username: "amenster",
    price: 199
})

// 3. Arrays with Function

const myNewArray = [20, 400, 50, 100];

function returnSecondValue(getArray) {
    return getArray[1];
}

// passing array to function
console.log(returnSecondValue(myNewArray));