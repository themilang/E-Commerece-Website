const Cart = require('../models/cart.model');

const createCart= async()=>{
    try {
        const cart=new Cart({user});
        const createdCart=cart.save();
        return createdCart;
        
    } catch (error) {
        console.error("Error while creating a cart",error.message)
        throw error;
    }
} 
module.exports={createCart}