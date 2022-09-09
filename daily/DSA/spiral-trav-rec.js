function spiralTraversal(n, m, a) {
  //write code here
  let l = 0,
    t = 0,
    b = n - 1,
    r = m - 1,
    c = 0,
    s = "";

  while (c < n * m) {
    for (let i = b; i >= 0 && c<n*m ; i--) {
      s += a[i][l] + " ";
      c++;
    }
    l++;
    for (let i = l; i <= r && c<n*m ; i++) {
      s += a[t][i] + " ";
      c++;
    }
    t++;
    for (let i = t; i <= b && c<n*m ; i++) {
      s += a[i][r] + " ";
      c++;
    }
    r--;
    for (let i = r; i >= l && c<n*m ; i--) {
      s += a[b][i] + " ";
      c++;
    }
    b--;
  }

  console.log(s);
}
