export interface ProductVariant {
  _id: string;
  product_id: string;
  volume: number;
  price: number;
  stock_quantity: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  total_stock: number;
  brand_id: string;
  category_id: string;
  // Optional:
  is_deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  
}


export interface ProductListResponse {
  page: number;
  total: number;
  data: Product[];
}

export interface ProductDetailResponse {
  success: boolean;
  data: Product;
  message?: string;
}