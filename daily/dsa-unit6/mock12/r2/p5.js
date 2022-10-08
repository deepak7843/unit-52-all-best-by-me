function runProgram(input){

    input=input.trim().split("\n")
       // console.log(input)
       var [n,k]=input[0].trim().split(" ").map(Number)
       var arr= input[1].trim().split(" ").map(Number)
   //   console.log(arr)
   var max_my_window_size= my_window_size(arr, n, k)
   console.log(count_windows(arr, n, k, max_my_window_size))
   
   }
   function my_window_size(arr, n, k) {       
       
       var left = -1, 
        s = 0
       for(var i = 0;i < n;i++) {
           if (arr[i] % k != 0) {
               if(left == -1) {
                 left = i
               }
               // right=i
           }
           s += arr[i]
           
       }
       
       if (s % k != 0) {
           return n
       }
       
       if (left == -1) {
           return 0
       }
       
       var right = -1
       for (var i = n - 1;i >= 0;i--) {
           if (arr[i] % k != 0) {
               right = i
               break
           }
       }
       
       var left_my_window_size =n-(left + 1)
       let right_my_window_size= right
       
     my_window_size= Math.max(left_my_window_size, right_my_window_size)
     return my_window_size
     
   }
   
   function count_windows(arr, n, k, window_len) {
       if (window_len == 0) {
           return 1
       }
       var count = 0
       var cur_sum = 0
       
       for (var i = 0;i < window_len;i++) {
           cur_sum += arr[i]
       }
       
       if (cur_sum % k != 0) {
           count ++
       }
       
       for (var i = window_len;i < n;i++) {
           cur_sum -= arr[i - window_len]
           cur_sum += arr[i]
           
           if (cur_sum % k != 0) {
               count ++
           }
       }
       
       return count
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