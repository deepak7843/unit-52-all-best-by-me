

function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
   for(let i=0; i<t;i++){
      let n = +input[line++]
      let ar= input[line++].trim()
      let ar1= input[line++].trim()
      check(n,ar,ar1)
   }
 }
 function check(n,s,g){
     //  console.log(n,s,s1)
 let ob = {};
let x = 0;
let y = 0;
for (let i = 0; i < n; i++) {
    if (ob[s[i]]) {
        ob[s[i]] ++
    } else {
        ob[s[i]] = 1;
    };
};
for (let i = 0; i < n; i++) {
    if (ob[g[i]]) {
        y += 1;
        ob[g[i]] -= 1;
    };
    if (s[i] === g[i]) {
        x += 1;
    };
};
// return x + 'A' + (y - x) + 'B';
 console.log(x + 'A' + (y - x) + 'B')
 }
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input){
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read)
 });
 
 
 
 
 