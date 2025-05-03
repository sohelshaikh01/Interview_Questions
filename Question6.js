
// // Questions of Strings, Arrays, Conditions, Loops, Functions and Objects.

// 1. Given a string, reverse each word in the sentence.
// super man
// repus nam
// let str = "Its an amazing things";
// let revStr = str.split(" ")
//     .map(function(word) {
//         return word.split("").reverse().join("")
//     }).join(" ");
// console.log(revStr);

// 2. How to check if an object is an array or not? Provide some code.
// function checkArray(elem){
//     return Array.isArray(elem);

// }
// console.log(checkArray([]));
// console.log(checkArray({}));


// 3. How to empty an array in Javascript, Do not reset it to a new Array, and do loop through to pop each value?
// let arr = [1, 2, 3, 4, 5];
// arr.length = 0;
// console.log(arr);


// 4. How would you check if a number is an interger?
// let num = 25.1;
// // 25.1%1 = 25 Reminder .1 -> 1 will not divide 0.1
// // Or Number.isInteger
// if(num%1 === 0) {
//     console.log("It is an integer");
// }
// else {
//     console.log("Not an integer!")
// }


// 5. Make this work :
// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5];
// let arr = [1, 2, 3, 4];
// function duplicate(arr) {
//     return arr.concat(arr);
// }
// console.log(duplicate(arr));

// // Functions Questions.

// 6. Write a Javascript function that reverse a number.
// function reverseK(num){
//     // return Number(num.toString().split("").reverse().join(""));
//     let rev = 0;
//     while(num > 0) {
//         let rem = (num%10);
//         rev = rev * 10 + rem;
//         num = Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverseK(1234));


// 7. Write a Javascript function that checks whether a passed string is pallidrome or not.
// function strPallCheck(str) {
//     let revStr =  str.split("").reverse().join("");
//     if( str === revStr) return "It is pallidrome";
//     else return "Not pallidrome";
//     // return revStr === str;
// }
// console.log(strPallCheck("superepus"));



// 8. Write a Javascript function that returns a passed string with letters in alphabetical order.
// let str = "apple";
// function strCharSorter(str) {
//     return str.split("").sort().join("");
// }
// console.log(strCharSorter(str));


// 9. Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// let str = "hey there how are you";
// function strFirstCharCap(str) {
//     let allwords = str.split(" ").map(function(word) {
//        return word.charAt(0).toUpperCase() + word.substring(1);
//     });
//     return allwords.join(" ");
// }

// console.log(strFirstCharCap(str));



// 10. Write a Javascript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string and undefined.
// function Types(elem) {
//     return typeof(elem);
// }

// let p;
// console.log(Types(p));
// console.log(Types("str"));
// console.log(Types(123));



// 11. Write a Javascript function to get the number of occurences of each letter in specified string.  

// function occ(str){
//     var occurances = {};
//     str.split("").forEach(function(elem){
//         if(occurances.hasOwnProperty(elem) === false) {
//             occurances[elem] = 1;
//         }
//         else {
//             occurances[elem]++;
//         }
//     });
//     return occurances;
// }
// console.log(occ("apple is top fruit"));