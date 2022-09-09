
function runProgram(input){

    input=input.trim().split("\n")
    
      let n= +input[0]
 
      let s= input[1] 
      let k= input[2] 
      check(n,s,k)
   
 }
 function check(n,s,k){
      console.log(n,s,k)
let max= -Infinity
      for(let i= 0; i <n; i++){
        let ss=""
        for(let j=i;j<n;j++){
            ss+=s[j]
            console.log(ss);
            
        }
      }
     
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
 
 
 
 
 