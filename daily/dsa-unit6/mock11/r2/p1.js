function runProgram(input) {
  input = input.trim().split("\n");

  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let mat = [];
  for (let i = 0; i < n; i++) {
    let ar = input[line++].trim().split(" ").map(Number);
    mat.push(ar);
  }

  check(n, m, mat);
}
function check(n, m, mat) {
//   console.log(n, m, mat);

  let cnt = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (mat[r][c] === 0) {
        continue;
      }

      cnt++;
      check2(r, c);
    }
  }
  return cnt;

  function check2(r, c) {
    if (mat[r][c] === 0) {
      return;
    }
    if (r < 0 || c < 0 || r === n || c === m) {
      return;
    }

    mat[r][c] = 0;
    check2(r - 1, c);
    check2(r + 1, c);
    check2(r, c - 1);
    check2(r, c + 1);
  }
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
