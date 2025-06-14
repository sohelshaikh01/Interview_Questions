// Function to count the Vowels in the string.

function countVowel(str) {
    let count = 0;
    str = str.toLowerCase();

    for(let i=0;i<str.length;i++) {
        if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u") {
            count++;
        }
    }
    return count;
}

console.log(countVowel("Hello"));
console.log(countVowel("Umbrella"));