import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import DiscoverMore from "./DiscoverMore";
import type { Product } from "../types";
import { getProductById } from "../services/products/product.services";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const data = await getProductById(id);
          if (!data || Object.keys(data).length === 0) {
            setProduct(null);
          } else {
            setProduct(data);
          }
        } else {
          setError("Không tìm thấy ID sản phẩm.");
        }
      } catch {
        setError("Không thể tải chi tiết sản phẩm.");
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
      <DiscoverMore />
    </>
  );
};

export default ProductsDetail;
