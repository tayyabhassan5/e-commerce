import {CartOne} from '../components/CartFolder/CartOne'
import {CartTwo} from '../components/CartFolder/CartTwo'
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'

export const Cart=()=>{
    return(
        <div>
            <NavBarFirst />
            <CartOne />
            <CartTwo />
            <Footer />
        </div>
    )
}