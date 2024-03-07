const express=require('express');
const {
    productPosting,   
    productGetting,
    productGetting1,
} =require('../controllers/productController')

const {
    upload,   
} =require('../upload')

const router=express.Router();

router.post('/' ,upload.array('image',10),productPosting);
router.get('/getProducts',productGetting);
router.get('/getProducts1',productGetting1);
//router.get('/me',protect,getMe);

module.exports=router;