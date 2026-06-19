// Getter Setter Using Object

// Why ??
// get _email is not used
// why log(this._email) is not used

const User = {
    _email: "tea@code.in",
    _password: "code1234",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value
    }
}

// 1. Constructor function
// const tea = new User();

// 2. Factory function
// User based object creation

const tea = Object.create(User);
console.log(tea.email);
