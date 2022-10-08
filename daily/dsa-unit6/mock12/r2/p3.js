



function runProgram(input){

    input=input.trim().split("\n")
     //console.log(input)
    var testcase=+input[0]
    var line=1
   for(var i=0; i<testcase;i++){
      var [n,np] = input[line++].trim().split(" ").map(Number)
      var ar=[]
      for(let i=0;i<np;i++){
          let ar3= input[line++].trim().split(" ").map(Number)
          ar.push(ar3)
      }
  
      check(n,ar)
   }
 }

 
  var canFinish = function (n, array) {
   
    let my_gr = new Map();
    let covered = new Array(n).fill(0);
    for (let [course, dependend] of array)
      my_gr.set(course, (my_gr.get(course) || new Set()).add(dependend));
  
  
    for(let i = 0; i < n; i++) {
      if (covered[i] == 0) {
        if (checkIt(my_gr, covered, i)) {
          return false;
        }
      }
    }
  
    return true;
  };

