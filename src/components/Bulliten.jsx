import React from 'react';

const BulletinStrip = () => {
  return (
    <div className="w-full bg-gray-200 py-1">
      {/* Top yellow line */}
      <div className="w-full  bg-black"></div>

      {/* Text content */}
      <div className="bg-white text-black text-center py-2 text-sm md:text-base font-semibold tracking-wide">
        🔔 Important Update: Big discounts available on furniture this weekend! 🛋️
      </div>

      {/* Bottom yellow line */}
      <div className="w-full h-1 bg-gray-200"></div>
    </div>
  );
};

export default BulletinStrip;
