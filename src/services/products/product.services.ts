import axios from "axios";
import type { Product } from "../../types";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async (
  search?: string,
  page: number = 1,
  limit: number = 12
): Promise<Product[]> => {
  try {
    const params: Record<string, any> = { page, limit };
    if (search) params.search = search;

    const response = await axios.get(`${API_URL}/products`, { params });

    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch {
    return [];
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API_URL}/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.product;
};
