// Color Changer

// Variable

let txt = document.querySelector('#txt-input');

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

// Color Changer Logic

function convertToRed() {
    txt.style.color = "red";
}

function convertToGreen() {
    txt.style.color = "green";
}

function convertToBlue() {
    txt.style.color = 'blue';
}

red.addEventListener('click', convertToRed);
green.addEventListener('click', convertToGreen);
blue.addEventListener('click', convertToBlue);