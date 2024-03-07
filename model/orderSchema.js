const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    company:{
        type:String,
        default:'Moon'
    },
    country:{
        type:String       
    },
    streetAddress:{
        type:String,
        required:true
    },
    town:{
        type:String,
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number
    },
    phone:{
        type:String,
        required:true,
        match: /^[0-9]{11}$/
    },
    email:{
        type:String,
    },
    orderNotes:{
        type:String
    },
    cardNum:{
        type:Number,
        required:true
    },
    cardName:{
        type:String,
        required:true
    },
    expirationDate:{
        type:String,
        required:true
    },
    securityCode:{
        type:String,
        required:true
    },
    paymentStatus: {
        type: Boolean,
        default: false
      }
})

module.exports=mongoose.model('Order',orderSchema)