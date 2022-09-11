function check(n, a) {
  let o = {},
    s = "";
  for (let i = 0; i < n; i++) {
    if (a[i] in o) o[a[i]]++;
    else o[a[i]] = 1;
  }
  let mis, r;

  for (let i = 1; i <= n; i++) {
    if (o[i] === undefined) mis = i;
    if (o[i] == 2) r = i;
  }

  console.log(mis, r);
}
