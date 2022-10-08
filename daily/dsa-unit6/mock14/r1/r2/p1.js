function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim();
    check(n, ar);
    console.log(check(n, ar));
  }
}
function check(n, a) {
  //  console.log(n,a)
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (arr.includes(a[i])) {
      arr.splice(arr.indexOf(a[i]), 1);
    } else {
      arr.push(a[i]);
    }
  }

  if ((n % 2 == 1 && arr.length == 1) || (n % 2 == 0 && arr.length == 0)) {
    return "Yes";
  } else {
    return "No";
  }
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
