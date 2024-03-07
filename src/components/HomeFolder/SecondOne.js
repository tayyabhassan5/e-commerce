import React from 'react';
import FImage from '../../assets/Images/HomePageImges/f.png'
import bgImage from "../../assets/Images/HomePageImges/background1.png"
import { useNavigate } from 'react-router-dom';

const SecondOne = () => {
  const navigate = useNavigate();
  const heading1 = "Handcrafted in Vietnam since 1650";
  const heading2 = "BAT TRANG DINNER SET";

  return (


    <div className="relative bg-center bg-fixed h-screen bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="grid lg:grid-cols-7 lg:h-full  ">
        <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-center items-center text-white text-center" style={{ backgroundColor: '#826F66' }}>
          <img src={FImage} className="mx-auto mb-4 mt-6" style={{ maxWidth: '100%' }} />
          <div className="p-4">{heading1}</div>
          <div className="font-bold text-2xl p-4">{heading2}</div>
          <button className="bg-white p-2 mb-6" style={{ color: '#826F66' }} onClick={() => navigate('/Shop')}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default SecondOne;