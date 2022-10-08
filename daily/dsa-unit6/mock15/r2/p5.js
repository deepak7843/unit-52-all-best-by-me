//Enter code here
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let l = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[l++];
    console.log(prime(n));
  }
  function prime(n) {
    if (n === 0 || n === 1 || n === 01) {
      return "No";
    }
    let ne = +n.toString().split(" ").reverse().join();
    if (isPrime(n) && isPrime(ne)) {
      return "Yes";
    } else {
      return "No";
    }
  }

  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
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
