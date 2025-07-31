import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar/Navbar';
import SliderWithCards from './components/sliders/slider1';
import BulletinStrip from './components/Bulliten';
import PrimaryCategorySection from './components/Categories/Primarycategory';
import LoaderSpinner from './components/LoadSpinner';

// lazyLoaders
const  SignupForm = lazy(() => import ('./components/userRegistration/Signuppage'));
const ShopForm =lazy(() => import ('./components/admin/shopdata'));
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-signup" element={<SignupForm />} />
        <Route path="/shop-form" element={<ShopForm />} />
        <Route path="/user-account" element={<UserDashboard />} />
        <Route path="/shops" element={<ShopListDisplay/>} />

      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
