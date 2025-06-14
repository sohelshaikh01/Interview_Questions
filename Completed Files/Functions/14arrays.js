// Function to print the largest array number.

let num = [12, 23, 6, 632, 983, 20];
console.log("Highest number is:", Math.max(...num));

// Sum of all numbers in an array.

let sum = [1, 2, 5, 8, 3];

let sumAll = sum.reduce((a, b) => {
    return a + b;
});

console.log("Sum of all numbers is:", sumAll);

// Remove duplicate item from an array / count all words in string.

var str = 'one two three four five';

const len = str.split(" ").length;
console.log(len);

// Printing above string in array.
const arr = str.split(" ");
console.log(arr);

for(let i in arr){
    console.log(arr[i]);
}
