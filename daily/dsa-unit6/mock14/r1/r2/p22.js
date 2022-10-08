//Enter code here
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let l = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[l++];
    let str = input[l++];
    masai(n, str);
  }
  function masai(n, str) {
    let c = 0;
    let my = {};
    for (let i = 0; i < n; i++) {
      if (my[str[i]] == undefined) {
        my[str[i]] = 1;
      } else {
        my[str[i]]++;
      }
      
      if (my[str[i]] === 1) {
        c = c + 2;
      } else {
        c++;
      }
    }
    console.log(c);
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
