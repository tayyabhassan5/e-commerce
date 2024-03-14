import React from 'react';
// import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { About, Home, ContactPage, GardenSet, Shop, Cart, LastShop, SecondCart, LoginPage, SignUp } from './page';
import { Route, Routes, Outlet, Navigate, BrowserRouter as Router } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import StripePayment from './page/stripePayment';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    // <div>
    //   <StripePayment />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signuppage" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/garden-set" element={<GardenSet />} />
        <Route path="/shop" element={<Shop />} />


        <Route element={<ProtectedRoute />}>

          <Route path="about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/garden-set" element={<GardenSet />} />

          <Route path="/product/:productID" element={<Cart />} />
          <Route path="/lastshop" element={<LastShop />} />
          <Route path="/secondcart" element={<SecondCart />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
