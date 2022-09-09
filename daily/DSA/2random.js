// function runProgram(input) {
//   input = input.trim().split("\n");
//   console.log(input);
//   let t = +input[0];
//   let line = 1;
//   for (let i = 0; i < t; i++) {
//     let s = input[line++];
//     let ans = check(s);
//     console.log(ans);
//   }
// }
// function check(s) {
//   //  console.log(s)
//   var l = 0,
//     r = s.length - 1;

//   while (l < r) {
//     if (s[l] == s[r]) {
//       l++;
//       r--;
//     } else {
//       if (isPal(s, l + 1, r)) return "YES";

//       if (isPal(s, l, r - 1)) return "YES";
//       return "NO";
//     }
//   }

//   return "YES";
// }

// function isPal(s, l, r) {
//   while (l < r) {
//     if (s[l] !== s[r]) return false;
//     l++;
//     r--;
//   }
//   return "YES";
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });






function runProgram(input){

  input=input.trim().split("\n")

    let [n,m] = input[0].trim().split(" ").map(Number)
     let line=1
    let mat=[]
    for(let i=0;i<m;i++){
      let ar= input[line++].trim().split(" ").map(Number)
      mat.push(ar)
    }
   
    check(n,m,mat)
}
function check(n,m,mat){
    console.log(n,m,mat)
   
}


if (process.env.USER === "") {
 runProgram(``);
} else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
 process.stdin.on("end", function () {
   read = read.replace(/\n$/, "");
   read = read.replace(/\n$/, "");
   runProgram(read);
 });
 process.on("SIGINT", function () {
   read = read.replace(/\n$/, "");
   runProgram(read);
   process.exit(0);
 });
}