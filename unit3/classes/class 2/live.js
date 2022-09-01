console.log(this) 

console.log("**********************************************") 

function f(){
    console.log(this)
}
f()

console.log("**********************************************") 

const person={
    name: "pablo",

    test: function(){
        console.log(this) 
    }
}

person.test()

console.log("**********************************************") 

const person1={
    name: "d",

    test: function(){
        console.log(this) 
    }
}

person1.test()

console.log("**********NORMAL FUNCTION **********************************************") 

function NikeProduct(){

    let obj ={
        name:"shoes",
        price:200,
        type:"sneaker"
    }

return obj
}
var p1= NikeProduct()
console.log("p1:", p1)

console.log("**********CONSTRUCTOR FUNCTION START**********************************************") 

function NikeProduct_CF(){

    let obj ={
        name:"shoes",
        price:200,
        type:"sneaker"
    }
//    return obj
}
var p2= new NikeProduct_CF()
console.log("p2:", p2)

console.log("**********************************************") 

function NikeProduct2(){

   let product={}
   product.name="shoes"
    product.price=200

    return product
}
var p11= NikeProduct2()
console.log("p11:", p11)

console.log("**********************************************") 

function NikeProduct_CF1(){

     this.name="shoes"
     this.price=200
   
}
var p3= new NikeProduct_CF1()

console.log("p3:", p3)

console.log("**********************************************") 

const kitchen ={
    name: "kitchen",
    purpose: "cook",
    order: "thali",
   
    cookfood(){
        console.log("serving " + this.order);

        console.log(`serving `  + this.order);

        console.log('serving ' + this.order);

        console.log("serving  ${this.order}"); //it is wrong

        console.log(`serving  ${this.order}`);

        console.log(`serving  ${kitchen.order}`);
    }

}
kitchen.cookfood()

console.log("**********************");

const living_room1={
    name: "living room",
    purpose: "chill",
    order: "maggie"
}

const kitchen1 ={
    name: "kitchen",
    purpose: "cook",
    order: "thali",

    cookfood() {
        console.log(`serving  ${living_room1.order}`);
    }
}

kitchen1.cookfood()

console.log("*******.call  application**********************");

const kitchen2 ={
    name: "kitchen",
    purpose: "cook",
    order: "thali",

    cookfood() {
        console.log(`serving  ${this.order}`);
    }
}

kitchen2.cookfood.call(living_room1)

console.log("**********************************");

const living_room3={
    name: "living room",
    purpose: "chill",
    order: "maggie"
}

const kitchen3 ={
    name: "kitchen",
    purpose: "cook",
    order: "thali",

    cookfood(x) {
        console.log(`serving  ${this.order} ${x}`);
    }
}

kitchen3.cookfood.call(living_room3 , "coke")

console.log("*******.bind****************************");

let x= kitchen3.cookfood.bind(living_room3 , "coke")
console.log("x:", x);
x()