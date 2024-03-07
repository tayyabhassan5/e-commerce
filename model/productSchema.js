const mongoose=require('mongoose')

const imageDetailSchema=new mongoose.Schema({
    productHeading:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productColor:[{
        type:String,
        required:true
    }],
    productReview:{
        type:Number,
        required:true
    },
    productDetail:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    filename: [{
        type:String,
        required:true
    }],
    filepath:[{
    type:String,
    required:true
    }]
})

module.exports=mongoose.model('Product',imageDetailSchema) 