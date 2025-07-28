import React, { useState } from 'react';
import orderData from '../datasets/orderData';

const OrderHistory = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (status) => {
    setFilters((prev) =>
      prev.includes(status)
        ? prev.filter((f) => f !== status)
        : [...prev, status]
    );
  };

  const filteredOrders = orderData.filter((order) => {
    const matchSearch = order.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filters.length === 0 || filters.includes(order.status);
    return matchSearch && matchFilter;
  });

  return (
    <div className="p-6 bg-gray-200 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Order History</h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 relative">
        {/* Search Input */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search orders..."
            className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-l-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => console.log("Searching for:", search)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
          >
            Search
          </button>
        </div>

        {/* Hoverable Filter Button */}
        <div
          className="relative"
          onMouseEnter={() => setShowFilters(true)}
          onMouseLeave={() => setShowFilters(false)}
        >
          <button className="border border-gray-300 px-4 py-2 rounded bg-white hover:bg-gray-100">
            Filters
          </button>

          {showFilters && (
            <div className="absolute z-10 top-12 right-0 bg-white border shadow-lg rounded w-48 p-4 space-y-2 text-sm">
              {["newest", "oldest", "on the way", "canceled", "returned"].map((status) => (
                <label key={status} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.includes(status)}
                    onChange={() => handleFilterChange(status)}
                  />
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order Cards */}
      <div className="space-y-4 ">
        {filteredOrders.map((order, i) => (
          <div key={i} className="flex bg-white flex-col sm:flex-row items-start sm:items-center justify-between border rounded p-4 shadow-md">
            <div className="flex items-center gap-4">
              <img
                src={order.image}
                alt={order.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="text-lg font-semibold">{order.name}</h4>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
            </div>

            <div className="text-right mt-4 sm:mt-0">
              <p className="font-semibold text-gray-800">₹{order.price}</p>
              <span className={`text-xs mt-1 inline-block px-2 py-1 rounded-full ${
                    order.status === 'canceled'
                      ? 'bg-red-100 text-red-600'
                      : order.status === 'on the way'
                      ? 'bg-yellow-100 text-yellow-600'
                      : order.status === 'returned'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <p className="text-gray-500 text-center">No orders match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
