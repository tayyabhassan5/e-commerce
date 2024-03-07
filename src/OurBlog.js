export const OurBlog = () => {
    const heading1 = "TABLEWARE";
    const heading2 = "The secret to a Kitechen Room";
    const heading3 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.";
    const heading4 = "Read More";

    return (
        <div >
            <div className="p-8 text-center font-bold"> OUR BLOG</div>
            <div className="grid grid-cols-2 mx-40 items-center justify-center bg-gray-100">


                <div className="flex flex-col items-center justify-center p-4">
                    <div className="mx-20 text-center text-gray-500">
                        {heading1}
                    </div>
                    <div className="mx-20 text-center font-bold text-2xl">
                        {heading2}
                    </div>
                    <div className="mx-8 text-center p-4">
                        {heading3}
                    </div>
                    <div className=" mx-20 text-center p-4 underline">
                        {heading4}
                    </div>
                </div>


                <div className="flex items-center justify-center">
                    <img
                        src={process.env.PUBLIC_URL + '/Images/blogpageplate.png'}
                        className="h-full w-auto"
                    />
                </div>
            </div>
        </div>
    );
};
