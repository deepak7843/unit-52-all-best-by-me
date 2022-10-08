//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var [N,M] = input[0].trim().split(" ").map(Number);
    var line=1
    
    var mat = []
    
     for(var i=1; i<=N; i++)
    {
        mat.push(input[i].trim().split(" ").map(Number));
        
       
    }
     console.log(armies(mat,N,M));
    
    
}

function armies(mat,n,m) {
  

    let cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] == '1') {
                dfs(mat, i, j);
                cnt++;
            }
        }
    }
    return cnt;
};


 function check2 (mat, i, j) {
    if (i < 0 || i >= n || j < 0 || j >= mat[i].length || mat[i][j] == '0') {
        return;
    }
    mat[i][j] = '0';
    dfs(mat, i + 1, j);
    dfs(mat, i - 1, j);
    dfs(mat, i, j + 1);
    dfs(mat, i, j - 1);

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