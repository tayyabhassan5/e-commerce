import React from 'react';

export const VietnamPage = () => {
    const heading1 = "Made in Vietnam since 1450";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading3 = "Learn More";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 p-8 text-center">
            <div className="bg-gray-100 flex flex-col items-center justify-center">
                <div className="font-bold text-2xl">
                    {heading1}
                </div>
                <div>
                    {heading2}
                </div>
                <div className="underline mt-4">
                    {heading3}
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + '/Images/handsArt.png'} className="w-full" />
            <img src={process.env.PUBLIC_URL + '/Images/artOnPen.png'}  className="w-full" />
            <div className="bg-gray-100 flex flex-col items-center justify-center ">
                <div className="font-bold text-2xl">
                    Our History
                </div>
                <div>
                    {heading2}
                </div>
                <div className="underline mt-4">
                    {heading3}
                </div>
            </div>
        </div>
    );
};
