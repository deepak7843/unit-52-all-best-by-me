function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let a = [],
    o = {};

  for (let i = 1; i <= t; i++) {
    a.push(input[i]);
  }
  console.log(a);

  for (let i = 0; i < a.length; i++) {
    let sort = a[i].split("").sort().join("");
    if (!o[sort]) {
      o[sort] = a[i];
    }
  }
  //   console.log(o)
  let out = [];
  for (const k in o) {
    out.push(o[k]);
  }
  out.sort();
  console.log(out.length);
  console.log(out.join("\n"));
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
