

const express = require("express")
const mongoose = require("mongoose")

const app= express();

// connect MongoDB
const connect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/web15")
}


app.get("/users", (req, res) => {
    return res.send("users")
})

app.listen(5000 , () => {
    console.log("listening 5000");
})