import navbar from "./components/navbar.js";
console.log("navbar:", navbar);

let navbar_div=document.getElementById('navbar-container')

navbar_div.innerHTML= navbar();


let url= "https://fakestoreapi.com/products/category/jewelery"
let res=await getData(url)
// console.log("res:", res);



// res.then((data)=>)

let parent=document.getElementById("data")
appendData(res, parent)