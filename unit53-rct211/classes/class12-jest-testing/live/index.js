// //It should perform this sum "+" operation
// function sum(...args) {
    // if (args.length === 0) {
    //   return "sum invoked without arguments";
    // } else if (args.length === 1) {
    //   return "sum functions needs atleast 2 arguments";
    // }
      // a = Number(a);
      // b = Number(b);
//     //   let result = Number((a + b).toFixed(1));
//     // return result;
  
    // const sumValue = [...args].reduce((a, c) => a + Number(c), 0);
    // return Number(sumValue.toFixed(1));
//   }
  
//   module.exports = sum;



////////////  *****************    32-56 *************************************************************************************************************************************************************************************************


// function sum(a,b) {
// //   return a+b
// // //   return a-b


// if (arguments.length === 0) {
//   return "sum invoked without arguments";
// } else if (arguments.length === 1) {
//   return "sum functions needs atleast 2 arguments";
// }

// a = Number(a);
// b = Number(b);

// let result= Number((a+b).toFixed(1));
// return result

// }

// module.exports = sum;



////////////  *****************    58-31 *************************************************************************************************************************************************************************************************


function sum(...args) {
// console.log(args);
  
  
  if (args.length === 0) {
    return "sum invoked without arguments";
  } else if (args.length === 1) {
    return "sum functions needs atleast 2 arguments";
  }
  
  // a = Number(a);
  // b = Number(b);
  
  // let result= Number((a+b).toFixed(1));
  // return result

  //// c---> current element of array
  const sumValue = [...args].reduce((a, c) => a + Number(c) , 0);
  return Number(sumValue.toFixed(1));
  
  }
  
  module.exports = sum;