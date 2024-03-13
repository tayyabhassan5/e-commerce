import FImage from '../../src/assets/Images/HomePageImges/logoFooter.png'
const Footer = () => {
    const heading = "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma";
    const heading1 = "GET STARTED ->";
    const heading2 = ["Mission", "Our team", "Awards", "Testimonial", "Privacy policy"];
    const heading3 = ["Web Design", "Web Development ", "Mobile Device", "UI/UX Design", "Branding Design"];
    const heading4 = ["Coperate Websites", "E-Commerce", "Mobile Apps", "Landing Page", "UI/UX Projects"]

    return (
        <div className="bg-black p-8 grid grid-cols-2 lg:grid-cols-7 border-b border-white">
            <div className="lg:border-b border-white lg:border-r lg:col-start-2 col-span-2  lg:col-span-2 p-2">
                <img className="mb-2 text-white" src={FImage} alt="Image" />
                <div className="mb-2 text-white">{heading}</div>
                <button className="border border-2px-solid border-white mb-20 text-white p-2">{heading1}</button>
            </div>

            <div className="p-4 lg:border-b border-white text-white">
                <div className="font-bold text-xl">ABOUT US</div>
                {heading2.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <div className="p-4 lg:border-b border-white text-white">
                <div className="font-bold text-xl">SERVICES</div>
                {heading3.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <div className="p-4 lg:border-b border-white text-white">
                <div className="font-bold text-xl">PORTFOLIO</div>
                {heading4.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>

    )
}

export default Footer