import FImage1 from '../../assets/Images/GardenSetImages/VaseCenterImage.png'


export const GardenSetOne = () => {
    const heading1 = "What’s in a Garden set?";
    const heading2 = "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit ";
    

    return (
        <div >
            <div className="grid lg:grid-cols-2 items-center justify-center bg-gray-100">

            <div className="flex items-center justify-center">
                    <img
                        src={FImage1}
                        className="h-full w-full"
                    />
                </div>


                <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
                    <div className="mx-20 text-center font-bold text-2xl">
                        {heading1}
                    </div>
                    <div className=" p-4 mx-20 text-center ">
                        {heading2}
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};
