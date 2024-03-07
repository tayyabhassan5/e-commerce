import React from 'react';

export const ThirdOne = () => {
    const items = [
        { name: 'TABLEWARE', imageSrc: '/Images/tableware.png' },
        { name: 'HOMEDECOR', imageSrc: '/Images/homedecor.png' },
        { name: 'HOLIDAY', imageSrc: '/Images/holiday.png' },
        { name: 'COLLECTION', imageSrc: '/Images/collection.png' },
    ];

    return (
        <div className="p-8 flex items-center justify-center">
            {items.map((item, index) => (
                <div key={index} className="p-4 flex flex-col items-center justify-center font-bold">
                    <img
                        src={process.env.PUBLIC_URL + item.imageSrc}
                        className="p-2"
                    />
                    <div className="p-2">{item.name}</div>
                </div>
            ))}
        </div>
    );
};
