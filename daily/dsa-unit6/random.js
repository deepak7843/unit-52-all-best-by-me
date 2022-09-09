function goInZigZag(n, m, a) {
  //write code here
  let s = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for (let j = m - 1; j >= 0; j--) {
        s += a[i][j]+" ";
      }
    }
  
    if (i % 2 === 1) {
      for (let j = 0; j <m; j++) {
        s += a[i][j]+" ";
      }
    }
  }

  console.log(s);
}
