import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shopList from '../datasets/shoplist';
import { useCart } from '../addtocart/cardContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const ShopDetailView = () => {
  const { id } = useParams();
  const shop = shopList[id];
  const { addToCart } = useCart(); 
  const [showAlert, setShowAlert] = useState(false);

  if (!shop) return <div className="p-6">Shop not found</div>;

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: shop.image });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className='shopdeteails relative'>
      <Navbar />

      <h2 className='text-l sm:text-sm md:text-base font-semibold text-gray-800 ml-2 mb-2'>
        Shop :- {shop.name}
      </h2>

      <div className="w-full p-1 bg-white flex flex-col md:flex-row gap-2">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <img
            src={shop.image}
            alt={shop.name}
            className="w-full max-h-[300px] object-cover rounded-md shadow-md"
          />
          <div className="mt-4 ml-2 mr-2 border-b-2 border-solid border-gray-300 text-left w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{shop.name}</h2>
            <p className="text-xs sm:text-sm md:text-base text-green-500">{shop.category}</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base mb-2 text-gray-600">{shop.description}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex flex-col gap-2">
          <h3 className="text-xl sm:text-2sm md:text-sm ml-2">Available Products</h3>
          <div className="flex flex-col gap-3">
            {shop.products.map((product, index) => (
              <div
                key={index}
                className="flex items-right justify-between p-3 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition bg-gray-50 hover:border-red-300"
              >
                <div>
                  <h4 className="font-semibold text-gray-700">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-md font-bold text-green-600">₹{product.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-blue-600 hover:text-blue-800 text-xl"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Component */}
      {showAlert && (
        <div className="fixed bottom-4 left-4 bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-2 rounded shadow-md text-sm z-50 transition-all duration-300">
          ✅ Item added to your cart
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ShopDetailView;
