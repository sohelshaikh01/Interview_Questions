// Map in Array

// Map performs Operation on each value
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Map logic  
// const newNums = myNumbers.map((num) => num + 10);

// 2. Chaining - using multiple methods
const newNums = myNumbers
                .map((num) => num * 10) // result pass to second chain
                .map((num) => num + 1)
                .filter((num) => num >= 40);

console.log(newNums);

