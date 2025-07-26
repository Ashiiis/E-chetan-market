import React from 'react';

const QuickLinks = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 px-4">
      
      {/* Category Section */}
      <div className="px-6 py-4 bg-white shadow-md text-center text-gray-800 font-semibold hover:shadow-lg transition flex items-center gap-2">
        <i className="fas fa-layer-group text-lg text-yellow-600"></i>
        Category Section
      </div>

      {/* Watch on Map */}
      <div className="px-6 py-4 bg-white shadow-md text-center text-gray-800 font-semibold hover:shadow-lg transition flex items-center gap-2">
        <i className="fas fa-map-location-dot text-lg text-green-600"></i>
        Watch on Map
      </div>

      {/* Be a Seller */}
      <div className="px-6 py-4 bg-white shadow-md text-center text-gray-800 font-semibold hover:shadow-lg transition flex items-center gap-2">
        <i className="fas fa-user-tie text-lg text-blue-600"></i>
        Be a Seller
      </div>
      
    </div>
  );
};

export default QuickLinks;
