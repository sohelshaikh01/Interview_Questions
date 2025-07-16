// Loading Gayab

// Variables

const button = document.querySelector("#button");

function disappearLoading() {
    const txt = document.querySelector("#loading-div");
    txt.style.display = 'none';

    button.style.marginTop = '1.15rem';
}

button.addEventListener('click', disappearLoading); 

