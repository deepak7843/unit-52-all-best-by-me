function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim();
    check(n, ar);
  }
}
function check(n, ar) {
  //   console.log(n,a)
  let ob = {},
    cnt = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] in ob) ob[ar[i]]++;
    else ob[ar[i]] = 1;

    if (ob[ar[i]] == 1) cnt += 2;
    else cnt++;
  }
  
  console.log(cnt);
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
