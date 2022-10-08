function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[l++];
    console.log(check(n));
  }
}

function check(n) {
  if (n === 1 || n === 0 || n === 01) return "No";
  let reverse_of_n = +(n.toString().split(" ").reverse().join());
  if (checkPrime(n) && checkPrime(reverse_of_n)) return "Yes";
  else return "No";
}

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
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
