// DOM MANIPULATION ----------------------

// 1. Element Selection

// const title = document.querySelector('#main-heading');

// title.style.color = "red";
// const listItems = document.querySelectorAll('.list-items');
// for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }
// console.log(title);

// 2. Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// 3. Adding Elements 

// ul.append(li);

// li.innerText = "X-men";
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector("h1");
// console.log(title.getAttribute('id'));

// 4. Modifying Attributes & Classes

// li.classList.add('list-items');
// li.classList.toggle('list-items');
// console.log(li.classList.contains('list-items'));

// 5. Modifying the text

// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);


// TRAVERSE THE DOM -----------------------

// 6. Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// 7. Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.color = "red";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// 8. Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
