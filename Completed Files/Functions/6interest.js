// Function to calculate simple interest on principal amount.

function interest(principal, amount, year) {
    let finalMn = (principal * amount * year) / 100
    return finalMn;
}

console.log(interest(1200, 1.05, 2));
console.log(interest(500, 1.05, 7));