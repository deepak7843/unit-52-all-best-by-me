const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;


const User = require('../models/user.model');

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b  2d-9b5d-ab8dfbbd4bed'
 
require("dotenv").config()

// console.log( "*****" , process.env.GOOGLE_CLIENT_ID);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },


  

  async function(accessToken, refreshToken, profile, cb) {

    // console.log("accessToken*****", accessToken)

    // console.log("refreshToken***", refreshToken);


// ****************
    // console.log("profile--%%%%%%%", profile);


    // console.log("email**********", profile._json.email);

    // console.log( "uuidv4##########" , uuidv4());
    

    let user = await User.findOne({email:profile?._json?.email }).lean().exec()    // ?-- for just in case, if not present


    if(!user){
        user = await User.create({
            email : profile._json.email,
            password : uuidv4(), 
            role : ["customer"]
        })
    }

    console.log(user)

      return cb(null, user);

  }
));

 module.exports = passport