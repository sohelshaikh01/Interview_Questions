// Filter Function in Array

// 1. Why Filter not ForEach ?
// ForEach doesn't return any values

// const coding = ["js", "ruby", "java", "python", "cpp"];

// if we want to store forEach in variables
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item; // undefined
// });

// console.log(values);

// 2. Filter Function

const myNums = [1, 2, 4, 5, 6, 7, 8, 9];

// return value that satisy conditions
// const newNums = myNums.filter((nums) => nums > 4);

// Doing with forEach
const newNums = [];

myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);

// 3. Filtering Books based on conditions

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 2000, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007},
    { title: "Book Four", genre: "Science", publish: 2009, edition: 2010 },
    { title: "Book Five", genre: "History", publish: 2004, edition: 1996 }
];

let userBook = books.filter((bk) => bk.genre === "History");

userBook = books.filter((bk) => { 
    return bk.publish >= 2000 && bk.genre === "History" 
});

console.log(userBook);
