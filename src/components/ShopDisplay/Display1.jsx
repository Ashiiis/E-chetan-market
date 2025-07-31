import React from 'react';
import shopList from '../datasets/shoplist'; // your shop data source
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
const ShopListDisplay = () => {
  const handleClick = (shop) => {
    alert(`Clicked on ${shop.name}`);
    // You can navigate to a detail page if needed
  };

  return (
    <div className='ShopList'>
      <Navbar/>
    <div className="w-full px-4 py-8 bg-white">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-left">Available Shops</h2>

      <div className="space-y-6">
        {shopList.map((shop, index) => (
          <div
            key={index}
            onClick={() => handleClick(shop)}
            className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            {/* Shop Image */}
            <div className="w-full sm:w-1/3 h-[20%] sm:h-auto">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-[90%] overflow-hidden"
              />
            </div>

            {/* Shop Info */}
            <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{shop.name}</h3>
                <p className="text-sm text-blue-500 mt-1">{shop.category}</p>
                <p className="text-gray-600 mt-2">{shop.description}</p>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4 mt-4 text-gray-700 text-lg">
                <i className="fas fa-heart hover:text-red-500"></i>
                <i className="fab fa-whatsapp hover:text-green-500"></i>
                <i className="fas fa-bell hover:text-yellow-500"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ShopListDisplay;
