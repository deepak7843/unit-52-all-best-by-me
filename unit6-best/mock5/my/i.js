// function al(){
//     var x=100
//     this.beta()
// }
// function beta(){
//     var x=200
//     console.log(this.x);
// }

// al()

// // lo

const sum=(x,y) => {
    x= x && 5
    y=y || 5
    return x+y
}

console.log(sum(20,5));