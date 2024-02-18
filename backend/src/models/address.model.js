const mongoose = require("mongoose");

const AddressSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    streetAddress:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },

    zipCode:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    mobile:{
        type:String,
        require:true,
    },
})
const Address=mongoose.Schema("address",AddressSchema)
module.exports=Address;