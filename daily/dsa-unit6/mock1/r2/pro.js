function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var N = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    product(N, arr);
  }
}

function product(N, arr) {
  var l = [],
    r = [],
    s = 1;
  l[0] = 1;
  for (let i = 1; i < n; i++) {
    s *= arr[i - 1];
    l[i] = s;
  }
  s = 1;
  r[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    s *= arr[i + 1];
    r[i] = s;
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = l[i] * r[i];
  }
  console.log(res.join(" "));
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
