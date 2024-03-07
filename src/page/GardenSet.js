import {GardenSetOne} from '../components/GardenSetFolder/GardenSetOne'
import {GardenSetTwo} from '../components/GardenSetFolder/GardenSetTwo'
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'


export const GardenSet=()=>{
    return(
        <div>
            <NavBarFirst />
            <GardenSetOne />    
            <GardenSetTwo />   
            <Footer />      
        </div>

    )
}