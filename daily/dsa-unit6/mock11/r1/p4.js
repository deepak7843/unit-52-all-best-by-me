function runProgram(input) {
  input = input.trim().split("\n");
  var t = +input[0].trim();

  var line = 1;

  for (var i = 0; i < t; i++) {
    var n = +input[line++].trim();
    var ar1 = input[line++].trim().split(" ").map(Number);
    var ar2 = input[line++].trim().split(" ").map(Number);
    check(n, ar1, ar2);
  }
}

function check(n, ar1, ar2) {
  var push_ar = [];
  var pop_ar = [];
  var mypop_ar = [...ar2];
  mypop_ar.reverse();

  for (var i = 0; i < n; i++) {
    while (push_ar[push_ar.length - 1] === mypop_ar[mypop_ar.length - 1]) {
      pop_ar.push(mypop_ar.pop());
      push_ar.pop();
    }
    push_ar.push(ar1[i]);
  }
  push_ar.reverse();
  push_ar.forEach((el) => {
    pop_ar.push(el);
  });
  var flag = true;
  for (var i = 0; i < n; i++) {
    if (ar2[i] !== pop_ar[i]) {
      flag = false;
    }
  }
  flag ? console.log(1) : console.log(0);
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
