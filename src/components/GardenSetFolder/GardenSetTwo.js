import FImage1 from "../../assets/Images/GardenSetImages/Image1.png";
import FImage2 from "../../assets/Images/GardenSetImages/Image2.png";
import FImage3 from "../../assets/Images/GardenSetImages/Image3.png";
import FImage4 from "../../assets/Images/GardenSetImages/holiday_fit.png";
import FImage5 from "../../assets/Images/GardenSetImages/brain_clark.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThumbsUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const GardenSetTwo = () => {
    const cardsData = [
        {
            id: 1,
            heading1: "How Can I Use Ceramic When I Decorate?",
            heading2: "Brain Clara -----   Jan-2024",
            heading3: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
            imagePath: FImage1,

        },
        {
            id: 2,
            heading1: "The secrets to a Living Room set?",
            heading2: "Brain Clara -----   Jan-2024",
            heading3: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis",
            imagePath: FImage2,
        },
        {
            id: 3,
            heading1: "How to Style a Beautiful House",
            heading2: "Brain Clara -----   Jan-2024",
            heading3: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus",
            imagePath: FImage3,
        },
        {
            id: 4,
            heading1: "The secrets to a Living Room set?",
            heading2: "Brain Clara -----   Jan-2024",
            heading3: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.",
            imagePath: FImage4,
        }
    ];

    const cardsData1 = [
        {
            id: 1,
            heading1: "What's in Garden Set",
            imagePath: FImage1,

        },
        {
            id: 2,
            heading1: "How can I use Ceramic When I Decorate",
          
            imagePath: FImage2,
        },
        {
            id: 2,
            heading1: "The secrets to a Living Room set?",          
            imagePath: FImage4,
        },
    ];

    const cardsData2 = [
        {
            id: 1,
            heading1: "DinnerWare (3)",
            imagePath: FImage1,

        },
        {
            id: 2,
            heading1: "Ceramic (5)",
          
            imagePath: FImage2,
        },
        {
            id: 3,
            heading1: "Furniture (3)",
          
            imagePath: FImage2,
        },
        {
            id: 4,
            heading1: "Decor Art (7)",
          
            imagePath: FImage2,
        },
        {
            id: 5,
            heading1: "Decor Art (7)",
          
            imagePath: FImage2,
        },
        {
            id: 6,
            heading1: "Decor Art (7)",
          
            imagePath: FImage2,
        }
    ];

     const cardsData3 = [
        {
            id: 1,
            heading1: "DinnerWare",
          
        },
        {
            id: 2,
            heading1: "Ceramic",         
            
        },
        {
            id: 2,
            heading1: "Ceramic",         
            
        },
        {
            id: 2,
            heading1: "Ceramic",         
            
        }
     ];

    return (
        <div className="sm:p-2 grid lg:grid-cols-3">

            <div className="sm:p-8 font-normal text-base">
                {cardsData.map((card) => (
                    <div key={card.id} className="text-left mb-8 ">
                        <img className="w-full" src={process.env.PUBLIC_URL + card.imagePath} alt={card.heading1} />
                        <div className="flex p-2">
                            <img src={FImage5} />
                            <div className="p-2">{card.heading2}</div>
                        </div>
                        <div className="font-bold p-2">{card.heading1}</div>
                        <div className="p-2"> {card.heading3}</div>
                    </div>
                ))}
            </div>

            <div className="sm:p-8 font-normal text-base">
                {cardsData.map((card) => (
                    <div key={card.id} className="text-left mb-8 ">
                        <img className="w-full" src={process.env.PUBLIC_URL + card.imagePath} alt={card.heading1} />
                        <div className="flex p-2">
                            <img src={FImage5} />
                            <div className="p-2">{card.heading2}</div>
                        </div>
                        <div className="font-bold p-2">{card.heading1}</div>
                        <div className="p-2"> {card.heading3}</div>
                    </div>
                ))}
            </div>
            <div className="sm:p-8 relative">
                <div className="relative mb-10">
                    <input
                        name="search"
                        className="w-full border p-2 pl-10"
                        placeholder="Search For Product"
                    />
                    <FontAwesomeIcon
                        className="absolute left-2 top-3 text-gray-500"
                        icon={faSearch}
                    />
                </div>
                <div className="font-bold text-2xl mb-10">POPULAR POSTS</div>

                <div className="font-normal text-base mb-10">
                    {cardsData1.map((card) => (
                        <div key={card.id} className="text-left mb-8 flex">
                            <img
                                className="h-50 w-20"  
                                src={process.env.PUBLIC_URL + card.imagePath}
                                alt={card.heading1}
                            />
                            <div className="p-2">{card.heading1}</div>
                        </div>
                    ))}
                </div>

                <div className="font-bold text-2xl mb-10">Categories</div>

                <div className="font-normal text-base mb-10">
                    {cardsData2.map((card) => (
                        <div key={card.id} className="text-left flex mb-3">
                            <div>{card.heading1}</div>
                        </div>
                    ))}
                </div>

                <div className="font-bold text-2xl mb-10">TAGS POST</div>
                <div className="font-normal text-base mb-10 flex flex-wrap">
                    {cardsData3.map((card) => (
                        <div key={card.id} className="text-left flex mb-3 mx-2">
                            <button className="border boder-1px-solid p-2">{card.heading1}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GardenSetTwo