// let counter= 0
// const tree = { // this is vdom
//    app: {
//        counter: {
//            h3: {
//                text: `Counter: ${counter} `
//            },
//            button: {
//                onClick: () => setCount( count+ 1 )
//            }

//        }
//    }
// }

// //new;

//  counter= 2
// const tree = { // this is vdom
//    app: {
//        counter: {
//            h3: {
//                text: `Counter: ${counter} `
//            },
//            button: {
//                onClick: () => setCount( count+ 1 )
//            }

//        }
//    }
// }









function runProgram(input) {

    input = input.trim().split("\n")
    console.log(input)
    let t = +input[0]
    let line = 1
    for (let i = 0; i < t; i++) {
        let n = +input[line++]
        let st = input[line++]
        let ans = countSwap(n, st)
        console.log(ans)
    }
}


function countSwap(n, s) {


    // counter to count minimum swap
    var count = 0;

    // A loop which run till mid of
    // string
    var half = Math.trunc(n / 2);
    for (let i = 0; i < half; i++) {
        // Left pointer
        let left = i;

        // Right pointer
        let right = n - left - 1;

        // A loop which run from right
        // pointer towards left pointer
        while (left < right) {
            // if both char same then
            // break the loop.
            // If not, then we have to
            // move right pointer to one
            // position left
            if (s[left] == s[right]) {
                break;
            }
            else {
                right--;
            }
        }

        // If both pointers are at same
        // position, it denotes that we
        // don't have sufficient characters
        // to make palindrome string
        if (left == right) {
            return -1;
        }

        // else swap and increase the count
        for (let j = right; j < n - left - 1; j++) {
            var temp = s[j];
            s[j] = s[j + 1];
            s[j + 1] = temp;
            count++;

        }
    }
    return count;
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
    runProgram(read)
});






















