// // Loops & Array Questions.

// 1. Loop an array and add all members of it.
// let arr = [7, 2, 4, 9];
// let sum = 0;
// arr.forEach(function(elem) {
//     sum += elem;
// })
// console.log(sum);


// 2. In an array of numbers and strings, only add those members which are not strings.
// let arr = [1, 'a', 24, 'for', 'c', 11];

// let sum = 0;
// arr.forEach(function (elem){
//     if(typeof(elem) === "number") {
//         sum += elem;
//     }
// });
// console.log(sum);
  

// 3. Loop an array of objects and remove all objects which don't have gender's value male.
// let arr = [
//     {name: "harsh", gender: "male"},
//     {name: "abcd", gender: "female"},
//     {name: "clark",  gender: "male"},
//     {name: "natasha", gender: "female"}
// ];
// let narr = arr.filter(function(elem) {
//     return elem.gender === "male";
// });
// console.log(narr);
// arr = narr;
// In forEach if we delete elem, then next elem get on that place
// code skip the elem in array.

// let count = 0;
// arr.forEach(function(elem){
//     if(elem.gender !== "male") count++;
// })
// console.log(count++);

// for(let i=1; i<count; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[j].gender !== "male"){
//             arr.splice(j, 1);
//         }
//     }
// }
// console.log(arr);


// 4. Write a Javascript function to clone an array. 
// function cloneArr(arr){
//     return [...arr];
// }
// console.log(cloneArr([1, 2, 3, 4]));

// function cloneArr(arr) {
//     var newarr = [];
//     arr.forEach(function(elem) {
//         newarr.push(elem);
//     })
//     return newarr;
// }

// console.log(cloneArr([1, 3, 4, 5]));
// let newarr = cloneArr([1, 2, 3, 4]);
// newarr.pop();
// console.log(newarr);

// function cloneArr(arr) {
//     return arr.map(function(elem){
//         return elem;
//     })
// }

// let newarr = (cloneArr([1, 2, 3, 4]));
// console.log(newarr);
// console.log(typeof newarr);

   
// 5. Write a Javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' element of the array.
 
// function retrieve(arr, n = 1) {
//     if(n <= arr.length) {
//         for(let i=0; i<n; i++) {
//             console.log(arr[i]);
//         }
//     }
//     else {
//         console.log("Not this much elements");
//     }
// }
// retrieve([1, 4, 5, 6, 7, 9], 5);


// 6. Write a Javascript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// function retrieve(arr, n = 1) {
//     if(n <= arr.length) {
//         for(let i=0; i<n; i++) {
//             console.log(arr[arr.length - 1 - i]);
//         }
//     }
//     else {
//         console.log("Not this much elements");
//     }
// }
// retrieve([1, 4, 5, 6, 7, 9], 2);


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

// freq([1, 2, 1, 3, 2, 4, 4, 1, 2, 1]);


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
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100];

// Set cannot hold duplicates.
// function union(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))];
// }

// console.log(union([1, 2, 3, 4], [2, 4, 5, 7]));