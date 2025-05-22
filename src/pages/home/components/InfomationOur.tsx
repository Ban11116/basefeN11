import React from 'react'


const InfomationOur = () => {
    return (
        <>

            <div className="relative w-full max-w-[1440px] h-[564px] min-h-screen flex items-center justify-center bg-black">

                <img
                    src="https://storage.googleapis.com/a1aa/image/3fa23943-f45e-41d3-4288-e48eefdd568e.jpg"
                    alt="Perfume bottles background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                <div className="relative max-w-3xl px-6 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#b25f3a] mb-6">
                        Welcome to Local Face
                    </h1>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                        Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire.
                        Our curated collection, aptly named "Victory Scented", is a celebration of success and elegance,
                        designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances
                        that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent,
                        and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
                    </p>
                </div>
            </div>

        </>
    )
}

export default InfomationOur