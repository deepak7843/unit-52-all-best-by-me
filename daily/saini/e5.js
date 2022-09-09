function a() {
    var b = 10;
    c();
    console.log(d);
    function c() {
        let d=7
      console.log(b); // 10
    }
  }
  a();


//   console.log(b); // Error, Not Defined











// var a = 10;
// function b(){
//     var x= 10;
// }












// var x = 10;
// console.log(x); // 10
// console.log(this.x); // 10
// console.log(window.x); // 10