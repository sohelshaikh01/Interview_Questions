/* Questions of Strings, Arrays, Conditions, Loops, Functions and Objects. */

// 1. Given a string, reverse each word in the sentence.
// Seperate each word using split(" ")
// Then reverse each word using split, reverse, join
// return new sentence

// 2. How to check if an object is an array or not? Provide some code.
// return Array.isArray([])
// return Array.isArray({})

// 3. How to empty an array in Javascript, Do not reset it to a new Array, and do loop through to pop each value?
// arr.length = 0;

// 4. How would you check if a number is an interger?
// num % 1 === 0

// 5. Concat array with itself using function

/* ---------------------------------- ################### */
/* Functions Questions. */

// 6. Write a Javascript function that reverse a number.
// Get last digit and keep adding

// 7. Write a Javascript function that checks whether a passed string is pallidrome or not.
// Compare reverse string with original

// 8. Write a Javascript function that returns a passed string with letters in alphabetical order.
// use sort() function of array, after converting into array.

// 9. Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// return word.charAt(0).toUpperCase() + word.substring(1);


// 10. Write a Javascript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string and undefined.
// return typeof value || typeof(value)


// 11. Write a Javascript function to get the number of occurences of each letter in specified string.  
// Track each item frequency using object, return it

/* Loops & Array Questions. ########################## */

// 1. Loop an array and add all members of it.

// 2. In an array of numbers and strings, only add those members which are not strings.
// Use Typeof to seperate
  

// 3. Loop an array of objects and remove all objects which don't have gender's value male.
// Use Filter function
// Also splice() can be used with for loop

// 4. Write a Javascript function to clone an array. 
// Spread operator or push
// Map function return new array
   
// 5. Write a Javascript function to get the first elements of an array. Passing a parameter 'n' will return the first 'n' element of the array.
// if n <= array.length return n first elements

// 6. Write a Javascript function to get the last elements of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// return n last elements

// 7. Write a JavaScript program to find the most frequent item of an array.
// function freq(arr) {
//     var freq = {};
//     arr.forEach(function (elem) {
//         if(freq.hasOwnProperty(elem)) freq[elem]++;
//         else freq[elem] = 1;
//     })
//     let ans =  Object.keys(freq).reduce(function(acc, next) {
//         return freq[acc] > freq[next] ? acc : next;
//     })
//     console.log(ans);
// }

// 8. Write a Javascript program to shuffle an array.
// function shuffleArr(arr) {   
//     let totalShuffleArea = arr.length;
//     while(totalShuffleArea > 0) {
//         totalShuffleArea--;
//         var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
//         let temp = arr[totalShuffleArea];
//         arr[totalShuffleArea] = arr[indexToBeExchanged];
//         arr[indexToBeExchanged] = temp;
//     }
//     return arr;
// }

// console.log(shuffleArr([1, 2, 3, 4, 5, 7]));


// 9. Write a Javascript program to compute the union of to arrays.
// Union Array with unique values:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100];

// Set cannot hold duplicates.
// function union(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))];
// }

// console.log(union([1, 2, 3, 4], [2, 4, 5, 7]));