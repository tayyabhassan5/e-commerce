import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/count'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import heart from '../../assets/Images/CartImages/Heart.png';
import heart1 from '../../assets/Images/CartImages/Facebook.png';
import heart2 from '../../assets/Images/CartImages/Instagram.png';
import heart3 from '../../assets/Images/CartImages/Twitter.png';
import heart4 from '../../assets/Images/CartImages/LinkedIn.png';
import { useQuery } from "react-query";


const fetchProducts = async (productID) => {
    const response = await axios.get(`http://localhost:3000/api/products/getProducts1?productID=${productID}`);
    return response.data;
}

const CartOne = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productID } = useParams();
    console.log(productID);

    const {
        data: products,
        error,
        isLoading,
    } = useQuery(["specificProductData", productID], ()=>fetchProducts(productID));

    //const cartItems = useSelector(state => state.cart.items);
    // console.log("Hi, I am before redux");
    // console.log(cartItems);
    // console.log(cartItems[0].productHeading);
    // console.log(cartItems[0].productFilename);

    // console.log("Hi, I am after redux");
    const handleAddToCart = (product) => {

        dispatch(addToCart({
            productID: product._id,
            productHeading: product.productHeading,
            productDesc: product.productDesc,
            productPrice: product.productPrice,
            productQuantity: quantity,
            // productReview:product.productReview,
            // productDetail:product.productDetail,
            productPrice: product.productPrice,
            productFilename: product.filename[0],

        }));
        // console.log(product.filename[0])
        // console.log(product.productDesc)
        // console.log(product);

        //navigate('/cart', { state: { productID: product._id, productHeading: product.productHeading } });
    }

    const location = useLocation();

    // Accessing
    //const { productID, productHeading } = location.state || {};
    //console.log(productID);
    //console.log(productHeading);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // const [products, setProducts] = useState();
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/products/getProducts1?productID=${productID}`);
    //             setProducts(response.data);
    //             //console.log(products.productHeading);
    //         } catch (error) {
    //             console.error('Error the data os product:', error);
    //         }
    //     };

    //     fetchProducts();

    // }, [productID]);

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

    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

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
                            onClick={() => handleAddToCart(products)}
                        >
                            Add To Cart</button>
                    </div>

                    <div className="mt-2 flex">
                        <button className="border border-2px-solid flex-grow"
                            onClick={() => {
                                handleAddToCart(products)
                                navigate('/secondcart')
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

export default CartOne