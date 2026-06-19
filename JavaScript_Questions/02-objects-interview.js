
// // Objects in Javascript

// Objects in Javascript

// create object
// update property obj.name = ""
// delete property using 
// delete obj.name obj.["name"]
// read object - console.log
// properties read = obj['name'] 
// obj.name 
// if name is not string { "name": "superman" }
// must be { name: "superman" }

// delete only delete array properties

// dynamic values adding
// { [property]: value} {property: value}

// print object
// for(key in obj) { log(key) }
// for(key in obj) { log(obj[key])}

// Reassign further in array
// if value reassign to key in obj then it remains on position with new value

// Properties with number value, multiple them only with 2
// check is number and update in array

// if object passed as key
// a['[object object]'] = 1234 became key in string

// JSON.stringify() converts the object into string
// JSON.parse() converts the string into object

// [..."Lyria"] spread each char as element
// spreading obj in obj  obj2 = { role: "admin", ..obj1}

// const data = JSON.stringify(settings, ['level', 'health']);
// Stringify only properties mentioned in array.

// In arrow function this refer to window object
// { diameter: () => { return this.radius * 2} }

// taking properties of obj
// const { name, age } = obj;
// renameing destructed variable
// { name: fullName }

// Destructing on nested object
// obj = { names: { fname, lname }}
// const { names: { fname }} = obj;
// console.log(fname);

// rest cannot be in between (array example)
// fn(arr, fruit1, ...args) { return[...arr, ...args, fruits] }
// log(fn([], "apple", "pear"))

// providing reference affects other
// obj2 = obj1
// obj2.a = 1 // affect obj1.a


// This condition will always return 'false' since JavaScript compares objects by reference, not value.
// both are stored differently
// Only equal when they referecing particular area in memory
// console.log({a: 1} == { a: 1}); // false
// console.log({a: 1} === { a: 1}); // false


// let person = { name: "Lyria" };
// const members = [person];
// person = null; // null
// // It will affect, When changes property inside it
// // person.name = null
// console.log(members); // [{name:"Lyria"}]


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

// Shallow copy: ------------------------------------------
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


// Deep copy: ---------------------------------------------
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
