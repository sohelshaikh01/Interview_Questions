// Class constructor and static

// 1. Creating Class and Object
// After ES6 Provided Class is avialable in Javascript 

/*
class User {
    // constructor
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // method
    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// creating object
const teaMan = new User("teaman", "teaman01@gmail.com", "123");

console.log(teaMan.encryptPassword());
console.log(teaMan.changeUsername());
*/

// 2. Class Functionality with Function Prototype

// behind the scene it does this
// If class functionality is not available

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());