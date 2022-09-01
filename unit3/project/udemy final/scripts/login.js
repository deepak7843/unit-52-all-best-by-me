

var reguser = JSON.parse(localStorage.getItem("userDatabase"))
console.log(reguser)


function LogIn(){
    // event.preventDefault();
    var user = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    


    var count=0;

    for(var i=0; i<reguser.length;i++){

        if(user==""||pass==""){alert("Please fill all details")
          Location: reload()}
        
        else if(reguser[i].emailAdd==user&&reguser[i].password==pass){
            alert("login success")
            localStorage.setItem("userprofile",JSON.stringify(reguser));
        window.open(
           "home.html", "_blank");

           count++;
           break;
            
        }
    }
    if(count==0){
        
            alert("Invalid user")
            Location: reload()
           
        
    }
    
}