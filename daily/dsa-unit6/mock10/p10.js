function runProgram(input){
    input = input.trim().split('\n')
    var t = +input[0];
    var line = 1;
    for(let i=0; i<t; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(' ').map(Number);
        out(n,arr)
    }
}
function out(n,arr){
    var dp = [];
    dp[0] = arr[0];
    dp[1] = arr[1];
    dp[2] = dp[0]+arr[2]
    for(let i=3; i<l; i++){
        dp[i] = Math.max(dp[i-3],dp[i-2])+arr[i]
    }
    console.log(Math.max(dp[dp.length-1],dp[dp.length-2]))
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