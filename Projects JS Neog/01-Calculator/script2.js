// Using Event Delegation Method

// Variables

const numberOne = document.querySelector("#number-one");
const numberTwo = document.querySelector("#number-two");

const operations = document.querySelector("#operations");
const output = document.querySelector("#output");

// Calculator Logic

const calculate = (event) => {

    let result;

    switch (event.target.id) {
        case "addition":
            result = Number(numberOne.value) + Number(numberTwo.value);
            break;
        case "subtraction":
            result = Number(numberOne.value) - Number(numberTwo.value);
            break;
        case "multiplication":
            result = Number(numberOne.value) * Number(numberTwo.value);
            break;
        case "division":
            result = Number(numberOne.value) / Number(numberTwo.value);
            break;
        default:
            return;
    }
    output.innerText = `Result: ${Math.round(result)}`;
}

operations.addEventListener("click", calculate);

