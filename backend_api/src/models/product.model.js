import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,

        
    },
    price:{
        type:Number,
        require:true,

        
    },
    discountePrice:{
        type:Number,
        require:true,

        
    },

    discount:{
        type:Number,
        require:true,
        default:0,
    },

    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
      name:{type:String},
      quantity:{type:Number},
    }],
    imageUrl:{
        type:String,

    },
    rating:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rating"
    },
    numrating:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    },
    category:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"category"

    },


})


const Product=mongoose.Schema("products",productSchema)
module.exports=Product