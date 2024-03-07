import React from 'react';
import FImage from "../../public/Images/HomePageImges/f.png"

 const SecondOne = () => {
  const heading1 = "Handcrafted in Vietnam since 1650";
  const heading2 = "BAT TRANG DINNER SET";

  return (
    <div className="relative grid grid-cols-7 bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/background1.png)` }}>
    <div ></div>
    <div className="col-span-2 h-full text-white flex flex-col items-center justify-center"style={{ backgroundColor: '#826F66' }}>
  
      <img src={FImage} className="p-4" />
      
      <div className="p-4" >{heading1}</div>
      <div className="font-bold text-2xl p-4">{heading2}</div>
      <button className="bg-white p-2" style={{ color: '#826F66' }}>SHOP NOW</button>
    
    </div>
    
    
  </div>
  
     
  );
}

export default SecondOne