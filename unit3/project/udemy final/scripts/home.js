var reguser = JSON.parse(localStorage.getItem("userprofile"))
console.log(reguser)

let user = document.getElementById("pbox")
let bu = document.getElementById("uname")
let append_user = document.getElementById("mail")

// let name = document.createElement('p')
user.textContent=reguser[reguser.length-1].UserName[0]
bu.textContent=reguser[reguser.length-1].UserName[0]

let user_div=document.createElement('div')
let u_name = document.createElement('h3')
u_name.textContent=reguser[reguser.length-1].UserName
let u_mail = document.createElement('p')
u_mail.textContent=reguser[reguser.length-1].emailAdd
user_div.append(u_name,u_mail)
append_user.append(user_div)