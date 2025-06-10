// Finding factorial number.

const num = 7;
let fact = 1;

function factorial(num) {
    for(let i=1; i<= num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(num));

// Factorial using while loop.

// const num = 7;
// let fact = 1;
// let i = 1;

// while(i<= num) {
//     fact = fact * i;
//     i++;
// }

// console.log(fact);

// Factorial using recursive function.

function recursive(num) {
    if(num == 0) {
        return 1;
    }
    else {
        return num * recursive(num - 1);
    }
}

let result = recursive(7);
console.log(result);