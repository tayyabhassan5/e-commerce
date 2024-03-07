import React from 'react'
import { NavBarFirst } from '../components/NavBarFirst.js'
import { ThirdOne } from '../components/ThirdOne.js'
import { ChristmasCollection } from '../components/ChristmasCollection.js'
import { CardsPage } from '../components/CardsPage.js'
import SecondOne from '../components/SecondOne.js'
import { VietnamPage } from '../components/VietnamPage.js'
import {CardsPage2} from '../components/CardsPage2.js'
import {OurBlog} from '../components/OurBlog.js'
import {SignUpPage} from '../components/SignUpPage.js'


export const HomePage = () => {
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
        </div>

    );
};