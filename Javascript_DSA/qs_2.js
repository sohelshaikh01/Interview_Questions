// Fibonacci Number - LC509

// 0, 1, 1, 2, 3, 5

// const fib = function(n) {
//     let arr = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i-1] + arr[i-2]);
//     }

//     return arr[n];

// }

const fib = function(n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

let x = 4;
const num = fib(x);
console.log(x, "fibonacci no. is", num);