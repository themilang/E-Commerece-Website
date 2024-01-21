import mongoose from "mongoose";



const cartItemsSchema=new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"cart"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        require:true,
    },
    size:{
        type:Number,
        require:false,

    },
    quantity:{
        type:Number,
        require:true,
        default:1,
    },
    price:{
        type:Number,
        require:true,
    },
    discountedPrice:{
        type:Number,
        require:true

    },
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    },
})
const CartItems=mongoose.Schema("cart",cartItemsSchema)
module.exports=CartItems;