function greet() {
    let n = "raj"
    return function () {
        return function () {

            console.log(n);
        }
    }
}

let x = greet()
let y = x()
y()

// *******************************
console.log("******************************");

function greet12() {
    // let n = "raj4"
    return function () {
        let n = "raj4"
        console.log(n);
    }
}
let x12 = greet12()
console.log("x12:", x12);

console.log("**********************////////");

function greet1() {
    // let n = "raj4"
    let n1=90
    return function () {
        let n = "raj4"
        console.log(n);
        console.log(n1);
    }
}
let x1 = greet1()
x1()

console.log("******************************");

function greet101() {
let n = "raj44"
return function () {
    // console.log(n);
}
}
// greet11()
console.log(greet101);

console.log("******************************");

function greet11() {
let n = "raj444"
// return function () {
    console.log(n);
}
greet11()