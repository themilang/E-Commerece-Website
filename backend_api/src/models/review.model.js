import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"user"
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"product"

        
    },
    review:{
        type:String,
        require:true,

        
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    


})


const Review=mongoose.Schema("review",reviewSchema)
module.exports=Review