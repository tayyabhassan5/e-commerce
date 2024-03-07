export const ContactFour = () => {
    return (
        <div className="p-4 lg:mx-80 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
                <div>Name:</div>
                <input className="border 1px solid p-2" type="text" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col">
                <div>Phone:</div>
                <input className="border 1px solid p-2" type="tel" placeholder="(123) 456 789" />
            </div>
            <div className="flex flex-col">
                <div>Email:</div>
                <input className="border 1px solid p-2" type="email" placeholder="example@youremail.com" />
            </div>

            <div className="flex flex-col">

                <div>Company:</div>
                <input className="border 1px solid p-2" type="email" placeholder="Moon" />
            </div>
            {/* Button takes the full width of both columns */}
            <div> Message:</div>
            <textarea className="text-white p-2 w-full col-span-2 border 1px solid p-2" placeholder="Type Your Message Here"></textarea>

            <button className="bg-black text-white p-2 w-full col-span-2 ">Send Message</button>
            
            


    </div>
    );
};
