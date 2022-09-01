var p1={
    name: "john"
}

var p2={
    name: "rahul"
}

function myname1(a,c){
    this.age=a
    this.city=c
}

myname1.bind (p2,21,"gkp")
console.log("p2:",p2) 

console.log("*****************")

var mybind=myname1.bind (p2,21,"gkp")
console.log("mybind:",mybind  )

console.log("*****************")

mybind()
console.log("p2:",p2)

