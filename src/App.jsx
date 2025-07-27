import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SliderWithCards from './components/sliders/slider1';
import BulletinStrip from './components/Bulliten';
import QuickLinks from './components/Navbar/Secondarynav';
import PrimaryCategorySection from './components/Categories/Primarycategory';
import UserProfileForm from './components/Signuppage';
import SignupForm from './components/Signuppage';
import ShopForm from './components/admin/shopdata';
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
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/shop-form" element={<ShopForm />} />
      </Routes>
    </Router>
  );
}

export default App;
