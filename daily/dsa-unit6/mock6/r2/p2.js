//Enter code here
function runProgram(input){
    input = input.split("\n")
    let n = +input[0]
    //console.log(input)
    let l=1
    var ob ={}
    for(let i=0;i<n;i++){
        let [x,y] = input[l++].split(" ")
        //console.log(x,y)
        ob[x] = y
    }
    //console.log(ob)
    
    //while(ob.length ==0)
    for(k in obj){
        if(ob[k] == "old"){
            console.log(k)
        }
    }
    for(k in ob){
        if(ob[k] == "woman" || ob[k] ==="child" ){
            console.log(k)
        }
    }
    for(k in ob){
        if(ob[k] == "man"  ){
            console.log(k)
        }
    }
    for(k in ob){
        if(ob[k] == "crew"  ){
            console.log(k)
        }
    }

    
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