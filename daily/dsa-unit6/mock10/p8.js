function runProgram(input) {
  input = input.trim().split("\n");
  console.log(input);
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let i = 0; i < n; i++) {
      let ar = input[line++].trim().split(" ").map(Number);
      mat.push(ar);
    }
    // console.log(n, m, mat);
    check(n, m, mat);
  }
}
function check(n, m, mat) {
  //   console.log(n, m, mat);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // console.log(mat[-1][3])
      // console.log(  "hjk--***", mat[-1][0])

      // console.log(i, j);

      if (odd(n, m, mat, i, j)) {
        mat[i][j] = -mat[i][j];
      }
    }
  }
}

function odd(n, m, mat, i, j) {
    let c=0
  if (i == 0 && j == 0) {
    if (mat[i + 1][j] % 2 == 1 && mat[i][j + 1] % 2 == 1) return true;
  }
  else if (i == 0 && j != 0) {
    if (j == m - 1) {
      if (mat[i + 1][j] % 2 == 1 || mat[i][j - 1] % 2 == 1) {
        c++
      }
      if(c>=2) return true
      
    } 
    else {
      if (mat[i + 1][j] % 2 == 1 || mat[i][j - 1] % 2 == 1 || mat[i][j + 1] % 2 == 1)
      if(c>=2) return true
    }
  }
  
  else if (i != 0 && j == 0) {
    if (i == n - 1) {
      if (mat[i - 1][j] % 2 == 1 || mat[i][j + 1] % 2 == 1) return true;
    }
     else {
      if (mat[i - 1][j] % 2 == 1 || mat[i + 1][j] % 2 == 1 || mat[i][j + 1] % 2 == 1)
      if(c>=2) return true
    }
  } 
  else {
    if (i == n - 1 && j == m - 1) {
      if (mat[i - 1][j] % 2 == 1 || mat[i][j - 1] % 2 == 1) return true;
    } 
    else if (i == n - 1 && j != m - 1) {
      if (mat[i][j - 1] % 2 == 1 || mat[i][j + 1] % 2 == 1 || mat[i - 1][j] % 2 == 1)
      if(c>=2) return true
    } 
    else if (i != n - 1 && j == m - 1) {
      if (mat[i - 1][j] % 2 == 1 || mat[i + 1][j] % 2 == 1 || mat[i][j - 1] % 2 == 1)
      if(c>=2) return true
    } 
    else {
      if (
        mat[i - 1][j] % 2 == 1 ||
        mat[i + 1][j] % 2 == 1 ||
        mat[i][j - 1] % 2 == 1 ||
        mat[i][j + 1] % 2 == 1
      )
      if(c>=2) return true
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
