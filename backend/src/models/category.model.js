const mongoose = require("mongoose");



const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:50,
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
        require:true,
    },
    totalPrice:{
        type:Number,
        require:true,
        default:{
            type:Number,
            default:0,
        }
    },
    level:{
        type:Number,
        require:true,
    },
    discount:{
        type:Number,
        require:true,
        default:0,
    },
})
const Category=mongoose.Schema("categories",categorySchema)
module.exports=Category;