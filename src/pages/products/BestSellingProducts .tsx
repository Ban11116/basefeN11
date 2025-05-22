import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Luxurious Elixir Rough",
    price: "$220.00",
    volume: "100ml",
    rating: 4.8,
    reviews: 642,
    image: "image/products1.png",
  },
  {
    name: "The Golden Legacy",
    price: "$160.00",
    volume: "100ml",
    rating: 4.9,
    reviews: 1020,
    image: "image/products2.png",
  },
  {
    name: "Luxurious Elixir",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products3.png",
  },
    {
    name: "Luxurious Essence",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products4.png",
  },
    {
    name: "Aurum Aura",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products5.png",
  },
    {
    name: "Gleaming Gilt",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products6.png",
  },
    {
    name: "Gilded Elixir Rough",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products7.png",
  },
    {
    name: "Golden Luminary",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products8.png",
  },
    {
    name: "Decadent Opal",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products9.png",
  },
    {
    name: "Gilded Elixir",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products10.png",
  },
    {
    name: "Glamourous Gilt",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products11.png",
  },
    {
    name: "Luxury Enigma",
    price: "$250.00",
    volume: "100ml",
    rating: 4.6,
    reviews: 895,
    image: "image/products12.png",
  }
 
];

const BestSellingProducts = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
        <Link className="text-sm text-gray-400" to="/home">Home / Products</Link>
          <h2 className="text-2xl font-semibold text-center text-[#e97f4c] mt-4 mb-6">
            Best Selling Products
          </h2>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            {["Collections", "Fragrance Families", "Gender", "Occasions"].map((item) => (
              <select
                key={item}
                className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-600"
              >
                <option>{item}</option>
              </select>
            ))}
          </div>
          <select className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-600">
            <option>Sort by</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-4 rounded-md shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <div className="flex items-center text-xs text-orange-400 mb-1">
                ★ {product.rating}{" "}
                <span className="text-gray-400 ml-1">({product.reviews})</span>
              </div>
              <p className="text-sm">
                <span className="text-white font-semibold">{product.price}</span>{" "}
                <span className="text-gray-400 ml-1">{product.volume}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 text-gray-400 text-sm mt-10">
          <button>&lt;</button>
          <p>Page 1 of 4</p>
          <button>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
