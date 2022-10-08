function runProgram(input) {
  input = input.trim().split("\n");
  var t = +input[0].trim();
  var line = 1;

  for (var i = 0; i < t; i++) {
    var ar1 = input[line++].trim().split(" ");

    if (ar1[0] == "E") {
      var a = +ar1[1];
      var b = +ar1[2];
      inque(a, b);
    } else {
      dque();
    }
  }
}
var first = [];
var sec = [];
var third = [];
var fourth = [];

var que = [];


function dque() {
  var c = que[0];

  if (c == 1) {
    console.log(c, first.shift());
    if (first.length === 0) {
      que.shift();
    }
  } else if (c == 2) {
    console.log(c, sec.shift());
    if (sec.length === 0) {
      que.shift();
    }
  } else if (c == 3) {
    console.log(c, third.shift());
    if (third.length === 0) {
      que.shift();
    }
  } else if (c == 4) {
    console.log(c, fourth.shift());
    if (fourth.length === 0) {
      que.shift();
    }
  }
}

function update(a, b) {
    if (a == 1) {
      first.push(b);
    }
    if (a == 2) {
      sec.push(b);
    }
    if (a == 3) {
      third.push(b);
    }
    if (a == 4) {
      fourth.push(b);
    }
  }
  
  function inque(a, b) {
    if (!que.includes(a)) {
      que.push(a);
    }
  
    update(a, b);
  }
  

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
