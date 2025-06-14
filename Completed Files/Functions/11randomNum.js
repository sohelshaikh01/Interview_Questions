// Functiont to generate random number between given range.

function genNumber(start, end) {
    let randomNum = Math.floor(Math.random() * end) + start;
    // Below line added by me.
    if(randomNum>end){
        randomNum = randomNum - start;
    }
    return randomNum;
}

console.log(genNumber(1, 10));
console.log(genNumber(50, 97));

