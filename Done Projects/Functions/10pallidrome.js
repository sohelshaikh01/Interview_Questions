// Function to check if the string is pallidrome.

function checkPallidrome(str) {
  for(let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// using arrow function.

// const checkPallidrome = (str) => {
//   for(let i=0; i<str.length; i++) {
//     if(str[i] != str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }


console.log(checkPallidrome("Home"));
console.log(checkPallidrome("madam"));
console.log(checkPallidrome("cadac"));