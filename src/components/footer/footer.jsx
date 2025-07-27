import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left Section */}
        <div className="flex-1 w-full">
          <h2 className="text-base md:text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-xs md:text-sm text-gray-300">
            <li>About Us</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Email: support@chetanmarket.com</li>
            <li>Location: Faridabad, Haryana</li>
          </ul>
        </div>

        {/* Divider for mobile and desktop */}
        <div className="h-[1px] w-full bg-gray-600 md:hidden" />
        <div className="hidden md:block w-[1px] bg-gray-600 h-40" />

        {/* Right Section */}
        <div className="flex-1 w-full flex justify-center flex-col items-start md:items-end">
          <img
            src="/logo.png"
            alt="CM"
            className="w-16 flex justify-center h-auto mb-3"
          />
          <p className="text-xs md:text-sm max-w-sm text-gray-400 mb-4 text-left md:text-right">
            Chetan Market connects you with the best local shops in your area.
            Experience the simplicity of nearby shopping with a digital touch.
          </p>

          <div className="flex space-x-4 text-lg md:text-xl">
            <a
              href="https://wa.me/919999999999"
              className="hover:text-green-400"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-400"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="mailto:support@chetanmarket.com"
              className="hover:text-red-400"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[10px] md:text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Chetan Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
