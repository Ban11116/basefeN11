import { Heart, Minus, Plus } from "lucide-react";
import type { Product } from "../types";

interface ProductsProps {
  product: Product;
}

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const Products: React.FC<ProductsProps> = ({ product }) => {
  if (!product) {
    return <div className="text-white px-6 py-12">Loading product...</div>;
  }

  return (
    <div className="bg-[#2a2a2a] text-white min-h-screen px-6 py-12 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 flex justify-center items-start">
        <img
          src={product.image_url}
          alt={product.name}
          className="max-w-lg w-full object-contain -translate-y-10"
        />
      </div>

      <div className="flex-1 flex justify-start">
        <div className="max-w-xl space-y-6 -translate-x-10">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-300">{product.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-orange-400">★★★★★</div>
            <span className="text-sm text-gray-400">
              (90) <span className="underline">Reviews and Ratings</span>
            </span>
          </div>

          <div className="flex gap-4">
            <button className="flex flex-col items-center border border-gray-500 px-3 py-3 rounded text-white hover:bg-gray-700 w-28">
              <span className="text-sm font-medium">100 ml</span>
            </button>
            <button className="flex flex-col items-center border border-gray-500 px-3 py-3 rounded text-white hover:bg-gray-700 w-28">
              <span className="text-sm font-medium">150 ml</span>
            </button>
          </div>

          <div className="text-2xl font-semibold text-orange-400">
            {formatPrice(product.price)}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center border border-gray-500 rounded px-3 py-1">
              <button>
                <Minus size={16} />
              </button>
              <span className="px-4">1</span>
              <button>
                <Plus size={16} />
              </button>
            </div>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              Wish list
              <Heart size={18} />
            </button>
          </div>

          <button
            className={`px-12 py-3 rounded font-semibold ${
              product.total_stock > 0
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-600 text-white cursor-not-allowed"
            }`}
            disabled={product.total_stock === 0}
          >
            {product.total_stock === 0 ? "Out of Stock" : "Add to Bag"}
          </button>

          <div className="text-xs text-gray-400">
            <span className="mr-2">Afterpay</span> Shop now and pay later with 4 payments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
