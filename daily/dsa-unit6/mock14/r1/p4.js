function runProgram(input) {
  input = input.trim().split("\n");
  var t = +input[0];
  var l = 1;
  for (var i = 0; i < t; i++) {
    var [n, m] = input[l++].trim().split(" ").map(Number);
    var array = [];
    for (var i = 0; i < n; i++) {
      var ar = input[l++].trim().split(" ").map(Number);
      array.push(ar);
    }

    find(n, m, array);
  }
}
function find(n, m, array) {
  var carray = 0,
    res = 1;
  for (var i = 0; i < n; i++) {
    var crow = 0;
    for (var j = 0; j < m; j++) {
      if (array[i][j] == 1) crow++;
    }
    if (crow > carray) {
      carray = crow;
      res = i + 1;
    }
  }
  console.log(res);
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
