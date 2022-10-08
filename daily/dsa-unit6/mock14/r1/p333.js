function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let ar = input[line++].trim();
    let n = ar.length;
    console.log(check(n, ar));
  }
}

function check(n, ar) {
  let o = {};
  let o2 = {};
  if (n % 2 != 1) {

    for (let i = Math.ceil(n / 2); i < n; i++) {
        if (o[ar[i]] === undefined) {
          o[ar[i]] = 1;
        } else {
          o[ar[i]]--;
        }
      }
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (o[ar[i]] === undefined) {
        o[ar[i]] = 1;
      } else {
        o[ar[i]]++;
      }
    }

  } else {
    for (let i = 0; i < n / 2 - 1; i++) {
      if (o[ar[i]] === undefined) {
        o[ar[i]] = 1;
      } else {
        o[ar[i]]++;
      }
    }

    for (let i = Math.floor(n / 2 + 1); i < n; i++) {
      if (o[ar[i]] === undefined) {
        console.log(i);
        o[ar[i]] = 1;
      } else {
        o[ar[i]]--;
      }
    }
  }
  for (k in o) {
    if (o[k] !== 0) {
      return "No";
    }
  }
  return "Yes";
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
