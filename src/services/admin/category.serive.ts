import axiosInstance from "../../utils/axios.util";
import type { Category } from "../../types/admin/category.type";

const API_URL = "/categories";

export const getAllCategories = async (
  search?: string,
  deleted?: boolean
): Promise<Category[]> => {
  try {
    const params: Record<string, any> = {};
    if (search) params.search = search;
    if (deleted !== undefined) params.deleted = deleted;

    const response = await axiosInstance.get(API_URL, { params });
    return response.data.data;
  } catch {
    throw new Error("Không thể tải danh mục.");
  }
};

export const createCategory = async (
  payload: { name: string; description?: string }
): Promise<Category> => {
  try {
    const response = await axiosInstance.post(API_URL, payload);
    return response.data.data;
  } catch {
    throw new Error("Không thể tạo danh mục mới.");
  }
};

export const updateCategory = async (
  id: string,
  updatedData: Partial<Category>
): Promise<Category> => {
  try {
    const cleanData = Object.fromEntries(
      Object.entries(updatedData).filter(([_, v]) => v !== undefined && v !== null)
    );
    const response = await axiosInstance.put(`${API_URL}/${id}`, cleanData);
    return response.data.data;
  } catch {
    throw new Error("Không thể cập nhật danh mục.");
  }
};
