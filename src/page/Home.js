import React from 'react'
import {NavBarFirst, SignUpPage,OurBlog,ThirdOne,ChristmasCollection,CardsPage,SecondOne,VietnamPage,CardsPage2}  from '../components'
import Footer from './Footer.js'



const Home = () => {
    return (
        <div> 
             <NavBarFirst />        
            <SecondOne /> 
            <ThirdOne />
            <ChristmasCollection />
            <CardsPage />
            <VietnamPage />
            <CardsPage2 />
            <OurBlog />
            <SignUpPage />
            <Footer /> 
        </div>

    );
};

export default Home