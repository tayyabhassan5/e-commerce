const asyncHandler = require('express-async-handler');
const Cart = require('../model/cartSchema');
const Product = require('../model/productSchema');

const cartHandler = asyncHandler(async (req, res) => {
    const { productHeading, quantity, price } = req.query;

    // Save the purchase data to the database
    const newCartItem = new Cart({
        productHeading,
        quantity,
        price,
    });
    await newCartItem.save();
    res.status(200).json({ message: 'Purchase successful', cartItem: newCartItem });
});

const getCartDetails = asyncHandler(async (req, res) => {
    try {     
      const cartItems = await Cart.find();    
      const cartDetails = [];     
      for (const cartItem of cartItems) {
        const productDetails = await Product.findOne({ productHeading: cartItem.productHeading });       
        if (productDetails) {
          const itemDetails = {
            productId: productDetails._id,
            productHeading: productDetails.productHeading,
            filename:productDetails.filename,
            price: productDetails.productPrice, 
            quantity: cartItem.quantity,
          };         
          cartDetails.push(itemDetails);
        }
      }      
      console.log('Cart Items:', cartItems);
      console.log('Cart Details:', cartDetails);
       
      res.json({ cartDetails });
    } catch (error) {
      
      console.error('Error fetching cart details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//   const deleteItem=asyncHandler(async()=>{
//     const productHeading=req.query;
//     console.log(cartExists);
//     const cartExists= await Cart.findOne({productHeading});
//     console.log(cartExists);
//     if(cartExists){
//         res.status(200).json({message:'SUCCESS'});
//         Cart.deleteOne(cartExists);
//     }
//     else {
//         res.status(400).json({message:'The required product cannot be found'});       
//     }
//   })
  const deleteItem = asyncHandler(async (req, res) => {
    const {productHeading} = req.query;
    const cartExists = await Cart.findOne({ productHeading });
    console.log(cartExists);

    if (cartExists) {
        res.status(200).json({ message: 'SUCCESS' });
        await Cart.deleteOne({ productHeading }); // Use await and correct the deleteOne call
    } else {
        res.status(400).json({ message: 'The required product cannot be found' });
    }
});


module.exports = { cartHandler,getCartDetails, deleteItem};
