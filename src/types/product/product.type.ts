export interface Product {
  _id: string; // MongoDB tự sinh
  product_id: string;
  name: string;
  description?: string;
  price: number;
  brand_id: string;       // hoặc: Brand nếu populate
  category_id: string;    // hoặc: Category nếu populate
  image_url?: string;
  stock_quantity: number;
  createdAt: string;      // ISO date string
  updatedAt: string;      // ISO date string
}
