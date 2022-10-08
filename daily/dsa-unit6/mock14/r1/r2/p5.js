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
function check(n, ar) {
  //  console.log(n,a)
  let mx = ar[0],
    mx2 = ar[0];

  for (let i = 1; i < n; i++) {
    mx = Math.max(ar[i], mx + ar[i]);

    if (mx > mx2) {
      mx2 = mx;
    }
  }
  return mx2;
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
