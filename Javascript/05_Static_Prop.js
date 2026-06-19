// Class Static Properties

// 1. Class Defining

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    // Giving Id for each user
    static createId() {
        return `123`
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

// 2. Objects Creation

const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
// iphone.createId(); // static no access

// 3. Static methods:

// Stop class instances / objects from using properties / methods
// Used only in class

const project = new User("project");
// console.log(project.createId());