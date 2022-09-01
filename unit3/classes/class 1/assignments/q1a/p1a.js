// var ar= [1,2,5,6]

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
console.log( "*****" , months.splice(1, 0, 'Feb'))


// hence .splice() are mutable

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("slice", animals.slice(2));
console.log("animals", animals);
// hence .slice() are immutable