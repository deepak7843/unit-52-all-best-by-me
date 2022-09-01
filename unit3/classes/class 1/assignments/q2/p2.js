var z= document.querySelector("#num")
var c=1

function check(){
    var value = Math.floor(Math.random()*6+1);
   
      if(value == 6){
          z.style.color="green";
          z.textContent=value;
    }
    else if(value == 1){
          z.style.color="yellow";
          z.textContent=value;
    }
    else {
          z.style.color="red";
          z.textContent=value;
    }
    
    console.log(c++ , value);
    
}
