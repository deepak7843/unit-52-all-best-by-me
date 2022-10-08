// const count = (a)=>  a+2

// console.log(count);

/////////*****************************************************************************************************************************************************************************************************************

function sum(a) {
// let b=4
// inner(4)
  return function inner(b) {
    console.log(a);
    return a + b;
  };
//   inner(4)
}

let innerFunction = sum(2);
console.log("innerFunction--", innerFunction);

let z= innerFunction(3)
console.log(z);
// console.log(sum(2)(5));
// console.log(innerFunction(3));

////////***************************************************

// const sum= a => b => a+b
// console.log(sum)

// console.log(sum(2)(3));

// const {log, warn , error} = console

// // // console.log(b);
// // console.log(log);

// // log(67)

// const obj = { a: 1, b: { c: 2 } };
// // const { a, b: { c: d } } = obj;
// // const { a, b: { c } } = obj;
// const { a,b } = obj;
// // Two variables are bound: `a` and `d`

// // log(a"\n" b)

// console.log("\n");
// console.log(  "\n");


// function check(n,ar,ta){
//     for(let i=0; i<n;i++){
//         if(ar[i]==ta){
//              console.log(i)
//              return
//         }
//        //  else{
            
//        //  }
//     }
//     ar.push(+ta)
   
//     ar.sort((a,b)=> a-b)
    
//    //   console.log(ar)
//     for(let i=0; i<n+1;i++){
//         if(ar[i]==ta){
//              console.log(i)
//              return
//         }
//        //  else{
            
//        //  }
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// undefined + “9” - - undefined
// undefined + 9   - - undefined


//  null + “9”  - -9
// Null + 9  - -9

// 0 + “9” - -09
// 0 + 9 - - 9



// console.log(undefined + “9” );

// console.log(undefined + 9 );

// // console.log( null + “9”  );
// console.log(null + 9);

// console.log(0+9);
// console.log(0+"9");

// console.log(Math.sqrt(-1));