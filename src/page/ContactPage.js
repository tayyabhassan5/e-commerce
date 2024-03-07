import {ContactOne} from '../components/ContactFolder/ContactOne'
import {ContactTwo} from '../components/ContactFolder/ContactTwo'
import {ContactThree} from '../components/ContactFolder/ContactThree'
import {ContactFour} from '../components/ContactFolder/ContactFour'
import {ContactFive} from '../components/ContactFolder/ContactFive'
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'

export const ContactPage=()=>{
    return(
        <div>
            <NavBarFirst />
            <ContactOne />
            <ContactTwo />
            <ContactThree />
            <ContactFour />
            <ContactFive />
            <Footer />
        </div>

    )
}