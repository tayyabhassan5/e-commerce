const asyncHandler = require('express-async-handler');
const Order = require('../model/orderSchema');
const Cart = require('../model/cartSchema');
const multer = require('multer');

// Set up multer to handle form data
const upload = multer();

const postOrder = asyncHandler(async (req, res) => {
    try {
        // Use multer middleware to parse form data
        upload.none()(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error parsing form data' });
            }

            // Now you can access the form data in req.body
            const productName = req.body.Cart;
            console.log(productName);

            if (!productName) {
                return res.status(400).json({ err: 'Product Not Found' });
            }

            const product = await Cart.findOne({ name: productName });

            if (!product) {
                return res.status(404).json({ err: 'Product not found in the database' });
            }

            // Create a new order
            const newOrder = new Order({
                product: product._id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                company: req.body.company,
                country: req.body.country,
                streetAddress: req.body.streetAddress,
                state: req.body.state,
                zipCode: req.body.zipCode,
                phone: req.body.phone,
                email: req.body.email,
                orderNotes: req.body.orderNotes,
                cardNum: req.body.cardNum,
                cardName: req.body.cardName,
                expirationDate: req.body.expirationDate,
                securityCode: req.body.securityCode,
                paymentStatus: true
            });

            // Save the order to the database
            await newOrder.save();

            return res.status(201).json({ message: 'Order created successfully', order: newOrder });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ err: 'Internal Server Error' });
    }
});

module.exports = { postOrder };
