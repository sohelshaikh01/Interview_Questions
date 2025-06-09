
// // Objects in Javascript

// Question 1 - What's the Output ? -------------------

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// }

// console.log(obj);
// Same key will replace with new value
// Still present on earlier position

// Question 2 - Create a function multiplyByTwo(obj) that
// mulitiplies all numeric property values of nums by 2. -------------------

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My numbers"
// }

// multiplyNumeric(nums);

// function multiplyNumeric(obj) {
//     for(key in obj) {
//         if(typeof obj[key] === "number") {
//             obj[key] *= 2;
//         } 
//     }
// }

// console.log(nums);


// Question 3 - What's the Output of the following code ? -------------------

// const a = {};
// const b = { key: "b" }
// const c = { key: "c" }

// When try to convert object into string forcefully
// It become [object object]

// a[b] = 123;
// // It worked as a['[object object]'] = 123
// a[c] = 456;
// // then a['[object object]'] = 456
// // new value

// // console.log(a);
// console.log(a[b]);


// Question 4 - What't JSON.stringify and JSON.parse ? -------------------

// const user = {
//     name: "aman",
//     age: 21
// }
// const strObj = JSON.stringify(user);

// console.log(JSON.stringify(user)); // converts to string
// console.log(JSON.parse(strObj)); // converts back to object

// // Used for storing in localStorage.
// // Example
// localStorage.setItem("test", strObj);
// console.log(JSON.parse(localStorage.getItem("test", strObj)));
// // Used to send and fetch data in API.


// Question 5 -------------------
// console.log([..."Lyria"]); // Make array of all characters
// Spread operator used on arrays and objects 
// Not work on numbers


// Question 6 -------------------

// const user = { name: "Lyria", age: 21 };
// const admin = { admin: true, ...user };
// // Add user's all properties to admin

// console.log(admin); 


// Question 7 -------------------

// const settings = {
//     username: "Bruce",
//     level: 21,
//     health: 10,
// }

// const data = JSON.stringify(settings, ['level', 'health']);
// // Stringify only properties present in array.
// console.log(data);


// Question 8 -------------------
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//     // NaN This refers to window object
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());


// Question 9 - What is destructuring in the objects ? -----------
// Taking out the properties of an object

// let user = {
//     fname: "saver",
//     age: "24"
// }

// const name = "tony";

// const { fname: myName } = user;
// Rename destructed variable
// console.log(myName);

// Destructring on nested objects
// const user = {
//     names: {
//         fname: "power",
//         lname: "man"
//     }
// }

// const { names:{fname} } = user;
// console.log(fname);


// Question 10 -------------------

// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit];
// }
// // rest can not be in between
// console.log(getItems(["banana", "apple"], "pear", "orange"));


// Question 11 -------------------
// Object Referencing

// let c = { greeting: "Hey" };
// let d;

// d = c; // Providing reference affects the other variable
// // We are not coping the properties 
// c.greeting = "Hello";
// console.log(d.greeting);


// Question 12 -------------------
// This condition will always return 'false' since JavaScript compares objects by reference, not value.

// // Both have different space in memory
// // Only equal when they referecing particular area in memory
// console.log({a: 1} == { a: 1});
// console.log({a: 1} === { a: 1});
// // All are different objects.


// Question 13 -------------------

// let person = { name: "Lyria" };
// const members = [person];
// person = null;

// // It will affect, When changes property inside it
// // person.name = null

// console.log(members);


// Question 14 -------------------

// const value = { number: 10 };
// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2));
// };

// multiply(); // 20 Clone object through spread operator
// multiply(); // 20
// multiply(value); // 20 Refernce of original object is given.
// multiply(value); // 40


// Question 15 -------------------

// function changeAgeAndReference(person) {
//     person.age = 25; // It affects original
//     // Here person has reference

//     // Below we reassigning person variable of local
//     //  It also removes the reference
//     person = { 
//         name: "John",
//         age: 50,
//     }; // Reassigning will not affect the original 

//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// }

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);


// Question 16 - What's Shallow copy and Deep copy ?

// Shallow copy:
// Copying the object to another object and it has atleast reference to some properties of it
// When one object holds reference to another object
// Ex: 
//     const user = {
//         fname: "super",
//         lname: "man"
//     }

//     const user1 = user;
//     user1.fname = "spider";
//     console.log(user, user1);

// Deep copy:
// Completely clone object to another variable
// It has no reference to the object


// Question 17 - How to deep copy / clone an object ?

// let user = {
//     name: "Robinhood",
//     age: 21
// };

// It will not affect the original object.

// First Way:
// const objClone = Object.assign({}, user);
// // This will not clone nested objects
// objClone.name = "Daredevil";


// Second Way:
// const objClone = JSON.parse(JSON.stringify(user));
// objClone.name = "Punisher";


// // Third Way:
// const objClone = {...user};
// objClone.name = "Punisher";

// console.log(user, objClone);
