function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let ar = input[line++].trim();
    let a = input[line++].trim();
    check(n, ar, a);
  }
}
function check(n, s, s2) {
  //  console.log(n,s,s2)
  let st = [],
    st2 = [];
  for (let i = 0; i < n; i++) {
    if (s[i] !== "#") {
      st.push(s[i]);
    } else {
      if (st.length >= 1) {
        st.pop();
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (s2[j] !== "#") {
      st2.push(s2[j]);
    } else {
      if (st2.length >= 1) {
        st2.pop();
      }
    }
  }

  let c = 0;
  for (let j = 0; j < st.length; j++) {
    if (st[j] == st2[j]) {
      c++;
    }
  }
  if (c == st.length) {
    console.log("CORRECT");
  } else {
    console.log("WRONG");
  }
}

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
