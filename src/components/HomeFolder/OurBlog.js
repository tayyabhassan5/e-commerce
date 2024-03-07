import FImage1 from "../../assets/Images/HomePageImges/blogpageplate.png"
import {useNavigate} from "react-router-dom"

export const OurBlog = () => {
    const navigate=useNavigate();
    const heading1 = "TABLEWARE";
    const heading2 = "The secret to a Kitechen Room";
    const heading3 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading4 = "Read More";

    return (
        <div >
            <div className="lg:p-8 text-center font-bold "> OUR BLOG</div>
            <div className="grid lg:grid-cols-2 lg:mx-40 items-center justify-center bg-gray-100">


                <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
                    <div className="mx-20 text-center text-gray-500">
                        {heading1}
                    </div>
                    <div className="mx-20 text-center font-bold text-2xl">
                        {heading2}
                    </div>
                    <div className="mx-8 text-center p-4">
                        {heading3}
                    </div>
                    <div className="cursor-pointer mx-20 text-center p-4 underline" onClick={()=>navigate('/about')}>
                        {heading4}
                    </div>
                </div>


                <div className="flex items-center justify-center">
                    <img
                        src={FImage1}
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
};
