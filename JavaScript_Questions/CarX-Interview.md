
### Javascript Questions

1. Hoisting
```js
function abc() {
    console.log(a);

    var a = 10;
}

abc();
```

2. Temporal Deadzone: It is a state where variables are in scope but not declared yet.
```js
function abc() {
    console.log(a, b, c);

    const c = 30;
    let b = 20;
    var a = 10; // Not this in temporal deadzone
}

abc();
```

3. Implicit and Explicit Binding
```js
var obj = {
    name: 'piyush',
    display: function() {
        console.log(this.name);
    },
};

var obj1 = {
    name: "ABC",
};

// obj.display();
obj.display.call(obj1); // providing new obj1 context

// If we use arrow function it points to the global or window object.
```

4. Implement Caching/Memoize Function
```js

function myMemoize(fn, context) {
    const res = {}
    return function(...args) {
        let argsCache = JSON.stringify(args);

        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);;
        }
        return res[argsCache];
    }
}

// Expensive Function
const clumsyProduct = (num1, num2) => {
    for(let i = 1; i < 20000000; i++) {}

    return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

// console.time('First Call');
// console.log(clumsyProduct(9467, 7449));
// console.timeEnd('First Call');

console.time('Second Call');
console.log(memoizedClumsyProduct(9467, 7449));
console.time('Second Call');
```

5. Output Based Question on Event Loop
```js
console.log("a");
setTimeout(() => console.log("set"), 0);
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");

// Set Timeout is part of browser API, Even time is 0 it will run at last. It goes to the task Queue.
// Promise will goes to Micro Task queue in priority Queue.
// The Micro Task Queue Execute first that Task Queue.

// Task Queue: 
// microTask Queue: 
// Event Loop: 
```

6. Infinite Currying - Implement function
```js
// Solution for 2 paramenters:
function add(a) {
    return function(b) {
        return function () {
            return a + b;
        }
    }
}

// Solution for Infinite parameters:
function add(a) {
    return function (b) {
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(5)(2)(4)(5)()); // Question
```

7. Implement this code
```js
// Solution
const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this; // so access other function
    },
    subtract(b) {
        this.total = this.total - b;
        return this;
    },
    multiply(c) {
        this.total = this.total * c;
        return this;
    },
    divide(d) {
        this.total = this.total / d;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10); // Question
console.log(result.total); 
```