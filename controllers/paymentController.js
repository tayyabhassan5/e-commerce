const asyncHandler = require('express-async-handler');
//const uuid=require('uuid');
const stripe=require('stripe')('sk_test_51OltXJSByPnkUP3uU8khIPj6FrwWdSfmnkCYyqHzJdRZpJRRDylpjccUFNpT1C2NvIwD5olIsO0lNfV9yfPFAKXt00Y1taD43t')
const { v4: uuid } = require('uuid');
const paymentOrder = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Hello" });
});

const paymentStripe = asyncHandler(async (req, res) => {
    const { product, price } = req.body;
    const idempotencyKey=uuid();
    res.status(200).json({
        message: "Hellsbo",
        product: product,
        price: price,
        uuid:idempotencyKey
       
    });
    // const { product, price } = req.body;
    // res.status(200).json(product)
    console.log("product", product);
    console.log("proce", price);
    console.log("uuid",idempotencyKey);

    return stripe.customers.create({
        email:TokenExpiredError,
        source:Token.id,
    }).then(customer=>{
        stripe.charges.create({
            amount:product.price*100,
            currency:'usd',
            customer:customer.id,
            receipt_email:token.email,
            description:`Purchase of ${product.name}`,
            shipping:{
                name:token.card.name,
                address:{
                    country:token.card.address_country
                }
            }
        },{idempotencyKey})
    }).then(result=>res.status(200).json(result))
    .catch(err=>console.log(err))
});
module.exports = {
    paymentOrder,
    paymentStripe,
};