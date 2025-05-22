import React, { memo } from 'react'

const bestSellers = [
  {
    name: 'Luxurious Elixir Rough',
    price: 220,
    volume: '100ml',
    image: 'image/home1.png', 
  },
  {
    name: 'The Golden Legacy',
    price: 160,
    volume: '100ml',
    image: 'image/home2.png',
  },
  {
    name: 'Luxurious Elixir',
    price: 250,
    volume: '100ml',
    image: 'image/home3.png',
  },
  {
    name: 'Luxurious Essence',
    price: 260,
    volume: '100ml',
    image: 'image/home4.png',
  },
]

const BestProducts = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-[#cc693b]">
          Best selling products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <div key={idx} className="bg-[#2a2a2a] rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-48 object-contain mb-6"
              />
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-[#e37b52] font-semibold text-sm">${product.price.toFixed(2)}</p>
              <p className="text-gray-400 text-xs">{product.volume}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(BestProducts)
