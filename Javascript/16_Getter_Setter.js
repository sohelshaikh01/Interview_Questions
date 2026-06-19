// Getter, Setter in Class and Stack Overflow

// Gette setter are methods run on propertiers
// to set and get values in memory

// _ make property private but can be accessible in console.log
// # is used in modern js to make properties private

// this._email => makes email private
// Not accessible with console.log(user.email) or without getter fn

// [[Why set _email is not used]]
// => because of Call Stack OverFlow Error

class User {
    // constructor(email, password) {
    //     // this.email = email;
    //     // this.password = password;
    // } 

    // name must be same as properties
    // _ making it private
    set email(value) {
        this._email = value;
    }

    set password(pass) {
        this._password = pass;
    }

    // if using getter then necessary to use setter
    get email() {
        return `${this._email.toUpperCase()}`;
    }

    get password() {
        return `${this._password}77`;
    }
}

// getters and setter present already with by default code
// _ used to avoid race between getter & setter

const hitesh = new User("blake@oceans.in", "blake07");

// When get and set used, this done through them
hitesh._email = "blake@oceans.in";
hitesh._password = "Blake1234";

console.log(hitesh.email);
console.log(hitesh.password);