import React from 'react'

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] text-white py-16 px-6">
            <div className="w-full max-w-[1240px] h-[769px] px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">                {/* Text Content */}
                <div className="text-left max-w-xl">
                    <h1 className="text-3xl md:text-5xl font-light leading-snug mb-6">
                        Elevate Your Spirit with <br />
                        <span className="font-medium">Victory Scented Fragrances!</span>
                    </h1>
                    <p className="text-sm md:text-base font-light mb-6">
                        Shop now and embrace the sweet smell of victory<br />
                        with Local Face.
                    </p>
                    <button className="bg-[#b35a2a] hover:bg-[#9a4d23] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors">
                        Shop Now
                    </button>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src="image/anhbenr1.png"
                        alt="Perfume splash bottle"
                        className="w-80 md:w-[400px] object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
