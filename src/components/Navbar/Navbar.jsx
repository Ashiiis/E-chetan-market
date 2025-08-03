import React, { useState } from 'react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ['Electronics', 'Fashion', 'Groceries', 'Books'];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 w-full z-50 bg-white items-center shadow-md">
        <div className="flex items-center justify-between px-4 py-2">

          {/* Left: Logo / Chetan Market */}
          <div className="flex items-center">
            {/* Full name for md+ */}
            <div className="hidden md:flex items-center space-x-2">
  <img
    src="/largelogo.png"
    alt="CM"
    className="h-10 w-auto object-contain" // max height set
  />
</div>

{/* Small screen: Short logo */}  
<div className="md:hidden">
  <img
    src="/smlogo.png"
    alt="CM"
    className="h-10 w-auto object-contain" // max height set
  />
</div>
          </div>

          {/* Center: Search + Categories (only md+) */}
        <div className='flex-grow px-4 flex items-center space-x-4  justify-center'>
          <div className="">
  {/* Search bar - always visible */}
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-[1.4%] shadow-sm rounded-full border border-zinc-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <i className="fas fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
            </div>
          </div>
            {/* Categories dropdown - hidden on small screens */}
            <div className='hidden md:block'>
            <Menu as="div" className="relative inline-block text-left hidden md:block">
              <MenuButton className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full  border-gray-300 hover:bg-gray-200">
                Categories
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </MenuButton>
              <MenuItems className="absolute z-10 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                {categories.map((cat, i) => (
                  <MenuItem key={i}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {cat}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
        </div> 
        
        </div>
        {/* <div className='relative inline-block text-left space-x-4 hidden md:block'>
          <i className="fas fa-list-check text-gray-600 text-md">Check List</i>
        </div> */}

          {/* Right: Icons (md+), Hamburger (mobile) */}
          <div className="flex items-center space-x-4">
            {/* md+ icons */}
            <div className="hidden md:flex items-center py-2 px-4 border border-gray-300 border-l-0 rounded-r-full space-x-6">
            <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
              80+ active users
            </span>
            <div className="relative group">
                <Link to="/shops">
                <i className="fas fa-house text-gray-600 text-xl cursor-pointer"></i>
                </Link>          
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1
                                bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                transition duration-200 whitespace-nowrap z-10">
                  All Shops
                </div>
              </div>

              <div className="relative group">
                <Link to="/user-signup">
                <i className="fas fa-user text-gray-600 text-xl cursor-pointer"></i>
                </Link>          
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1
                                bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                transition duration-200 whitespace-nowrap z-10">
                  Join Us
                </div>
              </div>
            
              <div className="relative group">
                <Link to="/be-a-seller">
                <i className="fas fa-store text-gray-600 text-xl cursor-pointer"></i>
                </Link>          
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1
                                bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                transition duration-200 whitespace-nowrap z-10">
                  Be a Seller
                </div>
              </div>
            <div className="relative group">
                <Link to="/cart">
                <i className="fas fa-cart-shopping text-gray-600 text-xl cursor-pointer"></i>
                </Link>          
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1
                                bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                transition duration-200 whitespace-nowrap z-10">
                  Your Cart
                </div>
              </div>
          </div>


            {/* Hamburger for small screens */}
            <div className="md:hidden flex items-center justify-center h-full">

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-700" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-transparent bg-opacity-40">
    <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-white p-6 shadow-lg space-y-4">
      <button
        onClick={() => setMobileMenuOpen(false)}
        className="absolute top-4 right-4 text-gray-700"
      >
        <i className="fas fa-times text-xl"></i>
      </button>

      <div className="block text-gray-700 hover:text-black">
        All Shops
        <Link to="/shops"> 
        <i className="fas fa-house ml-2"></i>
        </Link>
      </div>
      
      <div  className="block text-gray-700 hover:text-black">Shops 
        <Link to="user-signup">
          <i className="fas fa-store ml-2"></i>
        </Link>
      </div>
      <div className="block text-gray-700 hover:text-black">Cart 
        <Link to="/cart">
          <i className="fas fa-cart-shopping ml-2"></i>
        </Link>
      </div>
      <div className="block text-gray-700 hover:text-black">Profile 
        <Link to="/user-signup">
          <i className="fas fa-user ml-2"></i>
        </Link>
      </div>
      <div className="block text-gray-700 hover:text-black">Support 
        <Link to="/user-signup">
        <i className="fas fa-headset ml-2"></i>
        </Link>
      </div>
    </div>
  </div>
)}

      </nav>

      {/* Mobile: Categories shown below navbar */}
        <div className="md:hidden overflow-x-auto no-scrollbar mt-2 mb-2 scroll-smooth">
          <div className="flex space-x-3 w-max px-2">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full shadow hover:bg-gray-200 transition"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default Navbar;
