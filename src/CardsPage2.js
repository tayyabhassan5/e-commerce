export const CardsPage2 = () => {
    const cardsData = [
        {
            id: 1,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: '/Images/bowl.png',
        },
        {
            id: 2,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: '/Images/warrick.png',
        },
        {
            id: 3,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: '/Images/dinnerplate.png',
        },
        {
            id: 4,
            heading1: "Small ecru ceramic compote",
            heading2: "49$",
            heading3: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
            imagePath: '/Images/vase.png',
        }

    ];


    return (
        <div className="flex flex-col font-bold p-8 items-center justify-center ">
            DISCOVER NEW ARRIVALS
            <div className="sm:p-20 font-normal text-base grid sm:grid-cols-4 grid-cols-2 gap-8">
                {cardsData.map((card) => (
                    <div key={card.id} className="text-left">
                        <img src={process.env.PUBLIC_URL + card.imagePath} alt={card.heading1} />
                        <div>{card.heading1}</div>
                        <div className="font-bold">{card.heading2}</div>
                        <div>{card.heading3}</div>
                        <button className="mt-8 border border-black p-2 w-full">Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )

}