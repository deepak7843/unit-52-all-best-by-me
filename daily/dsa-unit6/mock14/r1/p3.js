
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
   for(let i=0; i<t;i++){
     
      let ar= input[line++].trim()
       let n = ar.length
      check(n,ar)
   }
 }
 function check(n,a){
      console.log(n,a)
      let mid=n/2, s1="",s2=""
      if(n%2==0){
          for(let i=0;i<mid;i++){
              s1+=a[i]
          }
          for(let i=mid;i<n;i++){
              s2+=a[i]
          }
      }
      if(n%2==1){
          for(let i=0;i<Math.floor(mid);i++){
              s1+=a[i]
          }
          for(let i=Math.ceil(mid);i<n;i++){
              s2+=a[i]
          }
      }
       console.log(s1)
       console.log(s2)
       let o1={} ,o2={}
       for(let i=0;i<s1.length;i++){
           if(s1[i] in o1) o1[s1[i]]++
           else  o1[s1[i]]=1
       }
       for(let i=0;i<s2.length;i++){
           if(s2[i] in o2) o2[s2[i]]++
           else  o2[s2[i]]=1
       }
       console.log(o1);
       console.log(o2);
     
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
 
 
 
 
 