import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar/Navbar';
import SliderWithCards from './components/sliders/slider1';
import BulletinStrip from './components/Bulliten';
import PrimaryCategorySection from './components/Categories/Primarycategory';
import LoaderSpinner from './components/LoadSpinner';
import ShopDetailView from './components/ShopDisplay/ShopProductdetails';
import { CartProvider } from './components/addtocart/cardContext';
import CartPage from './components/addtocart/CartUI';
// lazyLoaders
const  SignupForm = lazy(() => import ('./components/userRegistration/Signuppage'));
const ShopForm =lazy(() => import ('./components/datasets/shopdata'));
const UserDashboard = lazy(() => import ('./components/UserAccount/Useraccount'));
const ShopListDisplay = lazy(() => import ('./components/ShopDisplay/Display1'));

import Footer from './components/footer/footer';
import './App.css';

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#ffff]">
      <Navbar />
      <SliderWithCards />
      <BulletinStrip />
      <PrimaryCategorySection />
      <Footer/>
      <ShopDetailView/>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
    <Router>
      <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-signup" element={<SignupForm />} />
        <Route path="/shop-form" element={<ShopForm />} />
        <Route path="/user-account" element={<UserDashboard />} />
        <Route path="/shops" element={<ShopListDisplay/>} />
        <Route path="/shop/:id" element={<ShopDetailView/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </Suspense>
    </Router>
    </CartProvider>
  );
}

export default App;
