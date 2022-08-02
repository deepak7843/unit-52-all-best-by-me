// const count = (a)=>  a+2

// console.log(count);

/////////*****************************************************************************************************************************************************************************************************************

// function sum(a) {
    
//   return function inner(b) {
//     return a + b;
//   };
// }

// let innerFunction = sum(2);
// console.log("innerFunction--", innerFunction);

// let z= innerFunction(3)
// console.log(z);
// console.log(innerFunction(3));

////////***************************************************

const sum= a => b => a+b
console.log(sum)

console.log(sum(2)(3));