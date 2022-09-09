function runProgram(input) {
  input = input.trim().split("\n");

  let [n, m] = input[0].trim().split(" ").map(Number);
  let s1 = input[1].trim().split(" ");
  let s2 = input[2].trim().split(" ");
  check(n, m, s1, s2);
}
function check(n, m, s1, s2) {
  console.log(n, m, s1, s2);
  let c = 0;
  for (let i = 0; i < m; i++) {
    if (s1.includes(s2[i])) {
      const index = s1.indexOf(s2[i]);
console.log(index);
      s1.splice(index, 1)
      c++;
    //   s1;
    }
  }
  if(c===m) {
    console.log("Yes");
  }
  else{
    console.log("No");
  }
}
