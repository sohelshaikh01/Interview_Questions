// Using Event Delegation

// Variables

const txt = document.querySelector('#txt-input');
const operations = document.querySelector('#operations');

const convertText = (event) => {
    let fontSize = 16;

    switch(event.target.id) {
        case 'h1':
            fontSize = 32;
            break;
        case 'h2':
            fontSize = 24;
            break;
        case 'h3':
            fontSize = 18.72;
            break;
        default:
            return;
    }
    txt.style.fontSize = `${fontSize}px`;
}

operations.addEventListener('click', convertText);
