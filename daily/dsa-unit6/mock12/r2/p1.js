
function runProgram(input){

    input=input.trim().split("\n")
    var t=+input[0]
    var line=1
   for(var i=0; i<t;i++){
      var n = +input[line++]
      var ar= input[line++].trim().split(" ").map(Number)
      intern(n,ar)
   }
 }
 function intern(n,ar){
      var c5=0, c10=0, c20=0
       for(var i=0; i<n;i++){
           if(ar[i]==5){
              
               c5++
               
           }
           if(ar[i]==10){
               c5--
               c10++
           }
           if(ar[i]==20){
               c5--
               c10--
           
           }
       }
       if(c5<0 || c10<0){
               console.log("NO")
       }
       else {
               console.log("YES")
       }
     
 }
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 var read = "";
 process.stdin.on("data", function (input){
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read)
 });
 
 
 
 
 