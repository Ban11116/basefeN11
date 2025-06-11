import React, { memo } from 'react'

const DiscoverMore = () => {
    return (
        <>
            <div className="bg-[#2a2a2a] max-w-full mx-auto px-4 py-16">
                <h2 className="text-center text-[#b86a3a] text-2xl font-semibold mb-12">
                    Discover More
                </h2>
                <div className="flex justify-center flex-wrap gap-8 max-w-6xl mx-auto">
                    {/* Item 1 */}
                    <div className="bg-[#3a3a37] rounded-xl p-6 flex flex-col items-center w-44 sm:w-52 md:w-60 shadow-lg">
                        <img
                            alt="Luxurious Elixir Rough black and gold bottle with intricate design"
                            className="mb-5"
                            height="300"
                            src="https://storage.googleapis.com/a1aa/image/2c0c3e96-5ed5-449f-7e78-3f931986ba7c.jpg"
                            width="180"
                        />
                        <p className="text-white text-base font-medium text-center mb-2">
                            Luxurious Elixir Rough
                        </p>
                        <div className="flex space-x-2 text-sm text-[#b86a3a]">
                            <span>$220.00</span>
                            <span className="text-white">100ml</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-[#3a3a37] rounded-xl p-6 flex flex-col items-center w-44 sm:w-52 md:w-60 shadow-lg">
                        <img
                            alt="The Golden Legacy amber and gold bottle with smooth round shape"
                            className="mb-5"
                            height="300"
                            src="https://storage.googleapis.com/a1aa/image/40bac3b2-e893-4b5d-172e-99d572668419.jpg"
                            width="180"
                        />
                        <p className="text-white text-base font-medium text-center mb-2">
                            The Golden Legacy
                        </p>
                        <div className="flex space-x-2 text-sm text-[#b86a3a]">
                            <span>$160.00</span>
                            <span className="text-white">100ml</span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-[#3a3a37] rounded-xl p-6 flex flex-col items-center w-44 sm:w-52 md:w-60 shadow-lg">
                        <img
                            alt="Luxurious Elixir black and gold bottle with diamond shaped emblem"
                            className="mb-5"
                            height="300"
                            src="https://storage.googleapis.com/a1aa/image/8707f79f-f3e2-4fef-97f1-674f1b4ca18f.jpg"
                            width="180"
                        />
                        <p className="text-white text-base font-medium text-center mb-2">
                            Luxurious Elixir
                        </p>
                        <div className="flex space-x-2 text-sm text-[#b86a3a]">
                            <span>$250.00</span>
                            <span className="text-white">100ml</span>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-[#3a3a37] rounded-xl p-6 flex flex-col items-center w-44 sm:w-52 md:w-60 shadow-lg">
                        <img
                            alt="Luxurious Golden Legacy gold bottle with blue top and intricate design"
                            className="mb-5"
                            height="300"
                            src="https://storage.googleapis.com/a1aa/image/990464de-6c8f-41f4-e974-106b4cde8e71.jpg"
                            width="180"
                        />
                        <p className="text-white text-base font-medium text-center mb-2">
                            Luxurious Golden Legacy
                        </p>
                        <div className="flex space-x-2 text-sm text-[#b86a3a]">
                            <span>$240.00</span>
                            <span className="text-white">100ml</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(DiscoverMore)