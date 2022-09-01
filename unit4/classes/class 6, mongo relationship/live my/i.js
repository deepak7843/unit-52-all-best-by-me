const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = () =>{
   return mongoose.connect("mongodb+srv://deepak123:13549Aa@cluster0.aqkfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}




app.listen(5800, async () => {
    // try {
    //   await connectDB();


    await  console.log("listen on port 5800");


    // } catch (err) {
    //   console.log(err);
    // }
  
    
  });