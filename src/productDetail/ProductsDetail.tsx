import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import TheGoldenOverture from './TheGoldenOverture';
import KeyNotes from './KeyNotes';
import TheHeartofElegance from './TheHeartofElegance';
import Reviews from './Reviews';
import DiscoverMore from './DiscoverMore';
import type { Product } from '../types';
import { getProductById } from '../services/products/product.services';

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('ProductsDetail useEffect run with id:', id);

    const fetchProduct = async () => {
      setLoading(true); // reset loading khi id thay đổi
      setError(null); // clear lỗi cũ
      try {
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        } else {
          setError('Không tìm thấy ID sản phẩm.');
          setProduct(null);
        }
      } catch {
        alert('Không thể tải chi tiết sản phẩm.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-white">Đang tải sản phẩm...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-400">Sản phẩm không tồn tại.</p>;

  return (
    <>
      <Products product={product} />
      <TheGoldenOverture />
      <KeyNotes />
      <TheHeartofElegance />
      <Reviews />
      <DiscoverMore />
    </>
  );
};

export default ProductsDetail;
