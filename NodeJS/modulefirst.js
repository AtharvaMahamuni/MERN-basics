// const simple = require("./modulesecond");

// import {simple} from "./modulesecond.mjs";

// simple() // Simple is comples (from modulesecond)

// no matter what namve you gave to import it will get simple2 because it is default exported
// import simple22 from "./modulesecond.mjs";
// simple22();


// import {simple, simple2} from "./modulesecond.mjs";
import * as a2 from "./modulesecond.mjs";
console.log(a2);
a2.simple();
a2.simple2();