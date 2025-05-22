import React, { memo } from "react";

const BestSelling = () => {
  const articles = [
    {
      title:
        "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
      description:
        "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, balance, and timeless beauty.",
      image: "image/latest1.png",
    },
    {
      title:
        "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
      description:
        "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one’s taste, personality, and experiences.",
      image: "image/latest2.png",
    },
    {
      title:
        "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
      description:
        "Rose, often referred to as the 'Queen of Flowers', has held a special place in human culture and history for centuries.",
      image: "image/latest3.png",
    },
  ];

  return (
    <section className="bg-[#1f1f1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#e97f4c] text-2xl font-semibold mb-12">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover aspect-[4/3]" // <-- full ảnh, giữ tỉ lệ
              />
              <div className="p-5">
                <h3 className="text-md font-semibold mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-300 mb-5">
                  {article.description}
                </p>
                <button className="px-4 py-2 border border-gray-400 text-gray-200 text-sm rounded hover:bg-gray-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(BestSelling);
