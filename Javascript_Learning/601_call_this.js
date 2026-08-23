/* Call and this in Javascript */

// 1. Visual of Task Queue Execution

/*
    callme() Context

    Function Context
    Function Context
    Global Execution Context
 */

// for callme() where to refer this
// outside is just a function
// So it refer to global execution context
// node = {}

// window object access then refer to it

// function() { callme() }

// 2. Example of call Method:

function SetUsername(username) {
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {

    // It is just giving refernce not calling (with .call)
    // SetUsername.call(username); 
    // // calling here mean it context is not coming in this function

    // this in SetUsername is destroyed when executes
    // so pass the parent function this to get value
    SetUsername.call(this.username);

    this.email = email;
    this.password = password;
}

/*
    [
        [setUsername] when completes function and context remove
            ||
        variable also destroy
        [callme]
    ]
*/

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
