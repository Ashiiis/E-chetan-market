import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SliderWithCards from './components/sliders/slider1';
import BulletinStrip from './components/Bulliten';
import QuickLinks from './components/Navbar/Secondarynav';
import PrimaryCategorySection from './components/Categories/Primarycategory';
import UserProfilePage from './components/userRegistration/UserProfile';
import SignupForm from './components/userRegistration/Signuppage';
import ShopForm from './components/admin/shopdata';
import OrderHistory from './components/orders/orderhistory';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-signup" element={<SignupForm />} />
        <Route path="/shop-form" element={<ShopForm />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/order-history" element={<OrderHistory />} />

      </Routes>
    </Router>
  );
}

export default App;
