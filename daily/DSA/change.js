function sum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function sortArr(arr, n) {
  let a = [];

  for (let i = 0; i < n; i++) {
    a.push([sum(arr[i]), arr[i]]);
  }

  a.sort();

  console.log(a);
  let st = "";
  for (let i = 0; i < a.length; i++) {
    st += a[i][1] + " ";
  }

  console.log(st);
}

let arr = [14, 1101, 10, 35, 0];
let n = arr.length;
sortArr(arr, n);
