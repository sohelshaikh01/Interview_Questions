
// Values in Conversion

// 1. Conversion Returns to Number

// // let score = 34;
// // let score = "34"; // 34
// // let score = "34ab"; // NaN
// // let score = null; // 0
// let score = undefined; // NaN
// // true = 1, false = 0;

// // First know the type
// console.log(typeof score);

// // if string came, you want to operate on number
// // For all it return number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// // score will "33abc" it also make it number.
// // But, value will be shown as NaN

// // Type that not able to convert to number, 
// // gives NaN value.


// 2. Boolean Conversion

// let isLoggedIn = "superman";
// // 1        => true
// // ""       => false
// // "word"   => true

// let booleanLogged = Boolean(isLoggedIn);
// console.log(booleanLogged);

// 3. String Conversion

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 4. Operations
// Readability is important than tricky code

let value = 3;
let negValue = -value;

console.log(negValue);

// 5. Some Math Operations

// console.log(2+2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Armor";
let str2 = " Mark III";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 + 3); // "123"

// Use Paranthesis for clean code
console.log((3 + 4) * (5 % 2));


// 6. Convert into number - not good practice
console.log(+true); // 1
console.log(+"");   // 0

// Not better readability
let num1, num2, num3;

num1 = num2 = num3 = 2 + 2

// 7. Increament after using
let gameCounter = 100;
gameCounter++; 
console.log(gameCounter);