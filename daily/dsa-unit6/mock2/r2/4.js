function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim().split(" ").map(Number);
    check(n, ar);
  }
}
function check(n, a) {
  //  console.log(n,ar)
  a.sort((a, b) => a - b);
//   console.log(n, a);
  let s1 = 0,
    s2 = 0;

  if (n % 2 == 1) {
    for (let i = 0; i <= Math.floor(n / 2); i++) {
    //   console.log("a[i]--", a[i]);
      s1 += a[i];
    }
    // console.log("s1--", s1);

    for (let i = Math.ceil(n / 2); i < n; i++) {
    //   console.log("a[i]--", a[i]);

      s2 += a[i];
    }

    // console.log("s2--", s2);
  }

  if (n % 2 == 0) {
    for (let i = 0; i <(n / 2); i++) {
    //   console.log("a[i]--", a[i]);
      s1 += a[i];
    }
    // console.log("s1--", s1);

    for (let i = Math.ceil(n / 2); i < n; i++) {
    //   console.log("a[i]--", a[i]);

      s2 += a[i];
    }

    // console.log("s2--", s2);
  }

  

  if (s1 > s2) {
    // console.log(s1);
  } else {
    // console.log(s2);
  }
}

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
