import mongoose from "mongoose";


const ratingSchema = new mongoose.Schema({
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
    rating:{
        type:Number,
        require:true,

        
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    


})


const Rating=mongoose.Schema("rating",ratingSchema)
module.exports=Rating