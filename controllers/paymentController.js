const asyncHandler = require('express-async-handler');

const paymentOrder = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Hello" });
});

module.exports = {
    paymentOrder,
};
