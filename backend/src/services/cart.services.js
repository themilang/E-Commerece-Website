const Cart = require('../models/cart.model');

async function createCart(user){
    try {
        const cart=new Cart({user});
        const createdCart=cart.save();
        return createdCart;
        
    } catch (error) {
        console.error("Error while creating a cart",error.message)
        throw new Error(error.message);
    }
} 
module.exports={createCart}