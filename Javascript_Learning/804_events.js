// Events, EventListeners and Event Propagation.

// Things important for interviews:

// time, width, view, axis, name, values.
// type, timestamp, preventDefault,
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screen Y.
// altkey, ctrlkey, shiftkey, keyCode (Keyboard Speed)

// 1. Events and Best Practices

// document.getElementById("photo2").onclick = function() {
//     alert("Photo 2 is clicked");
// }

// Better practice: use eventListener for more features.
// Like propogation.

// More functions used earliers.
// attachEvent() old browsers
// jQuery() - 'on' is used

// 2. Event Listeners

// There is 3rd parameters, which is false by default.
// some application not run without true or false.
// document.getElementById("photo1").addEventListener("click", function(e) {
//     // alert("Photo 1 is clicked");
//     console.log(e);
// });


// 3. Event propogation and preventing it.

// listening to ul - images
document.getElementById("images").addEventListener("click", function(e) {
    console.log("Click inside the ul");
}, false);


// listening to li - skylines
document.getElementById("skylines").addEventListener("click", function(e) {
    console.log("Click on skylines");
    e.stopPropagation(); // Works in bubbling
}, false);

// Bubbling mode (false): like bubble it starts from down to goes upwards.
// Capturing mode (true): goes from top to bottom


document.getElementById("google").addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("Google is clicked");
}, false);
// if parent has true, stop propagation not work


document.querySelector("#images").addEventListener("click", function(e) {
    e.stopPropagation();
    // console.log(e.target);
    // console.log(e.target.parentNode);

    if(e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode;
        // removeIt.remove();
        removeIt.parentNode.removeChild(removeIt);
        // if directly used removeChild then just <image> removed inside <li>
    }
    
});

