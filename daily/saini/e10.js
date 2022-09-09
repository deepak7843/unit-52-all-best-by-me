function x() {
    var a = 7;
    function y() {
      console.log(a);
    }
    // return y;
    y()
  }
x()

//   var z = x();
//   console.log(z); // value of z is entire code of function y.