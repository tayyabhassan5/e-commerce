import React from 'react';
import FImage from '../../assets/Images/HomePageImges/f.png'
import bgImage from '../../assets/Images/ContactPage/ContactBackground.png'
import Image1 from '../../assets/Images/ContactPage/Facebook.png'
import Image2 from '../../assets/Images/ContactPage/Instagram.png'
import Image3 from '../../assets/Images/ContactPage/LinkedIn.png'
import Image4 from '../../assets/Images/ContactPage/Twitter.png'
import Image5 from '../../assets/Images/ContactPage/YouTube.png'



 const ContactOne = () => {
  const heading1 = "CONTACT US";
  const heading2 = "FOLLOW US ON SOCIAL MEDIA";
  const items=[
    {
        id:1,
        a:Image1
    },
    {
        id:2,
        a:Image2
    },
    {
        id:3,
        a:Image3
    },
    {
        id:4,
        a:Image4
    },
    {
        id:5,
        a:Image5
    }
  ]
  return (

    <div className="relative grid lg:grid-cols-7 bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: `url(${bgImage})`}}>
    <div ></div>
    <div className="lg:col-span-2 h-full text-white flex flex-col items-center justify-center"style={{ backgroundColor: '#3A3845' }}>
  
      <img src={FImage} className="p-4" />
      
      <div className="border-b border-white p-4 font-bold text-2xl" >{heading1}</div>
      <div className="p-4">{heading2}</div>

      <div className="p-2 flex items-center justify-center">
      {items.map((item)=>(
        <div className="flex items-center justify-center p-4" key={item.id}>
            <img src={item.a} />
            </div>

      ))}
      </div>
    
    </div>
    
    
  </div>
  
     
  );
}

export default ContactOne