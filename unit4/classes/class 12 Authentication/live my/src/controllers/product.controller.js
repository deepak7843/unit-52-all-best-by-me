const express= require("express")
const authenticate = require("../middleware/authenticate")

const router= express.Router()



const Product = require("../models/product.model")   



router.post("", authenticate, async (req, res) => {
   console.log(req);

    req.body.user_id = req.user._id;  
    // req.body.user_id =req.userID  
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})


router.get("", async (req, res) => {
    try{
        const product = await Product.find()

        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports= router;