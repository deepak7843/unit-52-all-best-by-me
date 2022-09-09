
// function check(s) {
//     //  console.log(s)
//     var l = 0,
//       r = s.length - 1;
  
//     while (l < r) {
//       if (s[l] == s[r]) {
//         l++;
//         r--;
//       } else {
//         if (isPal(s, l + 1, r)) return "YES";
  
//         if (isPal(s, l, r - 1)) return "YES";
//         return "NO";
//       }
//     }
  
//     return "YES";
//   }
  
//   function isPal(s, l, r) {
//     while (l < r) {
//       if (s[l] !== s[r]) return false;
//       l++;
//       r--;
//     }  
//     return true;
//   }

//   s="abcbea"
//   let ans = check(s);
//   console.log(ans);





// console.log(ar[3]-ar[2] +  " "+ ar[3]-ar[1] + " "+ar[3]-ar[0] );