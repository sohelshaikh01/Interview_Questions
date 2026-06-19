
/* 1. Basic Console Usage ############################## */

// 3. Use console.log() to display current year.
// 4. Create two variables and concat.
// 5. Trace value of variable before and after update using console.log.
// 6. Use console.error() to simulate an error message.

// 8. Check Type of Values
// console.log(typeof(true)); // boolean
// console.log(typeof(null)); // null
// console.log(typeof("st")); // string
// console.log(typeof(per)); // undefined
// for variable without assigned value
// undefined itself value and type is undefined

// Concatination (result => Number, String)
// let num = n1 + n2
// let num = n1 + "str" + n2

// 10. Log the result of 100 / 0 and observe the output.
// console.log(100/0); // Infinity

// let fname = "someThing";
// let ename = "Water";

// console.log(fname[4] + fname[8]);
// console.log(ename.length);
// console.log(ename.toUpperCase());
// console.log(ename.toLowerCase());
// console.log(fname.slice(2)); // 2 to last
// console.log(fname.slice(2, 5)); // 2 to 5
// console.log(fname.replace("Thing", "How"));

// let space = "   shut   up   !.  ";
// console.log(space.trim());
// const sentence = "What is going in your life";
// const word = "fat";
// console.log(sentence.startsWith("What"));
// console.log(sentence.startsWith(word));
// console.log(sentence.endsWith("life"));


/* 2. Variables and Data Types. ####################### */

// Display const variable Storing Math.PI
// Array cannot be updated by values can be reassign

/* 3. Loops & Conditions Questions ######################## */
// For Loop
// While Loop
// Do While Loop

// Print Factorial
// Print 3x3 2d array
// Reverse an array or just print
// Print divisible by 5

// while(i < 10) // This will be infinite loop and hang the browser
// so make auto save off or change tab

// Accessing each character of string using for of loop
// for(let char of "Javascript") {
//     console.log(char);
// }

// Iterate Object using for in loop.

// for(const key in obj) {
//     // console.log(key);
//     console.log(obj[key]);
// }

/* 4. Arrays Methods Questions ########################### */

// Print Array, Iterating, Accessing specific element
// Bubble Sort an Array by place largest at element at last.
// Copy Array without mutating original
// let narr = [...arr]
// let narr = []
// arr.forEach((value) => narr.push(value));

// let narr = arr;
// Operation on new array can also change original array.

// Concat() - Adds Two Array and return new Array
// ForEach - Iterate on each element, Object in array
// Shift and Unshift modify original array
// Shift - Remove element from start
// Unshift(1, 2, 3) - Add this at start & return total numbers

// Pop() - Removes elements from end
// Push() - Return total no. of elements
// Slice(index, quantity) - Give the selected part of array
// Splice() - 
// indexOf() - Find index of element (Not work for object in array)

// Reverse() - Reverse & modify original array
// Reverse using compare
// Sort() - Sort an array
// Split(" ") - make string to array, seperated by char in " "

// Array.from()

// Map, Filter, Reduce returns new array
// delete arr[1]; // array length remain same

// console.table(obj["if"]);
// console.log(console);
// console.info("This is info statement");
// console.error("This is an error");
// console.assert(4>45); // Assertion fail.
// console.warn("This the warning");
// console.time(console.table(obj["if"]));
// console.timeEnd(console.table(obj["if"]));


/* 5. Functions Questions ############################### */

// Function to check even or odd.
// Checking Circle Radius Function with Math.PI.
// Find sum of array. Accept array and use forEach on it.
// Check if a string starts with a specific character (use toLowerCase on string).
// Write factorial function.
// Reverse String using str.split("").reverse().join("");
// Convert string into Kebab case: place name => place-name
// str.toLowercase().split(" ").join("-")
// str.replaceAll(" ", "-")