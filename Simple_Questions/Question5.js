 
// // 5. Functions Questions

// 1. Write a function to check if a number is even or odd.
// function evod(value) {
//     if(value %2 === 0) return "even";
//     else return "odd";
// }
// console.log(evod(21));

// 2. Create a function to calculate the area of a circle with a given radius.
// function area(r) {
//     return Math.floor(Math.PI * r * r);
// }
// console.log(area(5));

// 3. Write a function that accepts an array and returns the sum of its elements.
// function sumofarr(arr){
//     let sum = 0;
//     arr.forEach(function(v) {
//         sum += v;
//     })
//     return sum;
// }
// let arr = [1, 2, 4, 7];
// console.log(sumofarr(arr));


// 4. Create a function that checks if a string starts with a specific character.

// function checker(str, char){
//     return str.toLowerCase().startsWith(char);
// }
// let str = "supernova";
// console.log(checker(str, "s"));


// 5. Write a function to find maximum of two numbers.
// function max(a, b) {
//     if(a > b) return a;
//     else if(b > a) return b;
//     else return "equals";
// }
// console.log(max(2, 45));


// 6. Create a function that takes a number and returns its factorial.
// function fact(num) {
//     let sum = 1;
//     for(let i=1; i<=num; i++) {
//         sum *= i;
//     }
//     return sum;
// }
// console.log(fact(6));


// 7. Write a function that accepts a string to returns its reverse.
// function abcd(value) {
//     return value.split("").reverse().join("");
// }

// console.log(abcd("AmazE"));


// 8. Create a function which returns the largest number in an array.
// function large(arr){
//     let max = 0;
//     for(let i=1; i<arr.length; i++) {
//         if(arr[i] > arr[max]){
//             max = i;
//         }
//     }
//     return arr[max];
// }
// console.log(large([24, 1, 52, 17]));



// 9. Write a function that converts a string into kebab-case (e.g., "hello world" -> "hello-world")
// function kebab(str) {
//     return str.toLowerCase().split(" ").join("-");
//     return str.replaceAll(" ", "-");
// }
// console.log(kebab("Hey There Everyone"));

// 10. Create a function that return "Hello World!" every time it is called.
// function print(){
//     console.log("Hello World!");
// }
// print();
// print();