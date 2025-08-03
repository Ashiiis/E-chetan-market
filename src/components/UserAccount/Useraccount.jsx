import React, { useState } from 'react';
import { Suspense, lazy } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import CartPage from '../addtocart/CartUI';
// import UserProfilePage from '../userRegistration/UserProfile';
// import OrderHistory from '../orders/orderhistory';
const OrderHistory = lazy(() => import('../orders/orderhistory'));
const UserProfilePage = lazy(() =>import ('../userRegistration/UserProfile'));
const sections = [
  'Profile',
  'Past Orders',
  'Downloads',
  'Wishlist',
  'Cart',
  'Payment Details',
];

const sectionComponents = {
  'Profile': <UserProfilePage/>,
  'Past Orders': <OrderHistory/>,
  'Downloads': <div>Downloadable Items</div>,
  'Wishlist': <div>Your Wishlist</div>,
  'Cart': <CartPage/>,
  'Payment Details': <div>Your Payment Methods</div>,
};

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className='accounts'>
        <Navbar/>
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`w-full md:w-1/4 bg-gray-100 shadow md:shadow-none p-4 transition-all duration-300 ${mobileNavOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-lg font-bold mb-4 text-center md:text-left">My Account</h2>
        <ul className="space-y-2">
          {sections.map(section => (
            <li key={section}>
              <button
                onClick={() => {
                  setActiveSection(section);
                  setMobileNavOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded ${
                  activeSection === section ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {mobileNavOpen ? 'Close Menu' : 'Menu'}
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">{activeSection}</h2>
        <div className="p-4 bg-gray-50 rounded shadow-sm">
          {sectionComponents[activeSection]}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserDashboard;
