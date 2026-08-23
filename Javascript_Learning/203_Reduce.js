// Reduce in Array

// What is Reduce ?
// The reduce() method executes a user-supplied "reducer" callback function

// 1. Reduce Function to calculate total of array

const myNums = [1, 3, 5, 7];

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`acc: ${acc} and currval: ${currVal}`);
    return acc + currVal
}, 0);
// initialValue given to accumulator in first iteration

console.log("Total of numbers:", myTotal);

// 2. Calculating Total Price of Shopping cart

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 1999 },
    { itemName: "ml course", price: 3999 },
    { itemName: "design course", price: 4999 }
];

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0);

console.log(priceToPay);