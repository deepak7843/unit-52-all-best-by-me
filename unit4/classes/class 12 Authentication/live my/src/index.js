const express = require("express")
const connect = require("./configs/db")
const userController= require("./controllers/user.controller")
const productController = require("./controllers/product.controller")

const {register, login}= require("./controllers/auth.controller")

const app = express()
app.use(express.json())
app.use("/products", productController)

app.post("/register", register)
app.post("/login", login)

app.listen(7790, async () => {
    try{
        await connect()
        console.log("listen 7790");
    }
    catch(err){
        console.log(err.message);
    }
})



