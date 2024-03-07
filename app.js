const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const {errorHandler} = require('./middlewares/errorMiddlewares');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();
const path = require('path');
const multer=require('multer')
const stripe=require('stripe')('pk_test_51OltXJSByPnkUP3uDB3w7V5yaraD84Klk0QplANiKuLXHddjLjS6N8l0gVx0jM7IPZZ8lxm62uA7jv2gVP0gnt0F00jLydw51o')
const uuid=require('uuid');
const upload=multer({dest:'uploads/'})

//to run the app on different port 
app.use(cors({
    origin:'http://localhost:3001'
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// to serve image as static and use it on frontend
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
connectDB();

//app.use('/api/goals', require('./routes/goalRoute'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/carts', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes') );

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));


// require('dotenv').config()
// // const express = require('express')
// // const mongoose = require('mongoose')
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Dummy data for demonstration
// const products = [
//   { id: 1, name: 'Product 1', price: 20 },
//   { id: 2, name: 'Product 2', price: 30 },
// ];

// const users = [
//   { id: 1, username: 'user1', email: 'user1@example.com' },
//   { id: 2, username: 'user2', email: 'user2@example.com' },
// ];

// const orders = [];

// // Routes

// // Home route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the E-commerce API' });
// });

// // Products routes
// app.get('/products', (req, res) => {
//   res.json({ products });
// });

// app.get('/products/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find((p) => p.id === productId);

//   if (product) {
//     res.json({ product });
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// // Users routes
// app.get('/users', (req, res) => {
//   res.json({ users });
// });

// app.get('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find((u) => u.id === userId);

//   if (user) {
//     res.json({ user });
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // Orders routes
// app.get('/orders', (req, res) => {
//   res.json({ orders });
// });

// app.post('/orders', (req, res) => {
//   const { userId, productIds } = req.body;

//   // Dummy logic for creating an order
//   const order = {
//     id: orders.length + 1,
//     userId,
//     products: products.filter((p) => productIds.includes(p.id)),
//   };

//   orders.push(order);

//   res.json({ order });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// // const express = require('express');
// // const app = express();


// // app.get('/', (req, res) => {
// //     res.send('Hello! Express!');
// // });

// // app.listen(process.env.PORT, () => {
// //     console.log(`Eunning on: ${process.env.PORT}`);
// // });


// //application.use(express.static('public'));

// // const dbURI = 'mongodb+srv://ranatayyab487:rana51214@cluster0.hyk7idg.mongodb.net/';

// // mongoose.connect(dbURI)
// //     .then((result) => console.log("DB Connected"))
// //     .catch((err) => console.log(err))

// // const name = 'Tayyab Hassan';

// // console.log(name);  

