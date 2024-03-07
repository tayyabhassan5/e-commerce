import React from 'react';

 const SecondOne = () => {
  const heading1 = "Handcrafted in Vietnam since 1650";
  const heading2 = "BAT TRANG DINNER SET";

  return (
    <div className="relative bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/background1.png)` }}>
      <div className="absolute h-full ml-40 w-80 flex items-center justify-center" style={{ backgroundColor: '#826F66' }}>
        <div className=" text-center flex items-center justify-center flex-col">
          <img
            src={process.env.PUBLIC_URL + '/Images/f.png'}
            alt="Your Image"
            className="p-4" 
          />

          <div className="text-white p-4">{heading1}</div> 
          <div className="text-white font-bold text-4xl p-6">{heading2}</div> 
          <button className="bg-white p-2 w-60" style={{ color: '#826F66' }}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default SecondOne