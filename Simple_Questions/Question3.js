// // 3. Loops & Conditions Questions

// 1. Write a for loop to print numbers from 1 to 50.
// for(let i=1; i<51; i++) console.log(i);

// 2. Use a while loop to sum the numbers from 1 to 10.
// let i = 1, sum = 0;
// while(i<11) {
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

// let i = 1;
// while(i < 10) {
//     // This will be infinite and hang the browser
//     // so make auto save off or change tab
// }

// 3. Create a for...of loop to log each character of the string "Javascript".
// let word = "Javascript";
// for(let char of word) {
//     console.log(char); 
// }

// 4. Write a for loop that skips even numbers between 1 and 20.

// for(let i = 1; i<20; i++) {
//     if(i%2 !== 0) console.log(i);
// }



// 5. Use do...while loop to print numbers from 5 to 1.
// let ac = 5;
// do {
//     console.log(ac);
//     ac--;
// } while(ac>0);


// 6. Create a for loop that calculates the factorial of 5.
// let fact = 1;
// for(let i = 1; i<=5; i++) {
//     fact = fact * i;
// }
// console.log(fact);


// 7. Write a nested loop to print a 3x3 grid of numbers.
// let hold = 1;
// for(let i = 1; i<4; i++) {
//     var str = "";
//     for(var j = 1; j < 4; j++) {
//         str += `${hold} `;
//         hold++;
//     }
//     console.log(str);
// }


// 8. User a for loop to reverse an array.
// let arr = [1, 2, 3, 4, 5];
// for(let i=arr.length - 1; i>=0; i--){
//     console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = temp;
// }
// console.log(arr);  


// 9. Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let num = 1;
// while(num < 101) {
//     if(num%5 === 0) console.log(num);
//     num++;
// }


// 10. Use a for...in loop to iterate over an object and log its keys.

// let obj = {
//     name: "a",
//     email: "super@gmail.com",
//     age: 26
// }

// for( let keys in obj) {
//     console.log(keys);
// }