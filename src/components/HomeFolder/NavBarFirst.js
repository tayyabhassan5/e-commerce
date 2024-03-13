import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThumbsUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBarFirst = () => {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navigationLink = ['Home', 'Shop', 'About', 'Contact'];

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="bg-gray-50 flex flex-col md:flex-row justify-between md:items-center p-2">
            <div className="flex items-center">
                <div className="text-black font-bold mb-2 md:mb-0">
                    MOON
                </div>

                <button
                    className="md:hidden text-black cursor-pointer ml-auto"
                    onClick={handleNavToggle}
                >
                    Menu
                </button>
            </div>

            <div className={`md:flex flex-col md:flex-row md:space-x-10 ${isNavOpen ? 'flex' : 'hidden'}`}>
                {navigationLink.map((link, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            navigate(`/${link.toLowerCase()}`);
                            setIsNavOpen(false);
                        }}
                        className="cursor-pointer mb-2 md:mb-0"
                    >
                        {link}
                    </div>
                ))}
            </div>

            <div className="hidden md:flex justify-around mt-4 mb-4 space-x-10">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon className="hover-pointer" icon={faThumbsUp} />
                <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faShoppingCart}
                    onClick={() => navigate('/about')}
                />
            </div>
        </nav>
    );
};
export default NavBarFirst