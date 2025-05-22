import React, { memo } from 'react'


const InformationIntro = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                
                <div className="w-full md:w-1/2">
                    <img
                        src="image/banner2.png"
                        alt="Perfume bottle with citrus and flowers"
                        className="w-full rounded-lg shadow-lg object-cover"
                    />
                </div>

                
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Values</h2>
                    <p className="text-sm md:text-base font-light leading-relaxed mb-4">
                        At Local Face, our perfume retail store is built on a foundation of passion and authenticity.
                        We believe in celebrating the individuality of every customer, providing a diverse collection of scents
                        that resonate with their unique personality and style.
                        Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment,
                        where connections are forged, and inspiration thrives.
                    </p>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                        Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination;
                        we are a community that inspires and empowers individuals on their fragrance journey.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default memo(InformationIntro)