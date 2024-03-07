import React from 'react';
// import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Home } from './page/Home';
import { About } from './page/About';
import { ContactPage } from './page/ContactPage';
import { GardenSet } from './page/GardenSet';
import { Shop } from './page/Shop';
import { Cart } from './page/Cart';
import { LastShop } from './page/LastShop';
import { SecondCart } from './page/SecondCart';
import { LoginPage } from './page/LoginPage';
import { SignUp } from './page/SignUp';
// import React from 'react';
import { Route, Routes, Outlet, Navigate, BrowserRouter as Router } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/garden-set" element={<GardenSet />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lastshop" element={<LastShop />} />
          <Route path="/secondcart" element={<SecondCart />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
