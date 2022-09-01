function makeSandwich() {
  console.log(" Making Sandwich 3");
}

function makeBurger() {
  console.log(" Making Burger 3");
}

// console.log(module.exports);        //imp thing that module.exports is an empty object

// module.exports.makeSandwich = makeSandwich;
// module.exports.makeBurger = makeBurger;         // generally people don't do like line 11,12 because it is not readable

// module.exports ["makeSandwich"] = makeSandwich  // different****** way of doing line 11,12



// module.exports = { makeSandwich:makeSandwich, makeBurger: makeBurger };


module.exports = { makeSandwich, makeBurger };
// you should follow line 21 for 11, 12 . It is easiest


