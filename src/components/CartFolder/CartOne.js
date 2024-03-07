import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import heart from '../../assets/Images/CartImages/Heart.png';
import heart1 from '../../assets/Images/CartImages/Facebook.png';
import heart2 from '../../assets/Images/CartImages/Instagram.png';
import heart3 from '../../assets/Images/CartImages/Twitter.png';
import heart4 from '../../assets/Images/CartImages/LinkedIn.png';


export const CartOne = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Accessing
    const { productID, productHeading } = location.state || {};
    console.log(productID);
    console.log(productHeading);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [products, setProducts] = useState();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/getProducts1?productID=${productID}`);
                setProducts(response.data);
                //console.log(products.productHeading);
            } catch (error) {
                console.error('Error the data os product:', error);
            }
        };

        fetchProducts();
    }, [productID]);

    const [showDetails, setShowDetails] = useState(false);
    const [showDimensions, setShowDimensions] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const toggleSection = (section) => {
        switch (section) {
            case 'details':
                setShowDetails(!showDetails);
                break;
            case 'dimensions':
                setShowDimensions(!showDimensions);
                break;
            case 'reviews':
                setShowReviews(!showReviews);
                break;
            default:
                break;
        }
    };

    const SectionHeader = ({ section, label }) => (
        <div className="border-t-2 mt-2 mb-2 text-xl flex items-center">
            <div onClick={() => toggleSection(section)}>{label}</div>
            <button onClick={() => toggleSection(section)} className="mr-2 ml-auto">
                +
            </button>
        </div>
    );

    const heading3 = 'Stock: In Stock';
    const heading5 = 'Share This:';
    const Images2 = [
        {
            id: 1,
            imgSrc: heart1,
        },
        {
            id: 2,
            imgSrc: heart2,
        },
        {
            id: 3,
            imgSrc: heart3,
        },
        {
            id: 4,
            imgSrc: heart4,
        },
    ];
    const Images1 = [
        {
            id: 1,
            imgSrc: FaStar,
        },
        {
            id: 2,
            imgSrc: FaStar,
        },
        {
            id: 3,
            imgSrc: FaStar,
        },
        {
            id: 4,
            imgSrc: FaStar,
        },
    ];

    return (
        <div>
            <div className="sm:mx-20 flex items-center space-x-2 mb-10 ">
                <a href="/" className="hover:underline">
                    Home
                </a>
                <span className="text-gray-500">/</span>
                <a href="/Shop" className="hover:underline">
                    Shop
                </a>
                <span className="text-gray-500">/</span>
                <a href="/category" className="hover:underline">
                    {products?.productHeading}
                </a>
            </div>

            <div className="sm:p-20 grid sm:grid-cols-2 gap-10">
                <div>
                    <img className="w-full" src={`http://localhost:3000/uploads/${products?.filename[0]}`} />
                    <div className="sm:p-4 flex">
                        {products?.filename.map((image, index) => (
                            <div className={`p-1 w-full sm:w-1/4 ${index === 0 ? 'big-image' : ''}`} key={index}>
                                <img src={`http://localhost:3000/uploads/${image}`} alt={`Product ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="font-medium">{products?.productHeading}</div>
                    <div className="flex items-center space-x-1">
                        {Images1.map((image, index) => (
                            <div className="p-1" key={index}>
                                <FaStar />
                            </div>
                        ))}
                        <div>{products?.productReview}(Reviews)</div>
                        <div className="sm:ml-20">{heading3}</div>
                    </div>
                    <div className="text-xl">${products?.productPrice}</div>
                    <div className="flex">
                        {products?.productColor.map((color, index) => (
                            <div key={index} className="flex items-center p-2">
                                <input id={`checkbox-${index}`} type="checkbox" value="" className="hidden" />
                                <label
                                    htmlFor={`checkbox-${index}`}
                                    className={`w-8 h-8 border ${color} rounded cursor-pointer flex items-center justify-center`}
                                ></label>
                            </div>
                        ))}
                    </div>

                    <div className="flex">
                        <div className="border border-2px-solid flex items-center p-2 ">
                            <button onClick={handleDecrement} className="mr-4">
                                -
                            </button>
                            <span className="mr-4 mx-2">{quantity}</span>
                            <button onClick={handleIncrement} >
                                +
                            </button>
                        </div>
                        <button className=" sm:ml-4 bg-black w-full text-white"
                            onClick={async () => {

                                try {
                                    const response = await axios.post('http://localhost:3000/api/carts', null, {
                                        params: {
                                            productHeading: products?.productHeading,
                                            quantity: quantity,
                                        },
                                    });

                                    if (response.status === 200) {
                                        console.log('Purchase successful:', response.data);
                                    } else {
                                        console.error('Failed to make the purchase:', response.statusText);
                                    }

                                    navigate('/secondcart');
                                } catch (error) {
                                    console.error('Error making purchase:', error);
                                }
                            }}>
                            Add To Cart</button>
                    </div>

                    <div className="mt-2 flex">
                        <button className="border border-2px-solid flex-grow"
                            onClick={async () => {

                                try {
                                    const response = await axios.post('http://localhost:3000/api/carts', null, {
                                        params: {
                                            productHeading: products?.productHeading,
                                            quantity: quantity,
                                        },
                                    });

                                    if (response.status === 200) {
                                        console.log('Purchase successful:', response.data);
                                    } else {
                                        console.error('Failed to make the purchase:', response.statusText);
                                    }

                                    navigate('/secondcart');
                                } catch (error) {
                                    console.error('Error making purchase:', error);
                                }
                            }}>
                            Buy Now
                        </button>
                        <img src={heart} className="ml-2" alt="Heart Icon" />
                    </div>

                    <div className="lg:mt-20">
                        <div>{heading5}</div>
                        <div className="flex">
                            {Images2.map((image, index) => (
                                <div className="p-1 " key={index}>
                                    <img src={process.env.PUBLIC_URL + image.imgSrc} alt={`Social Icon ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20">
                        <SectionHeader section="details" label="Details" />
                        {showDetails && <div className="mt-2 mb-2 text-xl">{products?.productDesc}</div>}

                        <SectionHeader section="dimensions" label="Dimensions" />
                        {showDimensions && <div className="mt-2 mb-2 text-xl">{products?.productDesc}</div>}

                        <SectionHeader section="reviews" label="Reviews" />
                        {showReviews && <div className="mt-2 mb-2 text-xl">{products?.productDetail}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
