function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)

  let [n, k] = input[0].trim().split(" ").map(Number);
  let ar = input[1].trim().split(" ").map(Number);
  //   check(n,k,ar)
  console.log(check(n, k, ar));
}
function check(n, k, ar) {
  //   console.log(n,k,ar)
  var slow = Math.max(...ar);

  var fast = Math.min(...ar);

  var ub = Math.ceil((k / ar.length) * slow);
  var lb = Math.ceil((k / ar.length) * fast);

  while (lb < ub) {
    var day = Math.floor((ub + lb) / 2);
    var sum = ar.reduce((xs, x) => xs + Math.floor(day / x), 0);

    if (sum < k) {
      lb = day + 1;
    } else if (sum >= k) {
      ub = day;
    }
  }

  return lb;
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
