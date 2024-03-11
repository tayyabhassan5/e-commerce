import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/count'
import axios from 'axios';
import { persistor, store } from '../../redux/configurestore';
import FImage1 from "../../assets/Images/HomePageImges/dinnerplate.png";
import FImage2 from "../../assets/Images/HomePageImges/Remove.png";
import FImage3 from "../../assets/Images/HomePageImges/Close.png";


export const SecondLastShoppingOne = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const location = useLocation();
    // const { productHeading, quantity, price } = location.state || {};
    // console.log(productHeading);
    // console.log(quantity);
    // console.log(price);
    const cartItems = useSelector(state => state.cart.items);
    console.log("Hi, I am before redux");
    console.log(cartItems);
    
    console.log(cartItems[0].productHeading);
    console.log(cartItems[0].productFilename);

    console.log("Hi, I am after redux");

    //const [dataFromBackend, setDataFromBackend] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/carts/Handler')
    //         .then((response) => {
    //             // Checking response structu
    //             if (response.data && Array.isArray(response.data.cartDetails)) {
    //                 console.log(response.data.cartDetails);
    //                 setDataFromBackend(response.data.cartDetails);
    //             } else {
    //                 console.error('Invalid response structure. Expected an object with a cartDetails property containing an array.');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    const calculateSubtotal = (item) => {
        //console.log(dataFromBackend);
        return item.productPrice * item.productQuantity;
        
    };

    const totalSubtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

    const handleDeleteItem = (item) => {
       console.log('BeforeDeletion',cartItems)
        dispatch(removeFromCart({ productID: item.productID }));
        console.log('After deletion:', cartItems);
        
      };

    // const handleDeleteItem = async (item) => {
    //     dispatch(deleteItem({ productHeading: item.productHeading }));
    //     try {
    //         console.log(item.productHeading);
    //         const response = await axios.post('http://localhost:3000/api/carts/deleteitem', null, {
    //             params: {
    //                 productHeading: item.productHeading,
    //             },
    //         });

    //         if (response.status === 200) {
    //             console.log('Delete successful:', response.data);
            
    //             setDataFromBackend((prevData) => prevData.filter((prevItem) => prevItem.productHeading !== item.productHeading));
    //         } else {
    //             console.error('Failed to delete:', response.statusText);
    //         }

    //     } catch (error) {
    //         console.error('Error deleting purchase:', error);
    //     }
    // };

    return (
        <div className="sm:mx-20">
            <div className="flex items-center space-x-2 mb-10 ">
                <a href="/" className="hover:underline">Home</a>
                <span className="text-gray-500">/</span>
                <a href="/category" className="hover:underline">Shopping Cart</a>
            </div>
            <div className="mb-8 font-bold text-xl">Cart Items</div>
            <div className="mb-8 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-black ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <img src={FImage2} alt="Remove" />
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Photo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SubTotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 cursor-pointer py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img src={FImage3} alt="Close" 
                                     onClick={() => handleDeleteItem(item)} />                      
                                        
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className='w-auto h-20' src={`http://localhost:3000/uploads/${item.productFilename}`} alt={item.productHeading} />
                                </td>
                                <td className="px-6 py-4">{item.productHeading}</td>
                                <td className="px-6 py-4">{item.productPrice}</td>
                                <td className="px-6 py-4">{item.productQuantity}</td>
                                <td className="px-6 py-4">{calculateSubtotal(item)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid lg:grid-cols-3">
                <input className="border 1px solid p-2" placeholder='Coupon Code' />
                <button className="border 1px solid p-2 bg-black text-white lg:ml-2">Apply Coupon</button>
                <button className="border 1px solid sm:w-full p-2 bg-black text-white ml-auto" onClick={() => (navigate('/shop'))}>Update Cart</button>
            </div>

            <div className="grid lg:grid-cols-2 mt-8">
                <div className="lg:col-start-2">
                    <div className="bg-black">
                        <div className="p-8 text-white font-medium">Cart Totals</div>

                        <div className="flex">
                            <div className="p-8 text-white font-medium">SubTotal</div>
                            <div className="p-8 text-white font-medium ml-auto">${totalSubtotal}</div>
                        </div>

                        <div className="sm:p-8 ">
                            <button className="border p-2 1px solid grid col-span-2 text-white border-white" onClick={() => navigate('/lastshop', {
                                state: {
                                    cartItems: cartItems.map(item => ({
                                      productHeading: item.productHeading,
                                      subtotal: calculateSubtotal(item),
                                    })),
                                    totalSubtotal: totalSubtotal, 
                                  },
                            })}>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
