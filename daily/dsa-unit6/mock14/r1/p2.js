//Enter code here
function runProgram(input) {
  input = input.trim().split("\n");
  var test = +input[0];
  var line = 1;
  for (var i = 0; i < test; i++) {
    var matrix = [];

    for (var j = 0; j < 8; j++) {
      var ar = input[line++].trim().split("");
      matrix.push(ar);
    }
    check(matrix);
  }
}

function check(matrix) {
  for (var i = 1; i < 7; i++) {
    for (var j = 1; j < 7; j++) {
      if (matrix[i][j] === "#") {
        if (
          matrix[i - 1][j - 1] === "#" &&
          matrix[i - 1][j + 1] &&
          matrix[i + 1][j - 1] === "#" &&
          matrix[i + 1][j + 1] === "#"
        ) {
          console.log(i + 1, j + 1);
        }
      }
    }
  }
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
