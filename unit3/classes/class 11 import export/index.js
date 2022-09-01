import navbar from "./components/navbar.js";
console.log("navbar:", navbar);

let navbar_div=document.getElementById('navbar-container')

navbar_div.innerHTML= navbar();