import React from 'react';
import { useNavigate } from 'react-router-dom';
import shopList from '../datasets/shoplist';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const ShopListDisplay = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/shop/${index}`);
  };

  return (
    <div className="ShopList bg-white ">
      <Navbar />
      <div className="w-full px-2 py-1  bg-gray-100">
        <h2 className="text-xl font-bold  border-b-2 border-solid border-gray-300 mb-2 text-gray-800 text-left">Available Shops</h2>

        <div className="border-solid border-gray-500">
          {shopList.map((shop, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="flex flex-row bg-white shadow-sm border border-solid border-gray-300 rounded-md overflow-hidden cursor-pointer hover:shadow-md transition relative max-h-[200px] h-[40vw] sm:h-[100px]"
            >
              <div className="w-[40%] sm:w-[30%] h-full">
    <img
      src={shop.image}
      alt={shop.name}
      className="w-full h-full object-cover"
    />
  </div>

              <div className="w-[65%] sm:w-[75%] p-3 pr-12 relative text-[12px] sm:text-[14px]">
    <h3 className="font-semibold text-gray-800">{shop.name}</h3>
    <p className="text-blue-500">{shop.category}</p>
    <p className="text-gray-600 truncate">{shop.description}</p>

    <div className="absolute bottom-2 right-3 flex gap-3 text-gray-700 text-sm sm:text-lg">
      <i className="fas fa-heart hover:text-red-500"></i>
      <i className="fab fa-whatsapp hover:text-green-500"></i>
      <i className="fas fa-bell hover:text-yellow-500"></i>
    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopListDisplay;
