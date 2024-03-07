import React from 'react';
import FImage1 from "../../assets/Images/HomePageImges/bowl.png"
import FImage2 from "../../assets/Images/HomePageImges/warrick.png"
import FImage3 from "../../assets/Images/HomePageImges/dinnerplate.png"
import FImage4 from "../../assets/Images/HomePageImges/vase.png"
import FImage5 from "../../assets/Images/HomePageImges/dinnerplate.png"
import FImage6 from "../../assets/Images/HomePageImges/handledvase.png"
import FImage7 from "../../assets/Images/HomePageImges/dinnerplate.png"
import FImage8 from "../../assets/Images/HomePageImges/vase.png"
import {useNavigate} from "react-router-dom"



export const CartTwo = () => {
    const navigate=useNavigate();
    const cardsData = [
        {
            id: 1,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: FImage1,
        },
        {
            id: 2,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: FImage2,
        },
        {
            id: 3,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: FImage3,
        },
        {
            id: 4,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: FImage4,
        }
        
    ];

    return (
        <div>
            <div className="text-xl font-bold ml-20">
                SIMILAR ITEMS
            </div>
            <div className="sm:p-20 font-normal text-base overflow-x">
                <div className="flex space-x-8">
                    {cardsData.map((card) => (
                        <div key={card.id} className="text-left ">
                       
                            <img className="w-full" src={process.env.PUBLIC_URL + card.imagePath} alt={card.heading1} />
                            <div>{card.heading1}</div>
                            <div className="font-bold">{card.heading2}</div>
                            <div>{card.heading3}</div>
                            <button className="mt-8 border border-black p-2 w-full" onClick={()=>navigate('/shop')}>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};