// const getting = require("./second");
// // It import all things from this file as geting.

// console.log("Hello world", getting);

// comman js modules
// const simple = require("./modules1");
// simple();

// Es6 js modules
// import {simple} from "./modules2.mjs";
// import simple12 from "./modules2.mjs"; // For default
// simple12();

import * as a1 from "./modules2.mjs";
console.log(a1.simple());

