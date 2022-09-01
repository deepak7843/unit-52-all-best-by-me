const mongoose= require("mongoose")
const bcrypt = require("bcrypt")

const userSchema= new mongoose.Schema({  //without new, also works
    email: {type:String, required: true, unique:true},
    password:{type: String, required: true},
    role:[{type:String}]

},{
    timestamps: true,
    versionKey: false
} ) 

userSchema.pre("save", function(next){
    const hashed_password = bcrypt.hashSync(this.password, 8);

    // let hashed_password= this.password + "lmao"
    this.password = hashed_password;
    // console.log(this.password);

     return next()
})

 
userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);     //@ 1-47-4
}

const User= mongoose.model("user", userSchema)

 
module.exports= User