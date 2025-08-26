# Javascript Interview Gemini

## 1-4. Personal & Experience Questions
These questions are about you. The key is to be prepared with concise, confident answers that highlight your skills and relevance to the job.

1. Introduce Yourself: Prepare a 60-90 second "elevator pitch." Start with your name, mention your years of experience as a JavaScript developer, and highlight 2-3 key technical skills you're passionate about (e.g., "I'm a JavaScript Developer with 5 years of experience, specializing in building performant user interfaces with React and optimizing application state with Redux."). End by stating your current goal (e.g., "...and I'm looking to apply my skills to build large-scale, user-centric applications.").

2. What are your Past Experiences? 
Use the STAR method (Situation, Task, Action, Result) to describe 1-2 relevant roles. For example: "At my previous role at [Company Name] (Situation), I was tasked with rebuilding our legacy customer dashboard to improve performance (Task). I led the effort to migrate it from jQuery to a modern React application, implementing virtualized lists and code-splitting (Action). As a result, we reduced the initial page load time by 60% and improved user satisfaction scores by 25% (Result)."

3. What are your best projects? 
Choose a project that you're proud of and can talk about in detail. Focus on the technical challenges you faced and how you solved them. Explain the architecture, the technologies used, and your specific contributions. Be ready to answer deep-dive questions about it.

4. What are the frameworks on which you have worked? List the frameworks and libraries you're proficient in (e.g., React, Angular, Vue, Node.js, Express). Be honest about your level of expertise. It's better to say "I have extensive experience with React and have worked on a few projects with Vue" than to claim expertise in everything.

## 5. Is JavaScript single-threaded or multi-threaded?
JavaScript is a single-threaded language.

This means it has only one call stack and can only execute one piece of code at a time. The execution is sequential. However, JavaScript achieves non-blocking, asynchronous behavior through its concurrency model, which involves the event loop.

## 6. How does JS handle async operations like promises and timers?
JavaScript handles asynchronous operations by using a model that includes the Call Stack, Web APIs (in the browser) or C++ APIs (in Node.js), a Callback Queue, and the Event Loop.

Here's the flow:

When an async function like setTimeout or a fetch call is executed, it's pushed onto the Call Stack.

The JavaScript engine immediately hands it off to the appropriate Web API and pops it from the Call Stack. The JS code continues to execute subsequent synchronous lines without waiting.

The Web API handles the operation in the background (e.g., it runs a timer or waits for a network response).

Once the operation is complete, its associated callback function is placed into the Callback Queue (or the Microtask Queue for promises).

The Event Loop constantly monitors the Call Stack. When the Call Stack is empty, the Event Loop takes the first callback from the queue and pushes it onto the Call Stack for execution.

## 7. How does JS know when a promise is settled and it's time to execute the callbacks?
For a setTimeout, the browser's internal timer API knows when the specified delay has passed and then places the callback in the queue.

For a Promise, it's based on an internal state machine. A Promise can be in one of three states:

pending: The initial state; the operation has not completed yet.

fulfilled: The operation completed successfully, and the promise now has a resulting value.

rejected: The operation failed, and the promise has a reason for the failure.

When an asynchronous operation tied to a promise completes (e.g., a network request gets a response), it calls either a resolve function (on success) or a reject function (on failure). This action changes the promise's state from pending to either fulfilled or rejected. This state change is the trigger that queues the corresponding .then() (for fulfillment) or .catch() (for rejection) callback to be executed by the event loop.

## 8. What is the event loop?
The event loop is a mechanism whose job is to monitor the Call Stack and the Callback Queue. Its primary rule is: If the Call Stack is empty, take the first event from the queue and push it onto the Call Stack.

It's the core piece of JavaScript's concurrency model that allows non-blocking operations. A crucial detail is that there are actually two main queues:

Microtask Queue: For promise callbacks (.then(), .catch(), .finally()). This queue has higher priority.

Macrotask Queue (or Callback Queue): For callbacks from setTimeout, setInterval, and I/O operations.

The event loop will always process all callbacks in the Microtask Queue before processing a single one from the Macrotask Queue. This is why a resolved promise's .then() will always execute before a setTimeout(..., 0) callback.

## 9. Promises vs. Observables
Feature	Promise	Observable
Value	Emits a single value (or a rejection) once.	Can emit multiple values over time.
Execution	Eager: Executes immediately upon creation.	Lazy: Executes only when a consumer subscribes to it.
Cancelable	Not cancelable by default.	Cancelable: You can unsubscribe to stop listening for values.
Operators	Limited operators (.then, .catch, .finally).	Rich set of operators (e.g., map, filter, reduce, retry).
Common Use	Handling single async operations like HTTP requests.	Handling continuous streams of data like user input, web sockets, or complex event sequences.


## 10. Difference between Promise.all and Promise.allSettled
Promise.all(promises): This is an "all-or-nothing" approach. It waits for all promises in the input array to be fulfilled.

If all fulfill, it fulfills with an array of their resulting values.

If even one promise rejects, Promise.all immediately rejects with the reason of that first rejected promise, ignoring all others.

Promise.allSettled(promises): This method waits for all promises to be settled (either fulfilled or rejected). It never rejects.

It always fulfills with an array of status objects. Each object describes the outcome of a promise:

{status: 'fulfilled', value: result}

{status: 'rejected', reason: error}

Use Promise.all when you need all operations to succeed. Use Promise.allSettled when you need to know the outcome of every single operation, regardless of whether some failed.

## 11. What are event emitters?
An event emitter is an implementation of the Observer design pattern. It's an object that maintains a list of listeners (callback functions) and notifies them by "emitting" events. This pattern allows for decoupled communication between different parts of an application.

In Node.js, the EventEmitter class is a core building block.

You create an instance of an emitter: const myEmitter = new EventEmitter();

You register a listener for a specific event: myEmitter.on('userLoggedIn', (user) => { console.log(${user.name} logged in.); });

Later, you can trigger that event: myEmitter.emit('userLoggedIn', { name: 'Alice' });

This is useful for creating modular systems where one component can signal that something has happened without knowing or caring what other components are listening for that signal. It's crucial to unsubscribe or remove listeners when they are no longer needed to prevent memory leaks.

## 12. What kind of optimization techniques are you familiar with?
I'm familiar with several optimization techniques across different areas of an application:

Algorithmic Optimization:

Memoization & Caching: Storing the results of expensive function calls and returning the cached result when the same inputs occur again. This is especially useful in recursive functions like calculating Fibonacci numbers.

Debouncing & Throttling: Limiting the rate at which a function gets called. Debouncing is for "execute only after a period of inactivity" (e.g., search bar suggestions). Throttling is for "execute at most once every X milliseconds" (e.g., scroll event handlers).

Asynchronous & Background Processing:

Web Workers: Running scripts in a background thread to perform CPU-intensive tasks without blocking the main UI thread, ensuring the application remains responsive.

Memory Management:

Avoiding Memory Leaks: Being diligent about removing event listeners that are no longer needed, clearing timers (setInterval), and avoiding unintentional global variables or closures that hold onto references.

Using WeakMap / WeakSet: For caching object metadata, as they don't prevent garbage collection if the object is no longer referenced elsewhere.

Code Structure:

Code Reusability: Creating pure, reusable functions to follow the DRY (Don't Repeat Yourself) principle, which leads to smaller, more maintainable bundles.

Code Splitting: Using dynamic import() to split code into smaller chunks that are loaded on demand, reducing the initial bundle size and improving load times.

## 13. What is the difference between call, apply, and bind?
All three methods are used to set the this context for a function.

call(thisArg, arg1, arg2, ...): Invokes the function immediately. It takes the this context as its first argument, followed by a comma-separated list of arguments for the function.

apply(thisArg, [arg1, arg2, ...]): Invokes the function immediately. It takes the this context as its first argument and an array of arguments as its second.

bind(thisArg): Does not invoke the function immediately. It returns a new function with the this context permanently bound to thisArg. You can then call this new function later.

## 14. What is the difference between const and Object.freeze()?
They operate at different levels.

const: Declares a variable that cannot be reassigned. It ensures that the variable identifier will always point to the same location in memory. However, if the variable is an object or array, the contents of that object/array are still mutable.

JavaScript

const user = { name: 'Bob' };
user.name = 'Charlie'; // This is allowed
// user = { name: 'Dave' }; // This would throw a TypeError
Object.freeze(): This is a method that makes an object's properties immutable. You cannot add, delete, or change the values of its direct properties. However, Object.freeze() is shallow; if a property is itself an object, that nested object is still mutable.

## 15. What is the difference between Map and WeakMap?
The primary difference lies in how they handle object keys and garbage collection.

Map:

Can use any data type (primitives or objects) as a key.

Maintains strong references to its keys. This means that if an object is used as a key in a Map, it will not be garbage collected as long as the Map itself exists, even if there are no other references to that object.

Is iterable; you can loop over its entries.

WeakMap:

Can only use objects as keys.

Maintains weak references to its keys. This is the key feature. If an object used as a key in a WeakMap has no other references in the code, the garbage collector is free to remove it, and its entry will automatically disappear from the WeakMap.

Is not iterable, primarily for garbage collection reasons.

Use WeakMap for caching or associating data with an object without preventing that object from being garbage-collected.

## 16. What is the difference between null and undefined?
undefined: This typically means a variable has been declared but has not yet been assigned a value. It's the default value for uninitialized variables, function arguments that were not provided, and properties that don't exist on an object.

null: This is an intentional assignment. It represents the deliberate absence of any object value. While undefined is often an accidental lack of value, null is explicitly set by a developer to indicate "no value."

## 17. What is hoisting?
Hoisting is a JavaScript mechanism where variable and function declarations are notionally moved to the top of their containing scope during the compilation phase, before the code is executed.

It's important to understand how different keywords behave:

var: Both the declaration and initialization (to undefined) are hoisted. You can access a var variable before its physical declaration without an error, but its value will be undefined.

let and const: The declarations are hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError. The time between the start of the scope and the let/const declaration is called the Temporal Dead Zone (TDZ).

Function Declarations: The entire function (name and body) is hoisted, so you can call a function before it is defined in the code.

Function Expressions: Only the variable declaration is hoisted, not the function assignment.

## 18. How does JSONP work, and why is it not considered "true" AJAX?
JSONP (JSON with Padding) is a historical technique to bypass the browser's Same-Origin Policy, which prevents a script on one domain from making requests to another domain.

It works by exploiting the fact that <script> tags are allowed to fetch and execute scripts from any domain.

The client-side code dynamically creates a <script> tag.

The src attribute of this tag points to the remote server's API endpoint, but it also includes a query parameter, typically callback=myFunction.

The server receives the request, wraps the JSON data inside a function call (myFunction(...)), and sends this back as the script's content.

When the script loads in the browser, it executes the function myFunction with the JSON data as its argument.

It's not "true" AJAX because it doesn't use the XMLHttpRequest or Fetch API. It's a hack that relies on script execution and has limitations, such as only supporting GET requests and requiring trust in the third-party server. CORS (Cross-Origin Resource Sharing) is the modern, standard way to handle cross-origin requests.

## 19. What tools do you use for better code consistency?
I use a combination of tools to ensure code quality and consistency across a project:

Linter (ESLint): To enforce coding rules and catch potential bugs early. For example, it can flag unused variables, enforce the use of === over ==, or ensure that promises are handled correctly.

Formatter (Prettier): To automatically enforce a consistent code style (e.g., indentation, line length, spacing). This eliminates debates about style and makes the codebase uniform and easier to read.

Git Hooks (Husky & lint-staged): To automate these checks. I configure a pre-commit hook that runs ESLint and Prettier on staged files. This ensures that no code that violates our standards can be committed to the repository.

## 20. What is a prototype in JavaScript?
The prototype is the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a hidden internal property (often accessible via __proto__) that is a reference to another object, called its "prototype."

When you try to access a property on an object, if the property is not found on the object itself, the JavaScript engine looks at the object's prototype. If it's not found there, it looks at that prototype's prototype, and so on, until it either finds the property or reaches the end of the chain (where the prototype is null). This entire lookup sequence is known as the prototype chain. This is the foundation of JavaScript's prototypal inheritance.

## 21. What is the difference between the Module Pattern and the Constructor/Prototype Pattern?
Constructor/Prototype Pattern: This is the traditional, "class-like" way of creating objects. You define a constructor function to initialize instance properties (this.name = name), and you add shared methods to the constructor's prototype property (MyClass.prototype.myMethod = ...). This is memory-efficient because all instances share the same method functions via the prototype chain.

JavaScript

function User(name) { this.name = name; }
User.prototype.sayHi = function() { console.log(this.name); };
const user1 = new User('Alice');
Module Pattern: This pattern uses closures to create private and public scope. It's not about creating multiple instances but about encapsulating a single piece of functionality. An IIFE (Immediately Invoked Function Expression) creates a private scope. Variables and functions defined within it are private. The IIFE returns an object containing only the functions we want to expose as a public API. This is excellent for encapsulation but less suited for creating many instances in the "classical" sense.

```JavaScript

const myModule = (function() {
  let privateVar = 'I am private';
  function privateMethod() { /*...*/ }
  return {
    publicMethod: function() { console.log('Accessing from public'); }
  };
})();
```

## 22. What is the difference between passing by value and passing by reference?
This refers to how data is passed to functions.

Pass by Value (Primitives): Primitive types (String, Number, Boolean, null, undefined, Symbol, BigInt) are passed by value. This means the function receives a copy of the original value. Any changes made to the parameter inside the function do not affect the original variable outside the function.

Pass by Reference (Objects): Objects (including Array, Function, etc.) are passed by reference (or more accurately, "pass by value of the reference"). This means the function receives a copy of the memory address where the object is stored. Because both the original variable and the function parameter point to the same object in memory, modifying the object's properties inside the function will affect the original object.

## 23. How do you deep freeze an object in JavaScript?
A standard Object.freeze() is shallow. To "deep freeze" an object, you must recursively freeze every property that is itself an object. You can write a recursive function to accomplish this.


```JavaScript
function deepFreeze(obj) {
  // Retrieve the property names defined on obj
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}
```

## 24. Why is the this keyword sometimes considered inconsistent in JavaScript?
The value of the this keyword is not determined by where a function is defined, but by how it is called (its "call-site"). This dynamic nature can be confusing. Here are the main rules:

Global Context: When called in the global scope, this refers to the global object (window in browsers) or undefined in strict mode.

Object Method: When a function is called as a method of an object (myObj.myMethod()), this refers to myObj.

Explicit Binding: When called with .call(), .apply(), or .bind(), this is explicitly set to the first argument passed to those methods.

Constructor: When a function is called with the new keyword, this is bound to the newly created instance.

Arrow Functions: Arrow functions are the exception. They do not have their own this binding. Instead, they inherit this lexically from their surrounding scope.

This set of different rules for different call contexts is why this can seem inconsistent.

## 25. What are the key differences between a keyword function and an arrow function?
Feature	function Keyword	=> Arrow Function
this Binding	Dynamic. Determined by how the function is called.	Lexical. Inherited from the parent scope.
arguments Object	Has its own arguments object containing all passed arguments.	Does not have its own arguments object.
Constructor	Can be used as a constructor with the new keyword.	Cannot be used with new. Throws a TypeError.
Implicit Return	Requires an explicit return statement.	Can have an implicit return if the body is a single expression without curly braces.
Hoisting	Function declarations are fully hoisted.	Not hoisted (behaves like let/const).

Export to Sheets

## 26. What are the cons of using arrow functions?
The main "con" is that their defining feature—lexical this—makes them unsuitable for certain situations:

Object Methods: If you define an object method using an arrow function, this will not refer to the object itself, but to the surrounding (e.g., global) scope, which is rarely what you want.

Event Handlers: In DOM event listeners, you often want this to refer to the element that triggered the event. An arrow function will prevent this, instead capturing the this from where the listener was defined.

Constructors: They cannot be used as constructors.

Essentially, you shouldn't use an arrow function when you need a dynamic this context.

## 27. How can you achieve the same functionality as async/await using generators?
async/await is essentially syntactic sugar over Promises, which can be implemented using generators and a "runner" function.

A generator function (function*) is a special function that can be paused and resumed using the yield keyword. It returns an iterator.

Here's the concept:

You create a generator function that yields promises.

You write a "runner" or "co-routine" function that takes the generator as input.

The runner calls .next() on the generator's iterator to start it.

When the generator yields a promise, the runner waits for that promise to resolve by attaching a .then() to it.

Inside the .then(), the runner calls .next() again, passing the promise's resolved value back into the generator, which then resumes execution until the next yield.

This manual process of calling .next(), waiting for the yielded promise, and feeding the result back into the next .next() call is exactly what the JavaScript engine does for you automatically with async/await.


## Full Stack Developer Interview

1. Introduce Yourself
2. Tell me about your experience
3. Tell me about your best projects
4. Tell me about languages and frameworks on which you have worked 

Answers on javascript, node.js, React.js, database, live coding challenges

5. What is your favorite programming language and Why ?
Javascript ...

6. what do understand about async operations in javascript ?
async await, settimeout, callbacks

7. How event loops priotrize
promise the settimeout

8. observebles vs promises
promise a way to handle the async code to stop or wait till code block executes
observebles you can subsciber and unsubscibers

9. React.js difference before hooks with class-based components and work with direct js now
Does it have any performance difference 
DOM rendering and useEffect is benefits in performance

10. What is virtual dom and for what it is ?

11. What are some global state management tools in react ?
react context API which is better than redux.
redux is better that the class components.

12. Redux thunk vs Redux Saga.

13. Next.js What is difference managing routes in React and Next.js
SPA related answer in React.js url doesn't change with code

14. Express.js, Next.js and Koa difference backend frameworks

15. What are streams in node.js ?
array, format, readable stream

16. How can take advantages of multiple cores as the javascript is single threaded ?
Use node instance, cluster, dockers and containers

17. What kind of database are you familier with ?

18. What the difference between sql and No sql ?
