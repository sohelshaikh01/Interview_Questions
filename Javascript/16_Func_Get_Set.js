// Getter, Setter using function

// 1. Define Property
// function is function and object itself
// _ means saving properties as private and accessed by getter fn

function User(email, password) {
	// this._email = email;
	// this._password = password;

	// Object because fn is also obj
	Object.defineProperty(this, "email", {
		get: function() {
			return this._email.toUpperCase();
		},
		set: function(value) {
			this._email = value;
		}
	});

	// context need to pass => default points to global
	Object.defineProperty(this, "password", {
		get: function() {
			return this._password.toUpperCase();
		},
		set: function(value) {
			this._password = value;
		}
	});
}

const chai = new User("tea@code.com", "Code1234");

// Accessing Properties
chai.password = "Code1234";
console.log(chai.password);