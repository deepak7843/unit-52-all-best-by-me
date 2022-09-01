// function check(){
//     sum = 0;
//     for (i = 1;i<=10;i++){
//         if (i % 2 == 0){
//             return sum;
//         }else{
//             // sum += i;
//         }    
//     }
//     // return sum
// }
// console.log(check());

// function solve(){
//     for (i = 0;i<10;i++){
//         return i;
//     }
//     return 10;
// }

// console.log(solve());

// function check1(){
//     a = 2;
//     b = 1;
//     for (i = 2;i<4;i++){
//         if (i % 2 == 0){
//             a += i;
//         }else{  
//             b += i;
//         }    
//     }
//     if (a > b){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(check1());


// var a=[[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];






// ********************************************************
// function gs(new_str,str,index){
//     if(new_str.length!== 0){
//         console.log(new_str, "**");
      
//     }
//     if(index===str.length){
//         return;
//     }
//     for(var i=index; i<str.length; i++){
//         new_str+=str[i];
//         gs(new_str,str,i+1);
//         new_str.slice(0, new_str.length-1)
//     }
// }
    
//         var str="abcd";
// var new_str="";
// var index=0;
// gs(new_str,str,index)

// *******************************************************


// let s=""
// for(let i=1; i<5; i++){
//     s+=i
// }

// console.log(s);

// function out(n){
//         if(n<=0){
//             return ""
//         }
       
//              return out(Math.floor(n/2)) + n%2

// }
// let a=out(25)
// console.log(a);

var st=[1,2,3]
var r= reverse()

console.log(r);

function reverse(){

    if(st.length>0){
        var x=st[st.length-1]
        st.pop
        reverse()
        insert(x)
    }
}

function insert(x){
    if(st.length===0){
        st.push(x)
    }
    else{
      var a=st[st.length-1]
      st.pop()
      insert(x)
      st.push(a)
    }
}

