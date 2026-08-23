// Generator Functions

// What is Iterator Pattern ?
// Generator Function ?
// YEILD keyword ?

// Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops

// For-each know how to traverse of array
// Array have its built in iterator

// 1. Custom Iterator Function

// default parameters pass
function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if(iterationCount < end) {
                result = { value: nextStart, done: false }
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true }
        }
    }
}

const myIterator = makeIterator(10, 20, 2);
let result = myIterator.next();

while(!result.done) {
    console.log(result.value);
    result = myIterator.next();
}

// 2. Generator Function
// Which make for-of loop to use custom function

function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}
// * used after fn keyword to make generator fn
// Yeild keyword only usable in Generator function

const even = count();

// Iteratable in for-of
// for (const v of even) {
//     console.log(v);
// }

// 3. Creating custom Iterator for Generator fn
function* makeMyIteratorNew(start, end, stepSize = 1) {
    for(let i = start; i <= end; i+=stepSize) {
        yield i;
    }
}

let one = makeMyIteratorNew(1, 20, 2);

// for(const val of one) {
//     console.log(val);
// }

// Make work on button
// btn = document.getElementById("next-btn");

// btn.addEventListener("click", () => {
//     btn.innerText = one.next().value;
//     one = one.next();
// })
