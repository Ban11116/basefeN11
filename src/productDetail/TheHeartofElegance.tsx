import React, { memo } from 'react'

const TheHeartofElegance = () => {
    return (
        <>
            <section className="bg-[#2a2a2a] text-white px-6 py-12 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl  font-semibold mb-4">The Heart of Elegance</h2>
                    <p className="text-base leading-relaxed mb-12">
                        Luxurious Elixir is the embodiment of elegance, drawing you into a world where glamour and prestige unite.
                        With every spritz, the fragrance weaves a tapestry of glistening gold around you,
                        enhancing your allure and capturing the admiration of those around.
                    </p>

                    <h2 className="text-3xl font-semibold mb-4">The Ultimate Expression of Luxury</h2>
                    <p className="text-base leading-relaxed">
                        Luxurious Elixir makes an extraordinary gift,
                        an expression of your discerning taste and admiration for the extraordinary.
                        Delight your loved ones with this lavish elixir, a symbol of admiration and adoration.
                    </p>
                </div>
            </section>
        </>
    )
}

export default memo(TheHeartofElegance)