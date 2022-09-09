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
  //  console.log(n,ar)
  a.sort((a, b) => a - b);

  var o = 0;
  var l = n - 1;
  while (l >= 0) {
    if (l < 1) {
      o += a[0];
      break;
    }
    o += a[l] + a[l - 1];

    l = l - 3;
  }
  return o;
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
