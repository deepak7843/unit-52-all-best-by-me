function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k]  = input[0].split(" ").map(Number)
    var a = input[1].split(" ").map(Number)
    
    for(i=0;i<n;i++){
       for(j=0;j<n-i-1;j++){
           Math.sqrt(a[j])
           if( Math.sqrt(a[j])  >   Math.sqrt(a[j+1]) ){
                var temp = a[j];
                
                a[j] = a[j+1];
                a[j+1] = temp;
           }
          
       }
    }
    console.log(a.join(" "));	
}



if (process.env.USERNAME === "") {
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