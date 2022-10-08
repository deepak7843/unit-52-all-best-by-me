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
   let x = 0, y = 0;
 
 for(let i = 0 ; i < n; i++)
 {
     if(s[i] == g[i])
         x++;

 }
y=n-x
 let str = "";
 str += x.toString();
 str += "A";
 str += y.toString();
 str += "B";
 console.log(str);
 
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
   let x = 0, y = 0;
 
 for(let i = 0 ; i < n; i++)
 {
     if(s[i] == g[i])
         x++;
     else
     {
         s[s[i] - '0']++;
         g[g[i] - '0']++;
     }
 }
 for(let i = 0 ; i < 10 ;i++)
 {
     y += Math.min(s[i],g[i]);
 }
 let str = "";
 str += x.toString();
 str += "A";
 str += y.toString();
 str += "B";
 console.log(str);
 
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
 
 
 
 
 