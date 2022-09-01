
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({    //nihal said--- if you don't use new, it will work
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true}
},{
    timestamps : true,
    versionKey : false,
})


userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    
    // let hash= this.password + "lmao"

    // this.password = hash;

    // console.log(this.password);
    return next();
})


userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema)

module.exports = User;




