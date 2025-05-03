// Objects in Javascript

// const user = {
//     name: "superman",
//     age: 21,
//     isTotallyTrue: true
// }

// Modify
// user.name = "supernova";

// delete property
// delete user.age;

// Access
// console.log(user);


// Question on delete ------------

// const func = (function(a) {
//     delete a;
//     return a;   
// }(5));

// console.log(func);
// delete only delete properties from object
// Not from local variable

// Operations on space in property name -----------
// const user = {
//     name: "supernova",
//     "like this": "superman"
// }

// delete user['like this']
// console.log(user['like this'])


// Dynamic values add into object ----------

// const property = "firstName";
// const value = "powerfull";

// const user = {
//     [property]: value,
// }

// console.log(user);

// Printing all values of object -----------

// for(key in user) {
//     console.log(key);
// }

// for(key in user) {
//     console.log(user[key]);
// }
