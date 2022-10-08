function runProgram(input) {
  input = input.trim().split("\n");
  //fl---->> total number of floors present
  let [fl, letters] = input[0].trim().split(" ").map(Number);
  //  letters---> total number of letters to be delivered
  ////////
  ////////
  ////////
  //   flarr--->> array of room presents in the floor(dormitory)
  let flarr = input[1].trim().split(" ").map(Number);

  //   room_no_ar----->> array of room number written on letter
  let room_no_ar = input[2].trim().split(" ").map(Number);
  check(fl, letters, flarr, room_no_ar);
}

function check(fl, letters, flarr, room_no_ar) {
  //   console.log(fl, letters, flarr, room_no_ar);
  for (let i = 0; i < letters; i++) {
    // my_floor_no(my floor no) & myroom(my room no) in which letter will be delivered
    let my_floor_no = my_floor_Check(flarr, room_no_ar[i], fl);
    let myroom = roomCheck(flarr, room_no_ar[i], my_floor_no);
    console.log(my_floor_no, myroom);
  }

  function my_floor_Check(flarr, room_no, n) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      //   console.log("flarr[j]", flarr[j]);
      sum += flarr[j];
      if (room_no <= sum) {
        return j + 1;
      }
    }
  }

  //   rnum--->> room number written on letter

  function roomCheck(flarr, room_no, my_floor_no) {
    let sum = 0;
    // console.log("1st");
    for (let i = 0; i < my_floor_no - 1; i++) {
      sum = sum + flarr[i];
      //   console.log("sum", sum);
    }
    // console.log("2nd");
    let delivered_room = room_no - sum;
    return delivered_room;
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
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
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
