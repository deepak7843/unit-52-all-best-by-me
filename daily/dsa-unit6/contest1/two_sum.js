function two_sum(ar, s) {
  let sums = [];
  let ob = {};
  for (let i = 0; i < ar.length; i++) {
    let dif = s - ar[i];
    if (dif in ob) {
      sums.push([dif, ar[i]]);
    }
    ob[ar[i]] = ar[i];
  }
  console.log(sums);
}

let ar = [3,5,2,-4,8,11] , s=7

two_sum(ar,s)

