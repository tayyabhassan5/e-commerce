import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsPageComponent from '../../Common/CardsPageComponent'
import {useNavigate} from "react-router-dom";

const CardsPage2 = () => {
   
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
            <CardsPageComponent products={products}/>
        </div>
    );
};
export default CardsPage2