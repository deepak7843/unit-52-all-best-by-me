
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
   for(let i=0; i<t;i++){
      let n = +input[line++]
      let ar= input[line++].trim().split(" ").map(Number)
      check(n,ar)
   }
 }
 
 function check(n,ar){
    let inital_ind = {}
    let last_ind = {}
      let cnt = {}
   
    let mx = 0
    for (let i = 0; i < n; i++) {
        let j = ar[i]
        cnt[j] = (cnt[j] || 0) + 1
        mx = Math.max(mx, cnt[j])
        if (inital_ind[j] === undefined) {
            inital_ind[j] = i
        }
        last_ind[j] = i
    }
    let out = n
    for (let j in cnt) {
        if (cnt[j] === mx) {
            out = Math.min(out, last_ind[j] - inital_ind[j] + 1)
        }
    }
    console.log(out)
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
 