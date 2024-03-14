import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';

const StripePayment = () => {
    const [product, setProduct] = useState({
        name: " E-commerce Website",
        price: 10,
        productBy: "MOON"
    });

    const makePayment = token => {
        const body = {
            token,
            product
        };

        return axios.post('http://localhost:3000/api/payments/stripe', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log('Response', response);
            const { status } = response;
            console.log('Status', status);
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    return (

        <StripeCheckout
            stripeKey="pk_test_51OltXJSByPnkUP3uDB3w7V5yaraD84Klk0QplANiKuLXHddjLjS6N8l0gVx0jM7IPZZ8lxm62uA7jv2gVP0gnt0F00jLydw51o"
            token={makePayment}
            name="Buying Products"
            amount={product.price * 100}
        >
            <button className='p-2 w-full bg-black text-white'>Proceed to shipping</button>

        </StripeCheckout>

    );
};

export default StripePayment;
