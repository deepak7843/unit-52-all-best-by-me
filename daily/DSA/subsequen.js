let ar = ["a", "b", "c", "d"];
// let ar = "abc";
let n = ar.length,
  index = 0,
  nar = [];
// console.log(gsub(nar,ar,i,n));

gsub(nar, ar, index, n);

function gsub(nar, ar, index, n) {
  if (nar.length > 0) {
    console.log(nar);
  }

  // if(index===n) return   //// perhaps without is line ke bhi kam ho jaega...
 

  for (let i = index; i < n; i++) {
    nar.push(ar[i]);
    gsub(nar, ar, i + 1, n);
    nar.pop();
  }
}

////
////
////
//// in line 21 pop ki jagah, slice not working
// nar.slice(0,nar.length-1)
// nar=nar.slice(0,nar.length-1)
////
////

//////
//////
//////
//////
////// below atre by string don't use it
//////
//////
//////
//////
//////

// function gs(nst, st, n1, ind) {
//   if (nst.length !== 0) {
//     console.log(nst);
//   }
//   if (ind == n1) {
//     return;
//   }
//   for (let i = ind; i < n1; i++) {
//     nst += st[i];
//     gs(nst, st, n1, i + 1);
//     nst = nst.slice(0, nst.length - 1);
//   }
// }
// let st = "abc",
//   n1 = 3;
// let nst = "",
//   ind = 0;
// gs(nst, st, n1, ind);

//////
//////
//////
// //////
// let str = "7895",
//   array = [7, 8, 9, 5];
// console.log(str.slice(0, str.length - 1));
// console.log(array.slice(0, array.length - 1));
