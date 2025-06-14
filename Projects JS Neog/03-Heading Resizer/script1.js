
// Variables

let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let h3 = document.querySelector('#h3');

const txt = document.querySelector('#txt-input');

const convertToH1 = () => {
    txt.style.display = 'block';
    txt.style.fontSize = '2em';
    txt.style.fontWeight = 'bold';
    txt.style.marginTop = '0.67em';
    txt.style.marginBottom = '0.67em';
}

const convertToH2 = () => {
    txt.style.fontSize =  '24px';
}

const convertToH3 = () => {
    txt.style.fontSize = '18.72px';
}


h1.addEventListener('click', convertToH1);
h2.addEventListener('click', convertToH2);
h3.addEventListener('click', convertToH3);