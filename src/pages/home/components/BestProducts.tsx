import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../services/products/product.services';
import type { Product } from '../../../types';


const BestProducts = () => {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, ] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        // Tạm thời chọn 4 sản phẩm đầu làm best seller
        const best = products.slice(0, 4);
        setBestSellers(best);
      } catch  {
        alert('Không thể tải sản phẩm.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-white text-center">Đang tải sản phẩm...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <section className="bg-[#1f1f1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-[#cc693b]">
          Best selling products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <Link
              key={product._id}
              to={`/productsdetail/${product._id}`}
              className="bg-[#2a2a2a] rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={product.image_url || '/no-image.png'}
                alt={product.name}
                className="mx-auto h-48 object-contain mb-6"
              />
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-[#e37b52] font-semibold text-sm">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-xs">Còn lại: {product.stock_quantity}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(BestProducts);
