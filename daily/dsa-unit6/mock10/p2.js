
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    let t=+input[0]
    let line=1
   for(let i=0; i<t;i++){
      let n = +input[line++]
      let ar= input[line++].trim()
      let a= input[line++].trim()
      check(n,ar,a)
   }
 }
 function check(n,str1,st2){

  var stack=[];
    var stack2=[];
    for(var i=0;i<n;i++){
        if(str1[i]!=="#"){
            stack.push(str1[i])
        }else{
            if(stack.length<1){
            }else{
                stack.pop();
            }
        }
    }
    for(var j=0;j<n;j++){
        if(st2[j]!=="#"){
            stack2.push(st2[j])
        }else{
            if(stack2.length<1){
            }else{
                stack2.pop();
            }
        }
    }
    var s1="";
    var s2="";
    for(var i=0;i<stack.length;i++){
        s1+=stack[i];
    }
    for(var j=0;j<stack2.length;j++){
        s2+=stack2[j];
    }
    if(s1===s2){
        console.log("CORRECT");
    }else{
        console.log("WRONG");
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
 
 
 
 
 