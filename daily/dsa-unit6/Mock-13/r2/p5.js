
function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
   
      let [n,k] = input[0].trim().split(" ").map(Number)
      let cost= input[1].trim().split(" ").map(Number)
      let pages= input[2].trim().split(" ").map(Number)

      sort_data(cost, pages, n)
      console.log((cost, pages, n));
      check(n,k,cost, pages)
   
 }
 function check(n,k,cost, pages){
      console.log(n,k,cost, pages)
    //   pages.sort((a,b)=> b-a)
    //   pages.sort((a,b)=> b-a)
     
 }
  
 
 function sort_data(cost, pages, n) {
    for (var i = 0;i < n - 1;i++) {
        max = i
        for(var j = i + 1;j < n;j++) {
            if (pages[j] > pages[max]) {
                max = j
            } else if (pages[j] == pages[max] && cost[j]< cost[max]){
                max = j
            }
        }
        
        var temp = cost[i]
        cost[i] = cost[max]
        cost[max] = temp
        
        temp = pages[i]
        pages[i] = pages[max]
        pages[max] = temp
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