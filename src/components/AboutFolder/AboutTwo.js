import React from 'react';
import FImage1 from "../../assets/Images/AboutPageImages/1910.png"
import FImage2 from "../../assets/Images/AboutPageImages/1990.png";
import FImage3 from "../../assets/Images/AboutPageImages/2010.png";

export const AboutTwo = () => {
    
    const heading1 = "1910";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading3 ="1990";
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-1 lg:p-8 text-center">
            <div className="bg-gray-100 flex flex-col p-8 items-center justify-center ">
                <div className="font-bold text-2xl">
                    {heading1}
                </div>
                <div className="overflow-hidden p-6">
                    {heading2}
                </div>
            </div>
            <img src={FImage1} className="w-full " alt="1910 Image" />
            <img src={FImage2} className="w-full " alt="1990 Image" />
            <div className="bg-gray-100 flex flex-col p-8 items-center justify-center ">
                <div className="font-bold text-2xl">
                    {heading3}
                </div>
                <div className="overflow-hidden p-6">
                    {heading2}
                </div>
            </div>

            <div className="bg-gray-100 flex flex-col p-8 items-center justify-center ">
                <div className="font-bold text-2xl">
                    2010
                </div>
                <div className="overflow-hidden p-6">
                    {heading2}
                </div>
            </div>
            <img src={FImage3} className="w-full " alt="2010 Image" />
        </div>
    );
};
