function Next_great(n, a) {
  //  console.log(n,a)
  var stack = [];
  var out = [];
  for (i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      out[i] = -1;
    } else {
      out[i] = stack[stack.length - 1];
    }
    stack.push(a[i]);
  }
  console.log(out.join(" "));
}

let arr = [14, 1101, 10, 35, 0],
  n = arr.length;
Next_great(n, arr);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function prev_small(n, a) {
  let s = [],
    o = [];

  for (let i = 0; i < n; i++) {
    while (s.length > 0 && s[s.length - 1] >= a[i]) {
      s.pop();
    }
    if (s.length === 0) {
      o[i] = -1;
    } else {
      o[i] = s[s.length - 1];
    }
    s.push(a[i]);
  }
  console.log(o);
}

let a2 = [2, 3, 5, 4, 7, 9, 2, 4, 6],
  n2 = a2.length;
console.log(a2);
prev_small(n2, a2);
prev_great(n2, a2);

next_small(n2, a2);

////////////////////////////////////////////////////////////////
function next_small(n, a) {
  let s = [],
    o = [];
  for (let i = n - 1; i >= 0; i--) {
    while (s.length > 0 && s[s.length - 1] >= a[i]) {
      s.pop();
    }
    if (s.length === 0) {
      o[i] = -1;
    } else {
      o[i] = s[s.length - 1];
    }
    s.push(a[i]);
  }
  console.log(o);
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function prev_great(n, a) {
  let s = [],
    o = [];
  for (let i = 0; i < n; i++) {
    while (s.length > 0 && s[s.length - 1] <= a[i]) {
      s.pop();
    }
    if(s.length === 0){
        o[i] =-1
    }
    else{
        o[i] = s[s.length - 1]
    }
    s.push(a[i]);
  }
  console.log(o);
}

////////////////////////////////////////////////////////////////

// let a=[] , b=[]

// for(var i=5; i>=0;i--){
//  a.push(i)
//  b[i]=i
// }
// console.log(a);
// console.log(b);

// let c=[]

// c[4]=4
// c[3]=3
// console.log(c);
