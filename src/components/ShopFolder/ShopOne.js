import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/count'
import axios from 'axios';

export const ShopOne = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const quantity=1;

    const handleAddToCart = (product) => {

        dispatch(addToCart({
            productID: product._id,
            productHeading: product.productHeading,
            productDesc: product.productDesc,
            productPrice: product.productPrice,
            // productReview:product.productReview,
            // productDetail:product.productDetail,
            productPrice: product.productPrice,
            productFilename: product.filename[0],

        }));
        console.log(product.filename[0])
        console.log(product.productDesc)
        console.log(product);

        //navigate('/cart', { state: { productID: product._id, productHeading: product.productHeading } });
    }

    
    const handleAddToCart1 = (product) => {

        dispatch(addToCart({
            productID: product._id,
            productHeading: product.productHeading,
            productDesc: product.productDesc,
            productPrice: product.productPrice,
            productQuantity:quantity,
            // productReview:product.productReview,
            // productDetail:product.productDetail,
            productPrice: product.productPrice,
            productFilename: product.filename[0],

        }));
        
        console.log(product.filename[0])
        console.log(product.productDesc)
        console.log(product);

        navigate(`/product/${product._id}`, { state: { productID: product._id, productHeading: product.productHeading } });
    }

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

        products.forEach((product) => {
            // console.log("In use Effect");
            // console.log(products);
            // console.log('Product Heading:', product.productHeading);
            // console.log('Product Description:', product.productDesc);
        });

    }, []);

    return (
        <div className="lg:mx-20 grid lg:grid-cols-3">

            <div className="sm:p-20 font-normal text-base grid sm:grid-cols-4 col-span-2 flex-wrap grid-cols-2 gap-8">
                {products.map((product) => (
                    <div key={product._id} className="text-left">
                        <img className="cursor-pointer" src={`http://localhost:3000/uploads/${product.filename[0]}`}onClick={()=>{handleAddToCart1(product)}} alt={product.heading} />
                        <div>{product.productHeading}</div>
                        <div className="font-bold">{product.productPrice}</div>
                        <div>{product.productDesc}</div>
                        <button className="mt-8 border border-black p-2 w-full mb-4" onClick={() => {
                            // console.log('Product ID:', product._id);
                            //console.log('Product Description:', product.productHeading);
                            handleAddToCart(product)
                            alert("added to cart");

                        }}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>


    );
};
