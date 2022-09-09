function runProgram(input){
    input=input.trim().split("\n");
    var tc=+input[0]
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var N=+input[line++];
        var A=input[line++].trim().split(" ").map(Number)
        
        console.log(minimumCost(N,A))
    }
}

function cost(N,A)
{
    A.sort((a,b)=>a-b)
    var res=0
    var lengthgth=N-1
    while(length >=0)
    {
        if(length<1)
        {
            res+=A[0]
            break
        }
        res+=A[length]+A[length-1]
        
        length=length-3
    }
    console.log(res)
   
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