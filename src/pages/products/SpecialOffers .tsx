import React from "react";

const offers = [
  {
    title: "Aqua Serenity",
    subtitle: "Embrace the Tranquil Tides",
    description:
      "Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.",
    image: "image/baner1.png",
    discount: "20% OFF",
    highlight: "on Aqua Serenity Perfume!",
    theme: "from-[#0f172a] to-[#1e293b]",
    textColor: "text-cyan-400",
  },
  {
    title: "Golden Angel",
    subtitle: "Unleash Your Divine Glow",
    description:
      "Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.",
    image: "image/baner5.png",
    discount: "25% OFF",
    highlight: "on Golden Angel Perfume!",
    theme: "from-[#1a1a1a] to-[#3b2f2f]",
    textColor: "text-yellow-400",
  },
];

const SpecialOffers = () => {
  return (
    <section className="w-full bg-[#1f1f1f] py-16 text-white">
      <h2 className="text-3xl text-center font-semibold mb-14">Special Offers</h2>

      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 px-4">
        {offers.map((offer, index) => (
          <div
            key={offer.title}
            className={`w-full h-[769px] bg-gradient-to-r ${offer.theme} rounded-lg flex flex-col md:flex-row items-center justify-between overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
  
            <div className="md:w-1/2 w-full h-full">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full px-8 py-10 md:py-0 text-left">
              <p className="text-xl md:text-2xl font-light mb-4">
                Limited Time Offer: <span className="font-medium">{offer.discount}</span>
                <br /> {offer.highlight}
              </p>
              <h3 className="text-3xl font-semibold mb-2">{offer.title}</h3>
              <p className={`${offer.textColor} text-md font-medium mb-4`}>
                {offer.subtitle}
              </p>
              <p className="text-sm text-gray-300 mb-6">{offer.description}</p>
              <button className="px-5 py-2 bg-transparent border border-gray-400 text-white text-sm rounded hover:bg-gray-700 transition">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
