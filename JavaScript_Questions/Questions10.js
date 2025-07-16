// Call, Bind And Apply in Javascript (Explicit Binding)

// Question 1 - What is Call ? -----------

// var obj = { name: "aman" }

// function sayHello(age) {
//     return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello());
// console.log(sayHello.call(obj, 24));

// Question 2 - What is Apply ? -----------

// var obj = { name: "aman" }

// function sayHello(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// console.log(sayHello.apply(obj, [24, "Software Engineer"]));

// Question 2 - What is Bind ? -----------

// var obj = { name: "aman" }

// function sayHello(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// // It provides us another function which we can execute later
// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(25, "Superman"));
// console.log(bindFunc(21, "Batman"));
// // We can use this function for multiple times 

// Question 4 - What's the Output ?

// const person = { name: "Aman" };

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24)); // Provide another function

// Question 5 - Call with function inside object -----------

// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     }
// }

// var person2 = { age: 24 };

// person.getAge(); // 20 points to person object
// person.getAge.call(person2); // 24
// // points to given function

// console.log(person.getAge.bind(person2)()); // 24

// Question 6 - What's the Output -----------

// var status = "😎";

// setTimeout(() => {
//     const status = "😍";

//     const data = {
//         status: "👻",
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus()); // 👻
//     console.log(data.getStatus.call(this)); // 😎
//     // this never points to function
//     // It pointing to the context of function
//     // It is calling global variable
// }, 0);

// Question 7 - Call printAnimals such that it prints all animals in object

// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };

//     this.print();
// }

// // printAnimals.call(animals);

// for (let i = 0; i < animals.length; i++) { 
//     printAnimals.call(animals[i], i);
// }

// Question 8 - Append an array to another array. -------------

// const array = ["a", "b"];
// const elements = [0, 1, 2];

// array.push.apply(array, elements);

// console.log(array);

// Question 9 - Using apply to enhance Built-in functions. -------------

// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max(3, 5, 2, 5));
// max = -Infinity, min = +Infinity;

// for (let i=0; i < numbers.length; i++) {
//     if(numbers[i] > max) {
//         max = numbers[i];
//     }
//     if(numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// console.log(min, max);


// console.log(Math.max.apply(null, numbers)) 


// Question 10 - Bound function ---------------

// function f() {
//     console.log(this); // window object
// }

// let user = {
//     g: f.bind(null),
//     // return another function. 
// };

// user.g();


// Question 11 - Bind Chaining --------------

// function f() {
//     console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ahn"});
// // Bind chaining doesn't exists, function cannot be rebound

// f();


// Question 12 - Fix Last Line to make code working

// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");
//     if(password === "Superman") success();
//     else failed();
// }

// let user = {
//     name: "John Cena",

//     loginSuccessful() {
//         console.log(`${this.name} loggin in`);
//     },

//     loginFailed() {
//         console.log(`${this.name} failed to log in`);
//     },
// }

// checkPassword(user.loginSuccessful, user.loginFailed);
// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// Question 13 - Partial application for login function

// function checkPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if(password === "Superman") ok();
//     else fail();
// }

// let user = {
//     name: "John Cena",

//     login(result) {
//         console.log(this.name + (result ? " login successful" : " login failed"));
//     },
// }

// // checkPassword(?, ?);
// // checkPassword(user.login(true), user.login(false)); call function here 
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));


// Question 14 - Explicit Binding with Arrow Function

// const age = 10;

// let person = {
//     name: "Superman",
//     age: 20,
//     getAgeArrow: () => console.log(this.age), 
//     // only this point to window function
//     getAge: function () {
//         console.log(this.age)
//     }
// }

// var person2 = { age: 24 };
// person.getAge.call(person2); // content of pass object
// person.getAgeArrow.call(person2);
// we cannot change context of arrow function by any method


// Question 15 - Polyfill for Call Method

// function for 15, 16 & 17 Question.

// let car1 = {
//     color: "Red",
//     company: "Ferrari"
// }

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );  
// }

// purchaseCar.call(car1, "$", 1000000);


// Function.prototype.myCall = function (context = {}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error(this + "It's not Callable");
//     }

//     context.fn = this;
//     context.fn(...args);
// };

// purchaseCar.myCall(car1, "$", 10000000);


// Question 16 - Polyfill for Apply Method

// Function.prototype.myApply = function (context = {}, args = []) {
//     if(typeof this !== "function") {
//         throw new Error(this + "It's not Callable");
//     }
    
//     if(!Array.isArray(args)) {
//         throw new TypeError("CreateListFromArrayLike called on non-object");
//     }
    
//     context.fn = this;
//     context.fn(...args);
// };

// purchaseCar.myApply(car1, ["$", 10000000]);
        

// Question 17 - Polyfill for Bind Method

// Function.prototype.myBind = function(context = {}, ...args) {
//     if(typeof this !== "function") {
//         throw new ApiError(this + "cannot be bound as it's not callable.");
//     }

//     context.fn = this;
//     return function (...newArgs) {
//         return context.fn(...args, ...newArgs);
//     }
// }


// const newPurchaseCar = purchaseCar.myBind(car1, "$");

// console.log(newPurchaseCar(1000000));

