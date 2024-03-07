const asyncHandler = require('express-async-handler');
const Product = require('../model/productSchema');

const productPosting = asyncHandler(async (req, res) => {
    try {
        //console.log(req.files);
        // console.log(req.files.length); 
        // console.log(req.body.productHeading);
        // console.log(req.body.productDesc);
        // console.log(req.body.productReview); 
        // console.log(req.body.productPrice); 
        // console.log(req.body.productColor); 
        // console.log(req.body.productQuantity); 
        // console.log(req.body.productDetail); 
        // console.log(req.body.productColor);               
        if (!(req.files && !(req.files.length===0) && req.body.productHeading && req.body.productDesc  && req.body.productReview &&req.body.productPrice&& !(req.body.productColor===undefined)&&req.body.productQuantity &&req.body.productDetail))  {
            res.status(400);
            throw new Error('Please provide all required fields');
        }
        const filenames = req.files.map(file => file.filename);
        const filepaths = req.files.map(file => file.path);
        //const colors = req.body.map(text => body.productColor);

        try {
            const createdProduct = await Product.create({
                productHeading: req.body.productHeading,
                productDesc: req.body.productDesc,
                productReview: req.body.productReview,
                productColor:req.body.productColor,
                productPrice:req.body.productPrice,
                productQuantity: req.body.productQuantity,
                productDetail: req.body.productDetail,
                filename: filenames,
                filepath: filepaths,
            });
        
            res.status(200).json(createdProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error in saving file' });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Internal Server Error' });
    }
});

const productGetting=asyncHandler(async(req,res)=>{
    try {
        const allProducts=await Product.find().select('productHeading productDesc filename productPrice productColor');
        res.status(200).json(allProducts);
    }catch(error){
        console.error(error);
        res.status(400).json({error:"I could not find products"});
    }
})

const productGetting1=asyncHandler(async(req,res)=>{
    const productID=req.query.productID;
    console.log(productID);
    try {
        const allProducts=await Product.findById(productID).select('productHeading productDesc productColor productReview productPrice productDetail filename');
        res.status(200).json(allProducts);
    }catch(error){
        console.error(error);
        res.status(400).json({error:"I could not find products"});
    }
})

module.exports = {
    productPosting,
    productGetting,
    productGetting1,
};

