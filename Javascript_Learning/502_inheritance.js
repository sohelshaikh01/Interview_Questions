// Class and Inheritance

// 1. Class Defining

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Inheriting
class Teacher extends User {
    constructor(username, email, password) {
        super(username); // parent constructor
        // super order not matter
        // overwritting parent constructor
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// 2. Objects Creation - Class Instances

const chai = new Teacher("chai", "chai@teacher.com", "1234");
chai.addCourse();
chai.logMe();

const masalaTea = new User("masalaTea");
// masalaTea.addCourse(); // No access

masalaTea.logMe();

// Different Instance
// console.log(chai === masalaTea); // false
// console.log(chai === Teacher); // false

// Check is object made of class
console.log(chai instanceof User); // true
console.log(chai instanceof Teacher); // true