import React, { memo } from "react";

const OurCollections = () => {
  return (
    <div className="bg-[#1f1f1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#cc693b] text-center text-xl font-semibold mb-10">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="group relative w-full overflow-hidden rounded" style={{ aspectRatio: "1 / 1" }}>
            <img
              src="image/our1.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-3 left-3 text-sm font-medium bg-black bg-opacity-60 px-3 py-1 rounded">
              Designer Delights Collection
            </p>
          </div>

         
          <div className="group relative w-full sm:col-span-2 overflow-hidden rounded" style={{ aspectRatio: "2 / 1" }}>
            <img
              src="image/our2.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Travel Essentials Collection
            </p>
          </div>

          
          <div className="group relative w-full overflow-hidden rounded" style={{ aspectRatio: "1 / 1" }}>
            <img
              src="image/our3.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Special Occasions Collection
            </p>
          </div>

          
          <div className="group relative w-full sm:col-span-2 overflow-hidden rounded" style={{ aspectRatio: "2 / 1" }}>
            <img
              src="image/our4.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Seasonal Sensations Collection
            </p>
          </div>

        
          <div className="group relative w-full overflow-hidden rounded" style={{ aspectRatio: "1 / 1" }}>
            <img
              src="image/our5.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Vintage Treasures Collection
            </p>
          </div>

         
          <div className="group relative w-full overflow-hidden rounded" style={{ aspectRatio: "1 / 1" }}>
            <img
              src="image/our6.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Limited Edition Treasures
            </p>
          </div>

          
          <div className="group relative w-full overflow-hidden rounded" style={{ aspectRatio: "1 / 1" }}>
            <img
              src="image/our7.png"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute bottom-2 left-2 text-xs font-normal bg-black bg-opacity-60 px-2 py-1 rounded">
              Modern Classics Collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OurCollections);
