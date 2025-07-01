import axiosInstance from "../../utils/axios.util";
import type { Order } from "../../types/admin/order.type";

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const response = await axiosInstance.get("/orders");
    const data = response.data?.data || response.data?.orders;
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export const getOrderById = async (orderId: string): Promise<Order | null> => {
  try {
    const response = await axiosInstance.get("/orders");
    const allOrders: Order[] = response.data?.data || [];
    return allOrders.find((o) => o._id === orderId) || null;
  } catch {
    return null;
  }
};

export const updateOrderStatus = async (
  orderId: string,
  status: string
): Promise<Order | null> => {
  try {
    const response = await axiosInstance.patch(`/orders/${orderId}`, { status });
    return response.data?.data || null;
  } catch {
    return null;
  }
};
