import React from 'react'

const PromoBanner = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
                <div className="text-left max-w-xl mb-10 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
                        Perfume Year-End Sale!
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Up to 50% OFF
                    </h3>
                    <p className="text-sm sm:text-base font-light mb-6 text-gray-300">
                        Discover an exquisite collection of premium perfumes at <br />
                        unbelievable prices during our exclusive Perfume Sale!
                    </p>
                    <button className="bg-[#b35a2a] hover:bg-[#9a4d23] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors">
                        Know More
                    </button>
                </div>

               
                <div className="flex-shrink-0">
                    <img
                        src="image/baner1.png" 
                        alt="Black perfume bottle"
                        className="w-64 sm:w-80 md:w-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner
