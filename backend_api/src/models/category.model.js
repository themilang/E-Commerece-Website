import mongoose from "mongoose";



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
        default:0,
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
const Category=mongoose.Schema("Category",categorySchema)
module.exports=Category;