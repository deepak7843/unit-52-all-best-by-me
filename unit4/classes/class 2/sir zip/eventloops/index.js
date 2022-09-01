const fs = require("fs");

function someAsyncOperation(callback) {
  fs.readFile("abc.txt", callback);
}

const timeoutScheduled = Date.now(); // 1646301758201
console.log("timeoutScheduled", timeoutScheduled);

setTimeout(() => {
  console.log("now", Date.now());
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 3);

// do someAsyncOperation which takes 95 ms to complete
const callbackFunction = () => {
  const startCallback = Date.now();
  console.log("startCallback", startCallback);
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
};
someAsyncOperation(callbackFunction);
