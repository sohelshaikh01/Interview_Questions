// High Order Functions - Array Loops

// 1. Iterating Array using for-of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    console.log(val);
}

// 2. Iterating String Chars using for-of

const spell = "Creative Works";

for (const char of spell) {
    console.log(`Each char is ${char}`);
}

// 3. Maps in Javascript
// Holds the key value pairs with unique queues

const map = new Map();

map.set('IN', "India");
map.set("USA", "United States of Americ");
map.set("Fr", "France");
map.set("Fr", "Friend"); // overwrite earlier

console.log(map);

// Iterations Map using for of
for(const [key, value] of map) {
    console.log(key, "=>", value);
}

// Map is not iterable using for-in
// As for-in return indexes/key

// 4. Object are not iteratable using for-in

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman",
    // game2: "Spiderman"
}

// Not work for objects
for(const [key, value] of myObject) {
    console.log(key, "=>", value);
}

