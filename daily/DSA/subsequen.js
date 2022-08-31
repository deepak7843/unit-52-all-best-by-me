



let ar = ["a", "b", "c"];
// let ar = "abc";
let n = 3,
  index = 0,
  nar = [];
// console.log(gs(nar,ar,i,n));

gsub(nar, ar, index, n);

////
////
////
//// in line 11 pop ki jagah, slice not working
// nar.slice(0,nar.length-1)
// nar=nar.slice(0,nar.length-1)
////
////

//////
//////
////// below atre by string don't use it
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
//////
let str = "7895",
  array = [7, 8, 9, 5];
console.log(str.slice(0, str.length - 1));
console.log(array.slice(0, array.length - 1));
