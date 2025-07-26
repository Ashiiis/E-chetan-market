// import React, { useState } from 'react';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const categories = ['Electronics', 'Fashion', 'Groceries', 'Books'];

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="sticky top-0 w-full z-50 bg-white shadow-md items-center sticky bg-white shadow-md relative">
//         <div className="flex items-center justify-between px-4 py-2">

//           {/* Left: Logo / Chetan Market */}
//           <div className="flex items-center">
//             {/* Full name for md+ */}
//             <div className="hidden md:flex items-center space-x-2">
//               <span className="text-2xl font-bold text-gray-800">Chetan Market</span>
//               <i className="fas fa-list-check text-gray-600 text-lg"></i>
//             </div>
//             {/* Small screen: Short logo */}
//             <div className="md:hidden items-center">
//               <span className="text-xl font-bold items-center text-gray-800">CM</span>
//             </div>
//           </div>

//           {/* Center: Search + Categories (only md+) */}
//           <div className="flex-grow px-4 ">
//             <div className="relative w-full max-w-lg mx-auto">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-zinc-300 text-black placeholder-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//             />
//             <i className="fas fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
//           </div>

//             {/* Categories Dropdown */}
//            <Menu as="div" className="relative inline-block text-left hidden md:block">
//   <MenuButton className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full shadow ring-1 ring-gray-300 hover:bg-gray-100">
//     Categories
//     <ChevronDownIcon className="w-4 h-4 text-gray-500" />
//   </MenuButton>

//   <MenuItems className="absolute z-10 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
//     {categories.map((cat, i) => (
//       <MenuItem key={i}>
//         {({ active }) => (
//           <a
//             href="#"
//             className={`block px-4 py-2 text-sm ${
//               active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//             }`}
//           >
//             {cat}
//           </a>
//         )}
//       </MenuItem>
//     ))}
//   </MenuItems>
// </Menu>

//           </div>

//           {/* Right: Icons (md+), Hamburger (mobile) */}
//           <div className="flex items-center  space-x-4">
//             {/* md+ icons */}
//             <div className="hidden md:flex items-center  space-x-4">
//               <span className="text-sm text-gray-700">80+ active users</span>
//               <i className="fas fa-user text-gray-600"></i>
//               <i className="fas fa-house text-gray-600"></i>
//               <i className="fas fa-store text-gray-600"></i>
//               <i className="fas fa-cart-shopping text-gray-600"></i>
//             </div>

//             {/* Hamburger for small screens */}
//             <div className="md:hidden">
//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? (
//                   <XMarkIcon className="w-6 h-6 text-gray-700" />
//                 ) : (
//                   <Bars3Icon className="w-6 h-6 text-gray-700" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile dropdown menu */}
//         {/* Mobile dropdown menu (absolutely positioned) */}
// {mobileMenuOpen && (
//   <div className="absolute top-full right-4 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 md:hidden">
//     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       Home <i className="fas fa-house ml-2"></i>
//     </a>
//     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       Shops <i className="fas fa-store ml-2"></i>
//     </a>
//     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       Cart <i className="fas fa-cart-shopping ml-2"></i>
//     </a>
//     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       Profile <i className="fas fa-user ml-2"></i>
//     </a>
//     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       Support <i className="fas fa-headset ml-2"></i>
//     </a>
//   </div>
// )}

//       </nav>

//       {/* Mobile: Categories shown below navbar */}
//       <div className="md:hidden overflow-x-auto no-scrollbar mt-2">
//         <div className="flex space-x-3 w-max px-2">
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               className="whitespace-nowrap px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full shadow hover:bg-gray-200 transition"
//             >
//               {cat}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

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
              <span className="text-2xl font-bold text-gray-800">Chetan Market</span>
              
            </div>
            {/* Small screen: Short logo */}
            <div className="md:hidden">
              <span className="text-xl font-bold text-gray-800">CM</span>
            </div>
          </div>

          {/* Center: Search + Categories (only md+) */}
        <div className='flex-grow px-4 flex items-center space-x-4  justify-center'>
          <div className="">
  {/* Search bar - always visible */}
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-[0.7%] shadow-sm rounded-full border border-zinc-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-300"
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
            <i className="fas fa-user text-gray-600"></i>
            <i className="fas fa-house text-gray-600"></i>
            <i className="fas fa-store text-gray-600"></i>
            <i className="fas fa-cart-shopping text-gray-600"></i>
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

      <a href="#" className="block text-gray-700 hover:text-black">
        Home <i className="fas fa-house ml-2"></i>
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Shops <i className="fas fa-store ml-2"></i>
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Cart <i className="fas fa-cart-shopping ml-2"></i>
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Profile <i className="fas fa-user ml-2"></i>
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Support <i className="fas fa-headset ml-2"></i>
      </a>
    </div>
  </div>
)}

      </nav>

      {/* Mobile: Categories shown below navbar */}
        <div className="md:hidden overflow-x-auto no-scrollbar mt-2 scroll-smooth">
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
