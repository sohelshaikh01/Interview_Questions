// Object Literals

const user = {
    username: "orient",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details");
        // this means current context
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user["username"])
// user.getUserDetails();

// console.log(this); // global context {}
// In browser it have window context

// If want to create user2 need to create all structure together


// const promiseOne = new Promise();
const date = new Date();
// new is contructor function
// Allow to create multiple instance from object literal

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    // by default
    return this; // all values accessed
}

// const userOne = User("Project", 12, true);
// const userTwo = User("Supreme", 11, false); // override above


// 'new' create new instance (copy) for each object
const userOne = new User("Project", 12, true);
const userTwo = new User("Supreme", 11, false); // override above
console.log(userOne);


// Reference for Object Literal
console.log(userOne.constructor);
console.log(userOne instanceof User);
