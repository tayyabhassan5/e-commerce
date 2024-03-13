import react from 'react'
import {AboutOne,AboutFour,AboutThree,AboutTwo,NavBarFirst} from '../components'
import Footer from './Footer.js'

const About = () => {
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

export default About