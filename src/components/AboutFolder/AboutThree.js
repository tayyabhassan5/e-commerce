import FImage1 from "../../assets/Images/AboutPageImages/HowWork.png"

export const AboutThree = () => {
    const heading1 = "HOW WE WORKS";
    const item = [
        {
            id: 1,
            heading2: "Product Design",
            heading3: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis."        
        },
        {
            id: 2,
            heading2: "Crafted",
            heading3: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus."
            
        },
        {
            id: 3,
            heading2: "Sell Product",
            heading3: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi."           
        }
    ]
    return (
        <div className="lg:p-8" >

            <div className="grid lg:grid-cols-2 items-center justify-center bg-gray-100">

                <div className="flex items-center justify-center">
                    <img
                        src={FImage1}
                        className="h-full w-full"
                    />
                </div>


                <div className="flex flex-col p-4 bg-gray-100">
                    <div className="mx-8 text-xl mb-6">
                        {heading1}
                    </div>
                    {item.map((items) => (

                        <div key={items.id}>

                            <div className="mx-8 font-bold ">
                                {items.heading2}
                            </div>
                            <div className="mx-8">
                                {items.heading3}
                            </div>
                           
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
};
