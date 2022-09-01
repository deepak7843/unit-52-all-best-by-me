var p1={
    name: "j"
}
var p2={
    name: "h"
}
function enter(){
    // console.log("i am");
    console.log(this.name);
}
enter.call(p1)
enter.call(p2)