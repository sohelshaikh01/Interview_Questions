// Reverse the string.

function reverseNow(string) {
    return string.split(' ').reverse().join(' ');
}

let str = "That Knows NoOne";
const now = reverseNow(str);
console.log("This is reverse string:", now);
