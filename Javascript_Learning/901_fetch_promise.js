/* Promises - Used in fetch */

// We used Async Await
// In Modern Programming we use Promises

// 1. What is Promise ?
// Promise is an object representing the eventual completion or failure of an asynchronous operations.

// Use of promises
// fetch("https://dummyjson.com/recipes")
// .then()
// .catch()
// .finally()

// 2. How to create promises
const promiseOne = new Promise(function(resolve, reject) {
    // To do async works
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000);
    // connecting resule and then
});
// Holding inn variable

// then is direct connect with resolve
promiseOne.then(function(value) {
    console.log("Promise consumed");
});

// 3. Handling Promise using Then

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    } , 1000);
}).then(function() {
    console.log("Async 2 resolved")
});

// 4. Passing values from promise to then through resolve

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            username: "Chai",
            email: "example@gmail.com"
        })
    }, 1000);
})

promiseThree.then(function(userDetails) {
    console.log("User is:", userDetails);
})

// 5. Handling Reject using Catch

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({
                username: "superman",
                password: "krypto123"
            })
        } else {
            reject('ERROR Something went wrong')
        }
    }, 1000)
})

// Not return in variable
// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })

// 6. Promise Chaining using Then, Catch & Finally

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log("username:", username)
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolve or reject");
});

// 7. Handling Promises using Try and Catch
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({ username: "Javascript", password: "js1234"});
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000);
});

// Handling throw async await
// We don't handle catch gracefully

async function consumePromise() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromise();

// 8. Using promises to fetch data
// https://jsonplaceholder.typecode.com/users

// 8.1 Fetching data using Async Await
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // converting response to json also takes time
    const data = await response.json();
    console.log(data);
}

getAllUsers();

// 8.2 Fetching Data using API Calls using Then, Catch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));