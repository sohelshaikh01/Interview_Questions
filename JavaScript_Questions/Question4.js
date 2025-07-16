// // 4. Arrays Methods Questions

// 1. Create an array of your top 5 favorite movies and log it.
// let movies = ['Avg', 'Ult', 'Inf', 'End', "War"];
// movies.forEach(movie => console.log(movie));

// 2. Find and log the second element of an array.
// let arr = [1, 2, 3, 4];
// console.log(arr[1]);

// 3. Add two new elements to the start of an array using unshift().
// let arr = ['a', 'b', 'c', 'd'];
// arr.unshift(3);
// arr.unshift(0);
// console.log(arr);

// 4. Remove the last element of an array and log the updated array.
// arr.pop();
// console.log(arr);

// 5. Use .slice() to extract the first three elements of an array.
// console.log(arr.slice(0, 2));

// 6. Find the index of a specific element of an array using .indexOf();
// console.log(arr.indexOf(3));

// 7. Check if a value exists in an array using .includes().
// console.log(arr.includes('b'));

// 8. Combine two arrays [1, 2] and [3, 4] using .concat().
// let narr = [1, 2];
// console.log(arr.concat(narr));

// 9. Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let narr = [12, 23, 4, 10, 39];
// for(let j = 0; j < narr.length - 1; j++) {
//     for(let i = 0; i < narr.length - j - 1; i++) {
//         if(narr[i] > narr[i + 1]) {
//             let temp = narr[i];
//             narr[i] = narr[i + 1];
//             narr[i + 1] = temp;
//         }
//     }
// }
// console.log(narr);
// Bubble Sort

// 10. Write a program that creates a copy of an array without mutating the original.
// let narr2 = [...narr]; 
// let narr2 = [];
// narr.forEach(value => narr2.push(value));
// console.log("New array", narr2);

// let narr2 = narr; 
// Operation on New array also change original array
