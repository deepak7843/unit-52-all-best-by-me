function runProgram(input){
    input = input.trim().split('\n')
    var tc = +input[0];
    var line = 1;
    for(let i=0; i<tc; i++){
        var l = +input[line++];
        var ar = input[line++].trim().split(' ').map(Number);
        out(l,ar)
    }
}


function out(l,ar){
    var ar2 = [];
    ar2[0] = ar[0];
    ar2[1] = ar[1];
    ar2[2] = ar2[0]+ar[2]
    for(let i=3; i<l; i++){
        ar2[i] = Math.max(ar2[i-3],ar2[i-2])+ar[i]
    }
    console.log(Math.max(ar2[ar2.length-1],ar2[ar2.length-2]))
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