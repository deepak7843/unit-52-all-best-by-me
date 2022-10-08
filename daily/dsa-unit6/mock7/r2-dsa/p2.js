function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let ar = input[line++].trim().split(" ").map(Number);
    let ar2 = input[line++].trim().split(" ").map(Number);
    check(n, k, ar, ar2);
  }
}
function check(n, k, a, a2) {
  console.log(n, k, a, a2);

  let s = [], st="", st2="";

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < k; i++) {
        if(a2[i]==a[j]){
           st+=a2[i]+" "
        }
        // else{
        //     console.log(a2[i]);
        //     st2+=a2[i]+" "
        // }
    }
  }


for(let i = 0; i < k; i++){
   if(a.includes(a2[i])===false){
    st2+=a2[i]+" "

   }
}

  console.log(st);
  console.log(st2);
//   console.log(st+ st2);
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
