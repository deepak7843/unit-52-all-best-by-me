// function person (n,a){
//     this.name=n
//     this.age= a
// }
// // person.prototype.city="pune"

// person.prototype.city= function(c){
//     this.city=c
// } 
// var person1=new person("raj" , 23)

// person1.city("gkp")
// console.log("person1:" , person1);


// ***************************************************

// const fish={  
//     name: "nemo",
//     talk: true
// }
// const monkey=Object.create(fish)
// monkey.name='pablo'
// const humans=Object.create(monkey)
// // humans.name='pablo'
// console.log("humans:", humans);

// console.log(humans.name);

// console.log(humans.hasOwnProperty('name'));


// **********************************************************************

// var b = {
// parent: "jethalal",
// };

// var a = Object.create(b);

// a.name = "tappu";

// console.log(a);

// let cat = {
// type: "cat",
// legs: 4,
// tail: true,
// fur: true,
// };

// let tiger = Object.create(cat);

// tiger.speed = 60;

// let cheeth = Object.create(cat);

// cheeth.speed = 100;
// console.log("cheeth:", cheeth);

// console.log("tiger:", tiger);

// //bad way
// let s1 = {
// brand: "nike",
// seller: "amazon",
// material: "leather",
// type: "sneakers",
// price: 2000,
// };

// let s2 = {
// brand: "nike",
// seller: "amazon",
// material: "leather",
// type: "sneakers",
// price: 4000,
// };

//best thing
// let shoes = {
// brand: "nike",
// seller: "Amazon",
// material: "leather",
// type: "sneakers",
// };

// let s1 = Object.create(shoes);

// s1.price = 2000;

// let s2 = Object.create(shoes);

// s2.price = 4000;

// s2.brand = "Adidas";

// console.log(s2.brand);

// //console.log(s2.hasOwnProperty("seller"));

console.log("*******below****************************************");


// //Original Object
// function Newspaper(h) {
// this.date = new Date();
// this.id = Math.round(Math.random() * 100);
// this.heading = h;
// this.publication = "Amar ujala";
// }

// Newspaper.prototype.ad= function() {
//     console.log("flipkart big billion sale");
// }

// let n1 = new Newspaper("tarun marrying katrina");

// //add a prototype to my CF

// Newspaper.prototype.advertisement = "Tanishq Jewellery at RS 1";

// console.log("n1:", n1);

// n1.ad()

console.log("********above*****************************************************");

console.log("*******below****************************************");
let a1= new Array(1,2,3) //this Array is CF
 //CF always returns an object
console.log("a1:", a1);

console.log("*********above****************************************************");


// function Shoes() {
// this.brand = "nike";
// this.seller = "flipkart";
// this.type = "sports";
// }

// Shoes.prototype.coupon = 30;

// let s1 = new Shoes();
// console.log("s1:", s1);

// let arr = [1, 2, 3]; //this is how you create it

// arr.push();

// let arr2 = new Array(1, 2, 3); //this is how Js does it internally
// console.log("arr2:", arr2);

// function MyArray() {
// this.length = arguments.length;

// Object.defineProperty(this, "length", {
// writable: true,
// enumerable: false,
// });

// for (let i = 0; i < this.length; i++) {
// this[i] = arguments[i]; //this[0] = 1
// }
// }

// MyArray.prototype.पुश = function (el) {
// //masai_arr[3] = el

// this[this.length] = el;
// this.length++;
// };

// MyArray.prototype.हटाओ = function () {
// let index = this.length - 1;

// delete this[index];

// this.length--;
// };

// let masai_arr = new MyArray(1, 2, 3);

// masai_arr.पुश(4);
// masai_arr.पुश(5);

// masai_arr.हटाओ();
// masai_arr.हटाओ();

// console.log("masai_arr:", Object.values(masai_arr));

// //How do you create your own Push function and make it availiable on all array