import React from 'react';
import TableWare from "../../assets/Images/HomePageImges/tableware.png"
import HomeDecor from "../../assets/Images/HomePageImges/homedecor.png"
import Holiday from "../../assets/Images/HomePageImges/holiday.png"
import Collection from "../../assets/Images/HomePageImges/collection.png"

export const ThirdOne = () => {
    const items = [
        { name: 'TABLEWARE', imageSrc: TableWare },
        { name: 'HOMEDECOR', imageSrc: HomeDecor },
        { name: 'HOLIDAY', imageSrc: Holiday },
        { name: 'COLLECTION', imageSrc: Collection },
    ];

    return (
        <div className="p-8 flex lg:items-center lg:justify-center overflow-x-auto">
            {items.map((item, index) => (
                <div key={index} className="p-4 flex flex-col items-center justify-center font-bold">
                    <img
                        src={process.env.PUBLIC_URL + item.imageSrc}
                        className="p-2 h-full w-full object-cover"
                    />
                    <div className="p-2">{item.name}</div>
                </div>
            ))}
        </div>
    );
};
