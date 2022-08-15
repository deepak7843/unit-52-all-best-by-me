/////memoFunc---->> function that will store our inputs and outputs
const memoFunc = (func) => {
  const cache = {};
  return (input) => {  ///// 14-29
    return cache[input] || (cache[input] = func(input));
  };
};

// const fib = (n) => {
const fib = memoFunc((n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
});

// console.log("dsd");

console.time("f1");
console.log(fib(43));
// console.log(fib(3));
// console.log(fib(41));
console.timeEnd("f1");
