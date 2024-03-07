import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useNavigate} from "react-router-dom";

export const CardsPage2 = () => {
    const navigate=useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products/getProducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



    return (
        <div className="flex flex-col font-bold p-8 items-center justify-center">
            Discover New Arrival
            <div className="sm:p-20 font-normal text-base grid sm:grid-cols-4 grid-cols-2 gap-8">
                {products.map((product) => (
                    <div key={product._id} className="text-left">
                        <img
                            src={`http://localhost:3000/uploads/${product.filename[0]}`}
                            alt={product.productHeading}
                        />
                        <div className='font-bold'>{product.productHeading}</div>
                        <div className="font-bold">${product.productPrice}</div>
                        <div>{product.productDesc}</div>
                        <button className="mt-8 border border-black p-2 w-full" onClick={()=>navigate('/Shop')}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};