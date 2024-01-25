const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const User  =new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        set: (password)=> bcrypt.hashSync(password,10)
    }
})

module.exports = mongoose.model("Intraventory",User,"users")