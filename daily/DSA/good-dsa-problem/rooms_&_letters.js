// Rooms and Letters Ended
// Description

// There are n dormitories in Masai University, they are numbered with integers from 1 to n. Each dormitory consists of rooms, there are ai rooms in i-th dormitory. The rooms in i-th dormitory are numbered from 1 to ai.

// A postman delivers letters. Sometimes there is no specific dormitory and room number in it on an envelope. Instead of it only a room number among all rooms of all n dormitories is written on an envelope. In this case, assume that all the rooms are numbered from 1 to a1+a2+⋯+an and the rooms of the first dormitory go first, the rooms of the second dormitory go after them and so on.

// For example, in case n=2, a1=3 and a2=5 an envelope can have any integer from 1 to 8 written on it. If the number 7 is written on an envelope, it means that the letter should be delivered to the room number 4 of the second dormitory.

// For each of m letters by the room number among all n dormitories, determine the particular dormitory and the room number in a dormitory where this letter should be delivered.

// Input
// Input Format

// The first line contains the number of dormitories, N and the number of letters M

// The second line contains N numbers, the rooms present in all the dormitories.

// The third line contains M numbers, the room number written on the letters

// Constraints

// 1<=N<=10^5

// 1<=M<=10^5

// 1<=ai<=10^6

// 1<=bi<=sum(ai)

// Output
// For each letter print two integers, the dormitory D and the room R in D in which the letter has to be delivered.

// Sample Input 1

// 3 6
// 10 15 12
// 1 9 12 23 26 37

// Sample Output 1

// 1 1
// 1 9
// 2 2
// 2 13
// 3 1
// 3 12
// Hint

// In the first example letters should be delivered in the following order:

// the first letter in room 1 of the first dormitory
// the second letter in room 9 of the first dormitory
// the third letter in room 2 of the second dormitory
// the fourth letter in room 13 of the second dormitory
// the fifth letter in room 1 of the third dormitory
// the sixth letter in room 12 of the third dormitory

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

  //   room_no--->> room number written on letter

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
