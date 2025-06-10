
// Variables

const numberOne = document.querySelector("#number-one");
const numberTwo = document.querySelector("#number-two");

const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

const output = document.querySelector("#output");

// Calculator Logic

const add = () => {
    const result = Number(numberOne.value) + Number(numberTwo.value);
    output.innerText = `Result: ${result}`;
}

const subtract = () => {
    const result = Number(numberOne.value) - Number(numberTwo.value);
    output.innerText = `Result: ${result}`;
}

const multiply = () => {
    const result = Number(numberOne.value) * Number(numberTwo.value);
    output.innerText = `Result: ${result}`;
}

const divide = () => {
    const result = Number(numberOne.value) / Number(numberTwo.value);
    output.innerText = `Result: ${Math.round(result)}`;
}

addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract);
multiplication.addEventListener('click', multiply);
division.addEventListener('click', divide);

