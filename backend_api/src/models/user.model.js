const mongoose = require("mongoose");



const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
        default:"COSTUMER"
    },
    mobile:{
        type:String,
        
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address"
        
    }],
    paymentinfo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment_info"
        
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
        
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],

    createdAt:{
        typee:Date,
        default:Date.now()
        
    },




})

const User=mongoose.model("user",userSchema)
module.exports=User;