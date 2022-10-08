
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
   
      let [n,k] = input[0].trim().split(" ").map(Number)
      let ar= input[1].trim().split(" ").map(Number)
      check(n,k,ar)
   
 }
 function check(n,k,ar){
      console.log(n,k,ar)
     
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