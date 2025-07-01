export interface OrderProduct {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

export interface Order {
  _id: string;
  user?: {
    _id: string;
    name: string;
    email: string;
  };
  products?: OrderProduct[];
  total_price?: number;
  order_date?: string;
  shipping_address?: string;
  note?: string;
  status?: string;
}
