// Test out importing { named1, named2 }
// import { a } from "./lib.js";
// import { x } from "./lib_commonjs.js";
// console.log(`Hello world: ${a}`);
// console.log(`Hello world: ${x}`);

// Test out importing * as
import * as ES6 from "./lib.js";
import * as CJS from "./lib_commonjs.js";
console.log(`Hello world: ${ES6.a}`);
console.log(`Hello world: ${CJS.x}`);
