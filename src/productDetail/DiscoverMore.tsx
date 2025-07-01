import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/products/product.services";
import type { Product } from "../types";

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const DiscoverMore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch {
        setError("Không thể tải sản phẩm.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-white text-center">Đang tải sản phẩm...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-[#2a2a2a] max-w-full mx-auto px-4 py-16">
      <h2 className="text-center text-[#b86a3a] text-2xl font-semibold mb-12">
        Discover More
      </h2>
      <div className="flex justify-center flex-wrap gap-8 max-w-6xl mx-auto">
        {products.slice(0, 4).map((product) => (
          <Link
            to={`/productsdetail/${product._id}`}
            key={product._id}
            className="bg-[#3a3a37] rounded-xl p-6 flex flex-col items-center w-44 sm:w-52 md:w-60 shadow-lg hover:shadow-xl transition"
          >
            <img
              alt={product.name}
              className="mb-5"
              height={300}
              width={180}
              src={product.image_url || "/no-image.png"}
            />
            <p className="text-white text-base font-medium text-center mb-2">
              {product.name}
            </p>
            <div className="flex space-x-2 text-sm text-[#b86a3a]">
              <span>{formatPrice(product.price)}</span>
              <span className="text-white">100ml</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMore;
