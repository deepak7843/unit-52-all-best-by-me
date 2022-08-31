// let obj={

//     1:35,
//     4:67,
//     a:54,
//     b:"boy",
// };

// console.log(obj);

// let d="k3", p=100 , e="k4", f="k5";
// obj={...obj, d:p , e:56, [f]:23 }

// console.log(obj);

/////////*****************************************************************************************************************************************************************************************************************

// function sumOfDigit(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// // Function to sort the array according to
// // the sum of the digits of elements
// function sortArr(arr, n) {
//   // Vector to store digit sum with respective element
//   let vp = [];

//   // Inserting digit sum with element in the vector pair
//   for (let i = 0; i < n; i++) {
//     vp.push([sumOfDigit(arr[i]), arr[i]]);
//   }

//   // Quick sort the vector, this will sort the pair
//   // according to sum of the digits of elements
//   vp.sort();

//   console.log(vp);
//   // Print the sorted vector content
//   let st=""
//   for (let i = 0; i < vp.length; i++) {
// st+= vp[i][1]+" "
//     //   console.log(vp[i][1]);
//   }
// //   document.write(vp[i][1], " ");

// console.log(st);
// }

// // let arr = [ 14, 1101, 10, 35, 0 ];
// let arr= [1 ,2, 10 ,4 ,11]
// let n = arr.length;
// // sortArr(arr, n);
// check(arr, n);

// function check(arr, n){
//     //  console.log(n,ar)

//       let a = [];

//   for (let i = 0; i < n; i++) {
//     a.push([sum(arr[i]), arr[i]]);
//   }
// console.log("a--", a)

// //   a.sort();
//   a.sort((a,b)=> a-b);
//   console.log("a--", a)

// //   console.log(a);
//   let st = "";
//   for (let i = 0; i < a.length; i++) {
//     st += a[i][1] + " ";
//   }

//   console.log(st);
// }

// function sum(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

/////////*****************************************************************************************************************************************************************************************************************

// function searchInsertInPosition(n, arr, k) {
//   for (var i = 0; i < n; i++) {
//     if (n === 0) {
//       console.log(n);
//     }
//     if (arr[i] === k) {
//       console.log(i);
//     } else if (i === 0 && arr[i] > k) {
//       console.log(i);
//     } else if (arr[i - 1] < k && arr[i] >= k) {
//       console.log(i);
//     } else if (i === n - 1 && k > arr[i]) {
//       console.log(i + 1);
//     }
//   }
// }

/////////*****************************************************************************************************************************************************************************************************************

// let s1= "cnt"
// let s2= "poy"

// if(s1>s2){
//   console.log("yes");
// } else{
//   console.log("no");
// }
/////////*****************************************************************************************************************************************************************************************************************

// let a= [4,2,5,1,3] , n=5
// bs(a,n)
// function bs(a,n){
//   for(let i=0;i<n-1;i++){
//     for(let j=0; j<n-1-i; j++){
//       if(a[j]>a[j+1]){
//         swap(a,j,j+1)
//       }
//     }
//   }
//   console.log(a);
// }

// function swap(a, x,y ){
//   let temp= a[x]
//   a[x]=a[y]
//   a[y]=temp
// }

/////////*****************************************************************************************************************************************************************************************************************

// let a= [4,2,4,1,2,7] , n=6

// let ob={}

// for(let i=0; i<n; i++){
//   for(a[i] in ob){
//     ob[a[i]]++

//   }
// }
// console.log(ob);

// let i=1231
// var ob={}
// let s= i.toString()
// let s= "abca"
// let s=[1,2,6]
// let s=["a", "p" ]
// console.log(s)
// console.log(typeof(s))
// for(let j=0; j<s.length;j++ ){
//    if(s[i] in ob) {
//        ob[s[i]]++
//    }
//    else {
//        ob[s[i]]=1
//    }
// }
// console.log(ob)

// let s= [ "m", "s", "m" ]
// let s= "msm"

// let i=121472
// var s= i.toString()
// let ob={}
// for(let i=0;i<s.length;i++){
//   console.log(s[i]);
//    if(s[i] in ob) {
//        ob[s[i]]++
//    }
//    else {
//        ob[s[i]]=1
//    }
// }
// console.log(ob);

// let n=121
// var s= n.toString()
//  console.log(s)
//  console.log(typeof(s))

// let ob={}

// for(let j=0; j<s.length;j++ ){
//     if(s[i] in ob) {
//         ob[s[i]]++
//     }
//     else {
//         ob[s[i]]=1
//     }
// }
//  console.log(ob)

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// function check(n, s) {
//   console.log(n, s);
//   let s1 = "",
//     s2 = "";
//   if (n % 2 == 0) {
//     for (let i = 0; i < Math.ceil(n / 2); i++) {
//       s1 += s[i];
//     }
//     for (let i = Math.ceil(n / 2); i < n; i++) {
//       s2 += s[i];
//       // s2.sort()
//     }
//   } else {
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//       s1 += s[i];
//       // s1.sort()
//     }
//     for (let i = Math.floor(n / 2) + 1; i < n; i++) {
//       s2 += s[i];
//       // s2.sort()
//     }
//   }

//   s1 = s1.trim().split("").sort();
//   s2 = s2.trim().split("").sort();

//   console.log(s1, "  ", s2);
// }

// check(7, "acbbcab");

// console.log((3**2));

////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

// arr.sort((a,b)=>a-b);

// let pr = -Infinity;

// let preS = 0;

// for(let i = 0; i < n; i++){

//    let s = (arr[i] * (n-i)) - (preS);

//    if( s > pr){
//      pr = s;
//    }

//    preS += arr[i]

// }

// console.log(pr);

// function isIthappy(N) {
//   var s = 0;
//   while (N > 0) {
//     var x = N % 10;
//     N = Math.floor(N / 10);

//     s = s + x * x;
//   }

//   if (s == 1) {
//     console.log("true");
//     return;
//   } else if (s > 1 && s <= 4) {
//     console.log("false");
//     return;
//   }
//   return isIthappy(s);
// }

/////////*****************************************************************************************************************************************************************************************************************

// let a= [
//   80, 70, 75, 72,
//   74, 76, 70, 74
// ] , n=a.length

// console.log(a.indexOf(74));

// var dsd = Array(4).fill(-1);
// console.log(dsd);

// // const tempGirls = Array(5).fill(7, 0);
// const tempGirls = Array(3).fill(7);
// console.log(tempGirls);

// const arr = new Array(3);
// console.log(arr);

/////////************************************************
/////////************************************************

// JavaScript program for the above approach

// Function to determine how many days
// required to wait for the next
// warmer temperature
function dailyTemperatures(T) {
  var n = T.length;

  // To store the answer
  var daysOfWait = Array(n).fill(-1);

  var s = [];

  // Traverse all the temperatures
  for (var i = 0; i < n; i++) {
    // Check if current index is the
    // next warmer temperature of
    // any previous indexes
    console.log(s[s.length - 1]);
    while (s.length != 0 && T[s[s.length - 1]] < T[i]) {

      daysOfWait[s[s.length - 1]] = i - s[s.length - 1];

      // Pop the element
      s.pop();
    }

    // Push the current index
    s.push(i);
  }

  // Print waiting days
  // for (var i = 0; i < n; i++) {
  //   document.write(daysOfWait[i] + " ");
  // }

  console.log(daysOfWait);
}

// Driver Code
// Given temperatures
var arr = [73, 74, 75, 71, 69, 72, 76, 73];
// Function Call
dailyTemperatures(arr);
