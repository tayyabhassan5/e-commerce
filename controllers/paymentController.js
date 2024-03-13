const asyncHandler = require('express-async-handler');

const paymentOrder = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Hello" });
});

const paymentStripe = asyncHandler(async (req, res) => {
    const { product, price } = req.body;
    res.status(200).json({
        message: "Hellsbo",
        product: product,
        price: price
    });
    // const { product, price } = req.body;
    // res.status(200).json(product);
    console.log("product", product);
    console.log("proce", price)
});
module.exports = {
    paymentOrder,
    paymentStripe,
};
