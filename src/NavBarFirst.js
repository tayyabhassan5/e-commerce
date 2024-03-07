import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThumbsUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export const NavBarFirst = () => {

    const navigationLink = [ 'Home', 'Shop', 'Page', 'About' ];

    return (
        <nav className="bg-gray-50 flex justify-around ">
            <div className="text-black font-bold mt-4 mb-4">
                MOON
            </div>
            <div className="text-black flex space-x-10 mt-4 mb-4">

                {navigationLink.map((link, index) => (
                    <div key={index}>{link}</div>
                ))}
            </div>

            <div className="flex justify-around mt-4 mb-4 space-x-10">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faShoppingCart} />

            </div>
        </nav>

    );
};
