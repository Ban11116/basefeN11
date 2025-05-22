import React, { memo } from 'react'

const InfoSale = () => {
  return (
      <div className="relative max-w-5xl w-full h-72 md:h-96 bg-gray-800 overflow-hidden rounded">
        <img
          src="https://storage.googleapis.com/a1aa/image/f3b0bc75-2251-443f-be45-d829a068e56e.jpg"
          alt="Dark perfume bottle with black cap on a dark smoky background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-md p-6 md:p-12 text-white bg-black bg-opacity-40">
          <h1 className="text-xl md:text-3xl font-normal leading-snug">
            Perfume Year-End Sale!
            <br />
            Up to <span className="font-semibold">50% OFF</span>
          </h1>
          <p className="mt-3 text-xs md:text-sm text-gray-200">
            Discover an exquisite collection of premium perfumes at unbelievable
            prices during our exclusive Perfume Sale!
          </p>
          <button
            className="mt-6 bg-orange-700 hover:bg-orange-600 text-white text-xs md:text-sm font-semibold py-2 px-4 rounded w-max "
            type="button"
          >
            Know More
          </button>
        </div>
      </div>
  )
}

export default memo(InfoSale)