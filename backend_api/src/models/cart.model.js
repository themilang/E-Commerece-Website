import mongoose from "mongoose";



const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"user"
    },
    cartItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart-items",
        require:true,
    },
    totalPrice:{
        type:Number,
        require:true,
        default:0,
    },
    totalItems:{
        type:Number,
        require:true,
        default:0,
    },
    discount:{
        type:Number,
        require:true,
        default:0,
    },
})
const Cart=mongoose.Schema("cart",cartSchema)
module.exports=Cart;