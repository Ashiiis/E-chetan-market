import React from 'react';
import PrimaryCategoryData from '../datasets/primarycategorydata';

const PrimaryCategorySection = () => {
  return (
    <div className="w-full px-4 py-8 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {PrimaryCategoryData.map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 shadow rounded-lg overflow-hidden aspect-square flex flex-col"
          >
            {/* Background Image for Mobile, Normal Image for Desktop */}
            <div className="relative h-1/2 w-full">
              {/* Background for mobile */}
              <div
                className="block md:hidden w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* <img> for desktop */}
              <img
                src={item.image}
                alt={item.name}
                className="hidden md:block w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="p-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap mt-2 gap-1">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] md:text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryCategorySection;
