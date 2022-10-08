
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
   for(let i=0; i<t;i++){
      let n = +input[line++]
      let s1= input[line++].trim()
      let s2= input[line++].trim()
      check(n,s1,s2)
   }
 }
 function check(n,s1,s2){
    //   console.log(n,s1,s2)
      let o1={}, o2={}
      for(let i=0;i<n;i++){
          if(s1[i] in o1 ) o1[s1[i]]++
          else o1[s1[i]]=1
         
          if(s2[i] in o2) o2[s2[i]]++
          else o2[s2[i]]=1
      }
      
    //   console.log(o1);
    //   console.log(o2);
      let a1= Object.keys(o1)
      let a2= Object.keys(o2)

    //   console.log(a1, a2);
     
      if(a1.length==a2.length)  {
        console.log("Equivalent");
      }
      else{
        console.log("Not Equivalent");
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
 
 
 
 
 