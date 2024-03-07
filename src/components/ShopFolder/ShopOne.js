import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopOne = () => {
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(true);


    const heading1 = "Showing Items";
    const heading2 = "Category";
    const heading3 = "Price Range";
    const heading4 = "Tags";
    const heading5 = "Color";

    const checkboxData = [
        { id: 1, label: 'Dinnerware' },
        { id: 2, label: 'Ceramic' },
        { id: 3, label: 'Furniture' },
        { id: 4, label: 'Decor Art' },
        { id: 5, label: 'GiftSets' }
    ];

    const checkboxData1 = [
        { id: 1, label: '$1-$10' },
        { id: 2, label: '$10-$20' },
        { id: 3, label: '$20-$30' },
        { id: 4, label: '$40-$50' }
    ];

    const checkboxData2 = [
        { id: 1, color: 'bg-blue-100' },
        { id: 2, color: 'bg-green-100' },
        { id: 3, color: 'bg-yellow-100' },
        { id: 4, color: 'bg-purple-100' },
        { id: 5, color: 'bg-pink-100' }
    ];

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
        // products.forEach((product) => {
        //     console.log('Product Heading:', product.productHeading);
        //     console.log('Product Description:', product.productDesc);
        // });

    }, []);



    return (
        <div className="lg:mx-20 grid lg:grid-cols-3">
            <div className="flex flex-col">
                {/* Navigation Links */}
                <div className="flex items-center space-x-2 mb-10 ">
                    <a href="/" className="hover:underline">Home</a>
                    <span className="text-gray-500">/</span>
                    <a href="/shop" className="hover:underline">Shop</a>
                </div>

                {/* Filter Button for Mobile */}
                <button
                    className="text-black mb-4 block lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>

                {/* Filter Options */}
                {showFilters && (
                    <div>
                        <div className="mb-10 font-medium">{heading1}</div>

                        <div>
                            <div className="font-bold border-t">{heading2}</div>
                            {checkboxData.map((checkbox) => (
                                <div key={checkbox.id} className="flex items-center mb-4">
                                    <input
                                        id={`checkbox-${checkbox.id}`}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`checkbox-${checkbox.id}`}
                                        className="ms-2 text-sm text-gray-900 dark:text-gray-300"
                                    >
                                        {checkbox.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="font-bold border-t">{heading3}</div>
                            {checkboxData1.map((checkbox) => (
                                <div key={checkbox.id} className="flex items-center mb-4">
                                    <input
                                        id={`checkbox-${checkbox.id}`}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`checkbox-${checkbox.id}`}
                                        className="ms-2 text-sm text-gray-900 dark:text-gray-300"
                                    >
                                        {checkbox.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="font-bold border-t">{heading5}</div>
                            <div className="flex items-center">
                                {checkboxData2.map((checkbox) => (
                                    <div key={checkbox.id} className="p-2 flex items-center mb-4">
                                        <input
                                            id={`checkbox-${checkbox.id}`}
                                            type="checkbox"
                                            value=""
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor={`checkbox-${checkbox.id}`}
                                            className={`w-4 h-4 border ${checkbox.color} rounded cursor-pointer flex items-center justify-center`}
                                        >
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="font-bold border-t">{heading4}</div>
                            {checkboxData.map((checkbox) => (
                                <div key={checkbox.id} className="flex items-center mb-4">
                                    <input
                                        id={`checkbox-${checkbox.id}`}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`checkbox-${checkbox.id}`}
                                        className="ms-2 text-sm text-gray-900 dark:text-gray-300"
                                    >
                                        {checkbox.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="sm:p-20 font-normal text-base grid sm:grid-cols-4 col-span-2 flex-wrap grid-cols-2 gap-8">
                {products.map((product) => (
                    <div key={product._id} className="text-left">
                        <img src={`http://localhost:3000/uploads/${product.filename[0]}`} alt={product.heading} />
                        <div>{product.productHeading}</div>
                        <div className="font-bold">{product.productPrice}</div>
                        <div>{product.productDesc}</div>
                        <button className="mt-8 border border-black p-2 w-full mb-4" onClick={() => {
                            console.log('Product ID:', product._id);
                            console.log('Product Description:', product.productHeading);
                            navigate('/cart', {state:{ productID: product._id, productHeading: product.productHeading }})
                        }}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>


    );
};
