const mongoose= require("mongoose")

const Schema = mongoose.Schema

const Item = new Schema({
    name:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Intraventory",Item,"intra-ventory")