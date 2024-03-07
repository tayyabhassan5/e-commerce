import React from 'react';
import { ShoppingOne } from '../components/LastShopping/ShoppingOne';
import { NavBarFirst } from '../components/HomeFolder/NavBarFirst.js'
import {Footer} from './Footer.js'
export const LastShop = () => {
  return (
    <div>
      <NavBarFirst />
      <ShoppingOne />
      <Footer />
    </div>
  );
};
