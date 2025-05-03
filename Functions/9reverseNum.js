// Function to reverse a number.
// Difficult to understand Question.

function num(num) {
    let reverse = 0;
    while (num != 0) {
        reverse = reverse * 10;
        reverse = reverse + (num % 10);
        num = Math.trunc(num / 10);
    }
    return reverse;
}

console.log(num(124));
console.log(num(547));
