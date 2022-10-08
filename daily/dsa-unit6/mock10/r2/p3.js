function runProgram(input){
    input = input.trim().split('\n') ;
    let [n,m] = input[0].trim().split(' ').map(Number);
    let matrix = [];
    let line = 1;
    for(let i=0; i<n; i++){
        matrix.push(input[line++].trim().split(' ').map(Number))
    }
    
    find(matrix,n,m);
}
function find(matrix,n,m){
    let st = [];
    for(let i=0; i<n; i++){
        let a1 = [];
        for(let j=0; j<m; j++){
            a1.push(elem(matrix,i,j))
        }
        st.push(a1.join(' '))
    }
    console.log(st.join('\n'))
}  

function elem(matrix,i,j){
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let cnt1=0;
    if(i+1<matrix.length){
       a=matrix[i+1][j]
       if(a%2==1)cnt1++;
    }
    if(i-1>=0){
       b=matrix[i-1][j]
       if(b%2==1)cnt1++;
    }
    if(j+1<matrix[0].length){
        c=matrix[i][j+1]
        if(c%2==1)cnt1++;
    }
    if(j-1>=0){
        d=matrix[i][j-1]
        if(d%2==1)cnt1++;
    }
 
    if(cnt1>=2) return matrix[i][j]*-1;
    return matrix[i][j];
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