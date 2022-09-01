
const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {

    console.log(process.env)

    return jwt.sign({user}, process.env.SECRET_KEY)

    // return jwt.sign({ user }, 'masaisecret')
}


const register = async (req, res) => {

    // try{
    //       return res.status(200).send("Registered")
    // }

    try {
        // console.log(req.body.email);

        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).send({ message: "Email already exists" })
        }

        user = await User.create(req.body)

        const token = generateToken(user)

        return res.status(200).send({ user, token });
    }
    catch (err) {
        res.status(400).send({ message: err.message })

    }
}

const login = async (req, res) => {
    //     try{
    //         return res.status(200).send("Login")
    //   }

    try {
        const user = await User.findOne({ email: req.body.email })
        //checked if mail exists
        if (!user) {
            return res.status(400).send("Wrong Email or Password")
        }

        //if email exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if (!match) {
            return res.status(400).send({ message: "Wrong Email or Password" })
        }

            // if it matches
            const token = generateToken(user)
            return res.status(200).send({ user, token });


        
    }



    catch (err) {
        res.status(400).send({ message: err.message })

    }
}


module.exports = { register, login, generateToken }








