export const ChristmasCollection = () => {
    const heading1 = "UP TO 40% OF OUR CHRISTMAS COLLECTION";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading3 = "SHOP NOW";

    return (
        <div className="grid grid-cols-2 mx-40 items-center justify-center bg-gray-100">
            {/* Left column */}
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mx-20 text-center font-bold text-2xl">
                    {heading1}
                </div>
                <div className="mx-8 text-center p-4">
                    {heading2}
                </div>
                <div className=" mx-20 text-center p-4 underline">
                    {heading3}
                </div>
            </div>

            {/* Right column */}
            <div className="flex items-center justify-center">
                <img
                    src={process.env.PUBLIC_URL + '/Images/christmas_collection.png'}
                    className="h-full w-auto"
                />
            </div>
        </div>
    );
};
