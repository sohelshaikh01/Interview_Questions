// Fibonacci series using function and loop.

function fibonacci(n) {
    var fibo = [0, 1];
    for(let i=2; i<=n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return ["last number is: " + fibo[n], fibo];
}

console.log(fibonacci(10));

// To find nth number of fibonacci series using only function.

let first = 0;
let second = 1;
let last = 0;
let series = [0, 1];

let length = 10;

for(let i=2; i<=length; i++) {
    last = first + second;
    first = second;
    second = last;

    series[i] = last;
}

console.log("The nth fibonacci number is:", last);
console.log("The series is:", series);

// Above program with function.

// let first = 0;
// let second = 1;
// let last = 0;
// let series = [0, 1];

// function naming(length) {
//     for(let i=2; i<=length; i++) {
//         last = first + second;
//         first = second;
//         second = last;

//         series[i] = last;
//     }
//     return [series, last];
// }

// console.log(naming(10));

// Fibonacci Element in recursive function.

console.log("It is for this function");
function fibRecursive(n) {
    if(n == 0){
        return 0;
    }
    else if(n == 1) {
        return 1;
    }
    else {
        return fibRecursive(n-1)+ fibRecursive(n-2);
    }
}

var result = fibRecursive(10);
console.log(result);

