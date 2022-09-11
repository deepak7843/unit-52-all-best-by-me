function runProgram(input) {
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let mat = [];
  for (let i = 0; i < n; i++) {
    let d = input[line].trim().split(" ").map(Number);
    line++;
    mat.push(d);
  }
  check(n, m, mat);
}


function check(n, m, mat) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 0) {
        if (trap(i, j, mat, n, m)) {
          count++;
        }
      }
    }
  }
  console.log(count);
}








function trap(i, j, mat, n, m) {
  let flag = true;
  if (i == 0 && j == 0) {
    if (mat[i + 1][j] != 1 || mat[i][j + 1] != 1) {
      return false;
    }
  } else if (i == 0 && j != 0) {
    if (j == m - 1) {
      if (mat[i + 1][j] != 1 || mat[i][j - 1] != 1) {
        return false;
      }
    } else {
      if (mat[i][j + 1] != 1 || mat[i + 1][j] != 1 || mat[i][j - 1] != 1) {
        return false;
      }
    }
  } else if (i != 0 && j == 0) {
    if (i == n - 1) {
      if (mat[i][j + 1] != 1 || mat[i - 1][j] != 1) {
        return false;
      }
    } else {
      if (mat[i][j + 1] != 1 || mat[i + 1][j] != 1 || mat[i - 1][j] != 1) {
        return false;
      }
    }
  } else {
    if (i == n - 1 && j == m - 1) {
      if (mat[i][j - 1] != 1 || mat[i - 1][j] != 1) {
        return false;
      }
    } else if (i == n - 1 && j != m - 1) {
      if (mat[i][j - 1] != 1 || mat[i - 1][j] != 1 || mat[i][j + 1] != 1) {
        return false;
      }
    } else if (i != n - 1 && j == m - 1) {
      if (mat[i][j - 1] != 1 || mat[i + 1][j] != 1 || mat[i - 1][j] != 1) {
        return false;
      }
    } else {
      if (
        mat[i][j + 1] != 1 ||
        mat[i][j - 1] != 1 ||
        mat[i + 1][j] != 1 ||
        mat[i - 1][j] != 1
      ) {
        return false;
      }
    }
  }
  return true;
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
