import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/products/product.services";
import type { Product } from "../../types";

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const BestSellingProducts = () => {
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

  return (
    <section className="bg-[#1f1f1f] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link className="text-sm text-gray-400" to="/home">
            Home / Products
          </Link>
          <h2 className="text-2xl font-semibold text-center text-[#e97f4c] mt-4 mb-6">
            Best Selling Products
          </h2>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            {["Collections", "Fragrance Families", "Gender", "Occasions"].map(
              (item) => (
                <select
                  key={item}
                  className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-600"
                >
                  <option>{item}</option>
                </select>
              )
            )}
          </div>
          <select className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-600">
            <option>Sort by</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Đang tải sản phẩm...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-[#2a2a2a] p-4 rounded-md shadow-md hover:shadow-lg transition"
                >
                  <Link to={`/productsdetail/${product._id}`} className="block">
                    <img
                      src={product.image_url || "/no-image.png"}
                      alt={product.name}
                      className="w-full h-48 object-contain mb-4"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = "/no-image.png")
                      }
                    />
                    <h3 className="text-sm font-semibold mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="text-xs text-gray-400 mb-1">
                    Còn lại: {product.total_stock}
                  </div>
                  <p className="text-sm">
                    <span className="text-white font-semibold">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-400 ml-1">100ml</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 text-gray-400 text-sm mt-10">
              <button>&lt;</button>
              <p>Page 1 of 4</p>
              <button>&gt;</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BestSellingProducts;
