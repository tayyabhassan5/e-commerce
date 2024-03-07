const express=require('express');
const {paymentOrder}=require('../controllers/paymentController')

const router=express.Router();

router.get('/',paymentOrder);

module.exports=router;