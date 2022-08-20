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


function check(n,ar,ta){
    for(let i=0; i<n;i++){
        if(ar[i]==ta){
             console.log(i)
             return
        }
       //  else{
            
       //  }
    }
    ar.push(+ta)
   
    ar.sort((a,b)=> a-b)
    
   //   console.log(ar)
    for(let i=0; i<n+1;i++){
        if(ar[i]==ta){
             console.log(i)
             return
        }
       //  else{
            
       //  }
    }
}