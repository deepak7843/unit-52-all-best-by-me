// console.log(9);

import {sum, mult} from "./calc";

import React from "react"
import ReactDOM from "react-dom"


import "./index.css"

// import logo from "./logo"

// import logo from "./logo.jpg"

console.log(sum(1800,35));

console.log(mult(2,30));



const root = document.getElementById("root")
const h1 = React.createElement("h1", {}, "Hello React")

const div= React.createElement("div", {className: "border" }, "hello div" )

const img= React.createElement("img", {


    width:"400px" ,
    height: "400px",

    src: "https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png"} )


const toShow = true

const p = React.createElement("p", {"className": "redtext flex", id: "uniqID "},
 h1,
 "text",
 div,
//  img

toShow ? img : null    // it is ternary operator
)


ReactDOM.render(
    //  "hello react", //what do you want to render

    p,

//  root  // where
   
     //or
document.getElementById("root")     
)


// const h   1= document.createElement("h1")

// h1.innerText= "hello world"
// // h1.classList.add("redtext")

// h1.setAttribute("class", "redtext")



// root.append(h1)
// root.appendChild(h1) //****both work same */


// style-loader
//css-loader

// think of loader like a middleware , like a plugin


// const image= document.createElement("img")
// image.src= logo









// // import {sum} from "./calc" 

// const sum = require("./calc")   // require is a nodejs specific syntax 

// console.log(sum(1,3));