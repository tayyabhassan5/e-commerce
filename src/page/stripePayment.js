import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import {useSelector } from "react-redux"
import { computeHeadingLevel } from '@testing-library/react';

const StripePayment = ({price}) => {
    console.log("price",price)

    // const [product, setProduct] = useState({
    //     name: " E-commerce Website",
    //     price: price1,
    //     productBy: "MOON"
    // });
    // console.log("here in prodiucts");
    // console.log(product.price);


    const makePayment = token => {
        const product ={
                name: " E-commerce Website",
           price: price,
           productBy: "MOON"
        }
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
            amount={price}
        >
            <button className='p-2 w-full bg-black text-white'>Proceed to shipping</button>

        </StripeCheckout>

    );
};

export default StripePayment;
