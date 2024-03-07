import react from 'react'
import {AboutOne} from '../components/AboutFolder/AboutOne.js'
import {AboutTwo} from '../components/AboutFolder/AboutTwo.js'
import {AboutThree} from '../components/AboutFolder/AboutThree.js'
import {AboutFour} from '../components/AboutFolder/AboutFour.js'
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'

export const About = () => {
    return (
        <div>
            <NavBarFirst />
            <AboutOne />
            <AboutTwo />
            <AboutThree />
            <AboutFour />
            <Footer />

        </div>
    )
}