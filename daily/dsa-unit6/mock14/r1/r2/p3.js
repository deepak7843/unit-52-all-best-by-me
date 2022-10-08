function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim().split(" ").map(Number);
    let n2 = +input[line++];
    let ar2 = input[line++].trim().split(" ").map(Number);
    console.log(check(n, ar, n2, ar2));
  }
}
function check(n, ar, n2, ar2) {
  //   console.log(n,ar,n2,ar2)

  for (let i = 0; i < n2; i++) {
    while (ar2[i]) {
      var a = ar.shift();
      ar.push(a);
      ar2[i]--;
    }
  }

 return ar[0]
}

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
