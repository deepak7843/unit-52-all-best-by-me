
function runProgram(input){

    input=input.trim().split("\n")
  
      let n = input[0].trim()
       let line=1
      let mat=[]
      for(let i=0;i<n;i++){
        let ar= input[line++].trim().split(" ").map(Number)
        mat.push(ar)
      }
     
      check(n,mat)
  }
function check(n, mat) {
  console.log(n,  mat);
  let top = 0,
    bot = n - 1,
    left = 0,
    right = n - 1;

  while (top < bot && left < right) {
    var pre = mat[top + 1][left];

    for (let i = left; i <= right; i++) {
      let temp = mat[top][i];
      mat[top][i] = pre;
      pre = temp;
    }
    top++;

    for (let i = top; i <= bot; i++) {
      let temp = mat[i][right];
      mat[i][right] = pre;
      pre = temp;
    }
    right--;

    for (let i = right; i >= left; i--) {
      let temp = mat[bot][i];
      mat[bot][i] = pre;
      pre = temp;
    }
    bottom--;

    for (let i = bot; i >= top; i--) {
      let temp = mat[i][left];
      mat[i][left] = pre;
      pre = temp;
    }
    left++;
  }
  return mat;
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
