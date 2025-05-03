// Flatten array of arrays(2D array) using JavaScript reduce.

function flattenArr(arr) {
    return arr.reduce((result, array) => result.concat(array));
}

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(flattenArr(array));

