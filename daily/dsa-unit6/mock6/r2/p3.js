function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let l = 1;

  for (let i = 0; i < tc; i++) {
    let mat = [];
    let n = +input[l++];

    for (let j = 0; j < n; j++) {
      let arr = input[l++].split(" ").map(Number);
      mat.push(arr);
    }
    let x = matrix(mat, n);
    console.log(x);
  }

  function matrix(mat, n) {
    let j = 0,
      i = n - 1;
    while (j < i) {
      if (mat[i][j] == 1) i--;
      else j++;
    }
    let value = j;
    for (j = 0; j < n; j++) {
      if (j != value) {
        if (mat[j][value] === 0 || mat[value][j] === 1) return -1;
      }
    }


    return value;
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
