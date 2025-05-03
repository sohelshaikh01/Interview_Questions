// Top 14 Techniques to manipulate the DOM

// // Adding Element to the page

const body = document.body;
// body.append("Hello World");
// body.appendChild("Hello World");
// similar but accepts only element


// // Creating and Adding Element

// const div = document.createElement("div"); // Only create here.
// div.innerText = "Hello World"; // Insert Text
// div.textContent = "Hello World 2"; // Similar as above

// body.append(div);

// // Difference in 'textContent' and 'innerText'

// const div = document.getElementById("text");
// console.log(div.textContent); // Exact all spaces & indentation
// console.log(div.innerText); // Just Text


// // Putting html in tags

// const div = document.createElement("div"); 
// // div.textContent = "<strong> Hello World <strong>";
// // Print Exactly

// // div.innerHTML = "<strong> Hello World <strong>";
// // OR secure way
// const em = document.createElement("em");
// em.innerText = "supernatural";
// body.append(em);

// body.append(div);


// // Remove Elements From DOM

const div = document.getElementById("text");
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

// spanBye.remove(); // Remove completely
// div.append(spanBye); // Add Again
// div.removeChild(spanBye); // Another Way


// // Modifying the elements properties

// Print Attribute values
// console.log(spanHi.getAttribute("id")); 
// console.log(spanHi.getAttribute("title"));

// Set Attribte
// console.log(spanHi.setAttribute("id", "newId"));
// console.log(spanHi.setAttribute("title", "newTitle"));

// Another Way to Set Attribute
// spanHi.id = "newId";

// Remove Attribute
// spanHi.removeAttribute("title");


// // Custom Dataset

// console.log(spanHi.dataset);
// data-super-name -> show in object as
// superName, data- is removed

// console.log(spanHi.dataset.superName);

// Set Dataset
// spanHi.dataset.newName = "supernova";


// // Classess Operations

spanHi.classList.add("el3"); // Add
spanHi.classList.remove("el1"); // Remove
spanHi.classList.toggle("el3"); // Exists ? Remove : Add.

spanHi.classList.toggle("el1", true); 
// Perfom based on boolean

// // Changing Style of Element

spanHi.style.backgroundColor = "red";
spanHi.style.color = "white";
spanHi.style.fontWeight = "bold";
spanHi.style.padding = "4px 9px";