// console.log(9);

import {sum, mult} from "./calc";

import "./index.css"

// import logo from "./logo.jpg"

console.log(sum(1800,35));

console.log(mult(2,30));



const root = document.getElementById("root")

const h1= document.createElement("h1")

h1.innerText= "hello world"
// h1.classList.add("redtext")

h1.setAttribute("class", "redtext")

// root.append(h1)
root.appendChild(h1) //****both work same */

// style-loader
//css-loader

// think of loader like a middleware , like a plugin








// // import {sum} from "./calc" 

// const sum = require("./calc")   // require is a nodejs specific syntax 

// console.log(sum(1,3));