const mongoose = require("mongoose");



const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order-items",
    },
    orderDate:{
        type:Date,
        require:true,
        default:Date.now(),
    },
    deliveryDate:{
        type:Date,
        require:true,
        default:Date.now(),
    },
    shippingAddress:{
     
        type:mongoose.Schema.Types.ObjectId,
        ref:"shipping-address"
         
    },
    paymentID:{
        type:String,
    },
    paymentStatus:{
        type:string,
        default:'PENDING',
    },
    discount:{
        type:Number,
        require:true,
    },
    totalPrice:{
        type:Number,
        require:true,
    },
    totalItems:{
        type:Number,
        require:true,
    },
    totalDiscountedPrice:{
        type:Number,
        require:true,

    },
    orderStatus:{
        type:String,
        require:true,
        default:"PENDING",

    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now(),
    },

})
const Order=mongoose.Schema("order",orderSchema)
module.exports=Order;