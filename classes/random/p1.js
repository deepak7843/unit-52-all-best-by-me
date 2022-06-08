

// let o={
//     d: 4,
//     e:6
// }

// let a= "key3" , h="key4" , r= "key5" 
// let b=100                , s=200

// // o[a]=b
// // console.log(o);




// console.log("*********************");


// o={
//     ...o,
//     [h]:23
// }

// console.log(o);

// o.key5=s
// console.log( "o2" ,o);
// o[a]=b
// console.log( "o3" ,o);

// //////////////console.log("*************************************************************************************************************************************");

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // expected output: Array [30,40,50]

// //////////////console.log("*************************************************************************************************************************************");

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
let {d,e} = {a: 10, b: 20, c: 30, d: 40}
console.log("d---", d);
console.log("e---", e);

// a; // 10
// b; // 20
// rest; // { c: 30, d: 40 }
console.log(a);
console.log(b);
console.log("rest--", rest);
