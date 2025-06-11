import React, { memo } from 'react'

const TheGoldenOverture = () => {
  return (
    <>
       <section className="bg-[#2a2a2a] text-white px-6 py-12 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl  font-semibold mb-4">Product Details</h2>
                    <p className="text-base leading-relaxed mb-12">
                        Step into a world of unparalleled opulence with Luxurious Elixir,
                        an exquisite fragrance that weaves an enchanting symphony of gold and luxury.
                        This gilded elixir is a celebration of sophistication,
                        crafted with the finest essences and imbued with the allure of precious golden hues.
                        From the first spritz to the lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish indulgence.
                    </p>

                    <h2 className="text-3xl font-semibold mb-4">The Golden Overture</h2>
                    <p className="text-base leading-relaxed">
                        Luxurious Elixir opens with a grand flourish of radiant citrus and sun-kissed fruits,
                        reminiscent of golden rays caressing your senses. The opulent heart unfolds with a bouquet of velvety roses and rare blooms,
                        their essence radiating with the allure of gilded petals. As the fragrance settles,
                        a sumptuous blend of warm amber, creamy vanilla, and smooth sandalwood evokes a sense of ultimate luxury and refinement.
                    </p>
                </div>
            </section>
    </>
  )
}

export default memo(TheGoldenOverture)