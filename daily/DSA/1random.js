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

let a= [4,2,5,1,3] , n=5
bs(a,n)
function bs(a,n){
  for(let i=0;i<n-1;i++){
    for(let j=0; j<n-1-i; j++){
      if(a[j]>a[j+1]){
        swap(a,j,j+1)
      }
    }
  }
  console.log(a);
}

function swap(a, x,y ){
  let temp= a[x]
  a[x]=a[y]
  a[y]=temp
}