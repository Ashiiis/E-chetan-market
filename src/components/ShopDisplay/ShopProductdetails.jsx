import React from 'react';
import { useParams } from 'react-router-dom';
import shopList from '../datasets/shoplist';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
const ShopDetailView = () => {
  const { id } = useParams();
  const shop = shopList[id];

  if (!shop) return <div className="p-6">Shop not found</div>;

  return (
    <div className='shopdeteails'>
        <Navbar/>
    <div className="w-full p-1 bg-white flex flex-col md:flex-row gap-6">
        
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full max-h-[300px] object-cover rounded-md shadow-md"
        />
        <div className="mt-4 text-right md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{shop.name}</h2>
          <p className="text-sm text-blue-500">{shop.category}</p>
          <p className="text-gray-600 mt-2">{shop.description}</p>
        </div>
      </div>

      <div className="md:w-1/2 w-full flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-800">Available Products</h3>
        <div className="flex flex-col gap-3">
          {shop.products.map((product, index) => (
            <div
              key={index}
              className="flex items-right justify-between p-3 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <div>
                <h4 className="font-semibold text-gray-700">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-md font-bold text-green-600">₹{product.price}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-xl">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ShopDetailView;
