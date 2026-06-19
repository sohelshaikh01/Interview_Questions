// Array for-each and Inbuilt Loops

// 1. Iterating each property of array using for-each
// For-each Already Know passed array properties (length, start, etc)

const fruits = ['mango', 'avacado', 'pomegranate', 'coconut'];

// Takes Callbacks Functions
// fruits.forEach(function (fruit){
//     console.log(fruit);
// });

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

function printMe(item) {
    console.log(item);
}

// Give reference - no calling needed
fruits.forEach(printMe);

// 2. MORE PARAMETERS in for-each => value, index, whole array

fruits.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// 3. Iteration on Array of Object in for-each
const myCoding = [
    {
        langName: "javascript",
        extension: "js"
    },
    {
        langName: "java",
        extension: "java"
    },
    {
        langName: "C++",
        extension: "cpp"
    }
];

console.log("\n")

// On each object destructuring it properties
myCoding.forEach(({langName, extension}) => {
    console.log(`${langName} have ${extension} as extension`)
});
