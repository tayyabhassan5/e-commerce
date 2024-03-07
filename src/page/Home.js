import React from 'react'
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'
import { ThirdOne } from '../components/HomeFolder/ThirdOne.js'
import { ChristmasCollection } from '../components/HomeFolder/ChristmasCollection.js'
import { CardsPage } from '../components/HomeFolder/CardsPage.js'
import SecondOne from '../components/HomeFolder/SecondOne.js'
import { VietnamPage } from '../components/HomeFolder/VietnamPage.js'
import {CardsPage2} from '../components/HomeFolder/CardsPage2.js'
import {OurBlog} from '../components/HomeFolder/OurBlog.js'
import {SignUpPage} from '../components/HomeFolder/SignUpPage.js'


export const Home = () => {
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