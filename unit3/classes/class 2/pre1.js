function player(n,t){
    this.name=n
    this.team=t
}
var my= new player("m" , "b")
console.log("my:", my)


console.log("*****************")

var p1={
    name: "john"
}

var p2={
    name: "rahul"
}

function myname(){
    console.log(this.name)
}
myname.call(p1)
myname.call(p2)

console.log("*****************")

function myname1(a,c){
    this.age=a
    this.city=c
}
myname1.call(p2,21,"gkp")
console.log("p2:",p2)

console.log("*****************")

myname1.apply(p2,[21,"gkp"])
console.log("p2:",p2)

console.log("*****************")
