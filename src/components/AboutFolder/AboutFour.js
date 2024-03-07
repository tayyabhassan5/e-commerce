import React from 'react';
import Marketing from "../../assets/Images/AboutPageImages/Marketing.png"
import CEO from "../../assets/Images/AboutPageImages/CEO.png"
import CreativeDirector from "../../assets/Images/AboutPageImages/CreativeDirector.png"
import Artist from "../../assets/Images/AboutPageImages/Artist.png"

export const AboutFour = () => {
    const items = [
        { name: 'Bernie PATTERSON',Design:'CEO & Founder', imageSrc: CEO },
        { name: 'OPHELIA VASE',Design:'Creative Director', imageSrc: CreativeDirector },
        { name: 'CORBIN HOSSAIN',Design:'Artist',imageSrc: Artist},
        { name: 'SEREN BOWL',Design:'Marketing', imageSrc: Marketing },
    ];

    return (
        <div className="p-8 flex lg:items-center lg:justify-center overflow-x-auto">
            {items.map((item, index) => (
                <div key={index} className="p-4 flex flex-col items-center justify-center ">
                    <img
                        src={process.env.PUBLIC_URL + item.imageSrc}
                        className="p-2 h-full w-full object-cover"
                    />
                    <div className="">{item.name}</div>
                    <div className=" text-gray-500">{item.Design}</div>
                </div>
            ))}
        </div>
    );
};
