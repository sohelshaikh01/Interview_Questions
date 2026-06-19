// Palindrome Number - LC9

// Test Cases:
// True = 121, False = 10, False = 0

const isPalindrome = function(x) {
    return x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(10);
console.log("10 is:", result);
