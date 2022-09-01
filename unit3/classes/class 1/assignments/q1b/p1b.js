// 2. Explain the difference between Object.freeze() and const. Write relevant code and add comments.

var a=[1,2,3,5];
a[1]=7;

console.log(a)

Object.freeze(a);
a[2]=89
console.log(a);

const employee = {
    name: "Mayank",
    designation: "Developer",
    address: {
      street: "Rohini",
      city: "Delhi"
    }
  };
  
  Object.freeze(employee);
  employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city)
console.log(employee);

// Object.freeze() makes non primitive data type immutable


// Deepak Shankar Dubey Today at 12:11 AM
// Is const and let are same??
// @Pulkit Tyagi

// 1 reply

// Pulkit Tyagi  26 minutes ago
// Const is basically similar to let, the only major difference is, the variables declared using const cannot be reassigned.

let c;
c=90
console.log("c", c);

let b;
b=5
console.log("b" , b);

b=8
console.log("b2" , b);
console.log("*****************");

// const h;
const h=5
console.log("h" , h);

h=8
console.log("h2" , h);