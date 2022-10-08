function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim().split(" ").map(Number);
    console.log(check(n, ar));
  }
}
function check(n, a) {
  //   console.log(n,a)

  for (let i = 0; i < n; i++) {
    let m = i * 2;
    let k = a[i];
    if (m + 1 < n && k < a[m + 1]) {
      return 0;
    }
    if (m + 2 < n && k < a[m + 2]) {
      return 0;
    }
  }
  return 1;
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
