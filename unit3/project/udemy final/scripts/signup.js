var userstack =   JSON.parse(localStorage.getItem("userDatabase")) || [];

// console.log(userstack)
 
function Register(){
// event.preventDefault();
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("password").value;


var userData = {
    emailAdd:email,
    password:pass,
    UserName:name,
};

if(userData.emailAdd=="" || userData.password=="" || userData.UserName==""){
    alert("Please fill all details")
    // window.open(
    //     "signup.html", "_blank");
    
}

else{
    userstack.push(userData);


localStorage.setItem("userDatabase",JSON.stringify(userstack));

alert("signup success")
window.open(
      "login.html");
}


}