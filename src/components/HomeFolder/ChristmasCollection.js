import FImage from "../../assets/Images/HomePageImges/christmas_collection.png"
import { useNavigate } from "react-router-dom";

export const ChristmasCollection = () => {
    const navigate=useNavigate();
    const heading1 = "UP TO 40% OF OUR CHRISTMAS COLLECTION";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading3 = "SHOP NOW";

    return (
        <div className="grid lg:grid-cols-2 lg:mx-40 items-center justify-center bg-gray-100">
            
            <div className="flex flex-col items-center justify-center lg:p-4 bg-gray-100">
                <div className="mx-20 text-center font-bold text-2xl">
                    {heading1}
                </div>
                <div className="mx-8 text-center p-4">
                    {heading2}
                </div>
                <div className="cursor-pointer mx-20 text-center p-4 underline" onClick={()=>navigate('/shop')}>
                    {heading3}
                </div>
            </div>

           
            <div className="flex items-center justify-center">
                <img
                    src={FImage}
                    className="h-full w-full"
                />
            </div>
        </div>
    );
};
