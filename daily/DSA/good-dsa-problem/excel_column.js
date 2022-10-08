// const sentence = "The quick brown fox jumps over the lazy dog.";

// const index = 4;

// // console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// ///// expected output: "The character code 113 is equal to q"

// console.log(sentence.charAt(index));

// console.log(sentence.charCodeAt(index));

// console.log(sentence.charCodeAt(index));

// console.log("cat"[2]);

// console.log("A".charCodeAt(0));
// console.log("a".charCodeAt(0));

// console.log(Math.floor(26 / 26));
// console.log(
//   "**********************************************************************************************"
// );

/////////*****************************************************************************************************************************************************************************************************************

// let arr = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = i + 1;
// }

// console.log("obj--", obj);
// let rem=3
//   let columnName = [];

// for (let x in obj) {
//   if (obj[x] == rem) {
//     console.log(x);
//     columnName.push(x);
//     console.log("columnName--", columnName);

//     // break
//   }
//   // break

// }

// function printString(columnNumber) {
// function printString(n) {
//   console.log(n);

  
//   let result = "";

//   while (n) {
//     let char = String.fromCharCode(65 + ((n - 1) % 26));
//     // console.log("char--", char);
//     result = char + result;
//     // result+=char;
//     // n = Math.floor((n - 1) / 26);
//     n = Math.floor((n ) / 26);
//   }

//   console.log(result);

//   //   *******************************************************************

//   // console.log("obj--", obj);
//   // console.log("columnNumber--", columnNumber);
//   // // To store result (Excel column name)
//   // let columnName = [];

//   // while (columnNumber > 0) {
//   //   // Find remainder
//   //   let rem = columnNumber % 26;
//   //   console.log("rem--------------------", rem);

//   //   // If remainder is 0, then a
//   //   // 'Z' must be there in output
//   //   if (rem == 0) {
//   //     columnName.push("Z");
//   //     columnNumber = Math.floor(columnNumber / 26) - 1;
//   //     console.log("columnNumber--", columnNumber);
//   //   } // If remainder is non-zero

//   //   else {

//   //     // console.log("obj--", obj);
//   //     // console.log("rem--------------------", rem);

//   //     // for (let x in obj) {
//   //     //   if (obj[x] == rem) {
//   //     //     console.log(x);
//   //     //     columnName.push(x);
//   //     //     console.log("columnName--", columnName);

//   //     //     break
//   //     //   }
//   //     //   // break

//   //     // }

//   //     // columnName.push(String.fromCharCode("A".charCodeAt(0) + (rem - 1)));

//   //     columnName.push(String.fromCharCode(65 + (rem - 1)));
//   //     console.log("columnName--", columnName);

//   //     columnNumber = Math.floor(columnNumber / 26);
//   //     console.log("columnNumber--", columnNumber);
//   //   }

//   // console.log(
//   //   "**********************************************************************************************"
//   // );
// }
// console.log("columnName--", columnName);
// console.log("columnName--", columnName.reverse().join(""));
// console.log(
//   "**********************************************************************************************"
// );

// printString(29); /////
// printString(1434); /////

// printString(26);  /////
// printString(51);  /////
// printString(52);  /////
// printString(80);  /////
// printString(676);  /////
// printString(702);  /////
// printString(705); /////

// Input          Output
//  26             Z
//  51             AY
//  52             AZ
//  80             CB
//  676            YZ
//  702            ZZ
//  705            AAC

console.log(
  "******************* next ******************  *********************************************************"
);

function titleToNumber(s) {
  let n = s.length -1
  let result = 0;
  for (let i = 0; i < s.length; i++)
  {
    let d=s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      result += (d*Math.pow(26,n-i))
  }
  // return result;
  console.log(result);
}

function titleToNumber(s) {
  let n = s.length 
  let result = 0;
  for (let i = n-1; i >= 0; i--)
  {
    let d= s[i].charCodeAt(0) - 65 + 1;
      result += (d*Math.pow(26,n-i-1))
  }
  // return result;
  console.log(result);
}

// titleToNumber("AAC")
// titleToNumber("ZZ")
// titleToNumber("YZ")
// titleToNumber("CB")
// titleToNumber("AZ")


// console.log(
//   "******************* next ******************  *********************************************************"
// );