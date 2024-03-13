import React from 'react';
import FImage1 from "../../assets/Images/CheckOutImages/visa.png"
import FImage2 from "../../assets/Images/CheckOutImages/paypal.png"
import {useLocation} from 'react-router-dom'


const ShoppingOne = () => {
    const location = useLocation();
    const { cartItems,totalSubtotal} = location.state || {};
    console.log(cartItems);
    console.log(totalSubtotal);

    const item = [
        {
            id: 1,
            placeholder: "Samatha",
            Value: 'First Name'
        },
        {
            id: 2,
            placeholder: "Clarken",
            Value: 'LastName'
        },
        {
            id: 3,
            placeholder: "Moon",
            Value: 'Comany '
        },
        {
            id: 4,
            placeholder: "United States",
            Value: 'Country/Region'
        },
        {
            id: 5,
            placeholder: "Address",
            Value: 'Street Address'
        },
        {
            id: 6,
            placeholder: "City",
            Value: 'Town/City'
        },
        {
            id: 7,
            placeholder: "State",
            Value: 'Sate'
        },
        {
            id: 8,
            placeholder: "Zip Code",
            Value: 'Zip Code'
        },
        {
            id: 9,
            placeholder: "Phone",
            Value: '(123) 456 789'
        },
        {
            id: 10,
            placeholder: "example@yourexample.com",
            Value: 'Email'
        },
        {
            id: 11,
            placeholder: "Type Your Message Here",
            Value: 'Order Notes'
        }
    ];        

    const item2 = [
        {
            id: 1,
            placeholder: 'Card Number',
        },
        {
            id: 2,
            placeholder: 'Name on Card',
        },
        {
            id: 3,
            placeholder: 'Expeiration Code',
        },
        {
            id: 4,
            placeholder: 'Security Code',
        },
    ]

    return (
        <div className="lg:mx-20 sm:mx-20 overflow-hidden">
            <div>
                <div className="flex items-center space-x-2 mb-10">
                    <a href="/" className="hover:underline">Home</a>
                    <span className="text-gray-500">/</span>
                    <a href="/shop" className="hover:underline">Shop</a>
                </div>
                <div className="text-xl font-bold">Billing Details</div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid sm:grid-cols-2 gap-2">

                        {item.map((item) => (
                            <div key={item.id} className={item.Value === 'Street Address' || item.Value === 'Email' || item.Value === 'Order Notes' ? 'col-span-2' : ''}>
                                <div>{item.Value}</div>
                                {item.Value === 'Order Notes' ? (
                                    <textarea className="w-full border 1px solid p-2 h-32" placeholder={item.placeholder}></textarea>
                                ) : (
                                    <input className="w-full border 1px solid p-2" type="text" placeholder={item.placeholder} />
                                )}
                            </div>
                        ))}

                        <button className="p-2"> Move Previous</button>
                        <button className="bg-black text-white border 1px solid p-2">Continue Shopping</button>
                    </div>

                    <div className="sm:ml-20">
                        <div className="flex font-medium mb-4 border-b">
                            <div>Product </div>
                            <div className="ml-auto">SubTotal </div>
                        </div>


                        {cartItems.map((item) => (
                            <div key={item.id} className={`flex ${item.heading1 === 'Shipping' || item.heading1 === 'SubTotal' ? 'font-medium mt-2' : ''}`}>
                                <div>{item.productHeading} </div>
                                <div className="ml-auto ">{item.subtotal} </div>
                            </div>

                        ))}

                        <div className="flex font-medium mb-4 mt-8 border-t">
                            <div>Total </div>
                            <div className="ml-auto ">{totalSubtotal}</div>
                        </div>

                        <div className="w-full bg-gray-900">
                            <div className='p-8'>
                                <div className='text-white font-bold'>Payment</div>
                                <div className="flex">
                                <div className='text-white'>Credit Card</div>
                                    <img className="ml-auto" src={FImage1} />
                                    <img src={FImage2} />
                                </div>

                            </div>

                            <div className='p-2 grid grid-cols-2 border-t border-b border-white'>

                                {item2.map((item) => (
                                    <div key={item.id} className={item.placeholder === 'Card Number' || item.placeholder === 'Name on Card' ? 'col-span-2 p-2' : 'p-2'}>
                                        <input className="w-full border 1px solid bg-gray-900 p-2 placeholder-white" type="text" placeholder={item.placeholder} />
                                    </div>
                                ))}
                            </div>
                            <div className="p-2">
                                <button className="mt-4 border p-2 1-px solid border-white w-full text-white">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShoppingOne