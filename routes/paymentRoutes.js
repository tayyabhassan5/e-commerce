const express=require('express');
const {paymentOrder,paymentStripe}=require('../controllers/paymentController')

const router=express.Router();

router.get('/',paymentOrder);
router.post('/stripe',paymentStripe)

module.exports=router;