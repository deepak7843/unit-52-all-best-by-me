
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
    var ar=[]
   for(let i=0; i<t;i++){
      let num = +input[line++]
      ar.push(num)
   }
   my(t,ar)
 }
 function my(n,arr){
      arr.sort().reverse()
      let string=""
     for(var i=0; i<n;i++){
         string+=arr[i]
     }
      console.log(string)
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
 
 
 
 
 