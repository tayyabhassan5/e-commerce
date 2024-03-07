const express=require('express');
const {cartHandler, getCartDetails, deleteItem}=require('../controllers/cartController')
const router=express.Router();

router.post('/',cartHandler);
router.get('/Handler', getCartDetails);
router.post('/deleteitem', deleteItem);

module.exports=router;