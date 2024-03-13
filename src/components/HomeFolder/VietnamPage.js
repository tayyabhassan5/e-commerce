import React from 'react';
import FImage1 from "../../assets/Images/HomePageImges/handsArt.png"
import FImage2 from "../../assets/Images/HomePageImges/artOnPen.png"
import { useNavigate } from "react-router-dom";

const VietnamPage = () => {
    const navigate=useNavigate();
    
    const heading1 = "Made in Vietnam since 1450";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading3 = "Learn More";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 lg:p-8 text-center">
            <div className="bg-gray-100 flex flex-col items-center justify-center">
                <div className="font-bold text-2xl">
                    {heading1}
                </div>
                <div className="overflow-hidden">
                    {heading2}
                </div>
                <div className="cursor-pointer underline mt-4" onClick={()=>navigate('/about')}>
                    {heading3}
                </div>
            </div>
            <img src={FImage1} className="w-full" />
            <img src={FImage2}  className="w-full" />
            <div className="bg-gray-100 flex flex-col items-center justify-center ">
                <div className="font-bold text-2xl">
                    Our History
                </div>
                <div>
                    {heading2}
                </div>
                <div className="cursor-pointer underline mt-4" onClick={()=>navigate('/about')}>
                    {heading3}
                </div>
            </div>
        </div>
    );
};
export default VietnamPage
