import axiosInstance from "../../utils/axios.util";

export const fetchAllProducts = async (page = 1, limit = 5) => {
  const response = await axiosInstance.get(`/products?page=${page}&limit=${limit}`);
  return response.data;
};


export const fetchProductById = async (productId: string) => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
};

export const createProduct = async (payload: any) => {
  const response = await axiosInstance.post("/products", payload);
  return response.data;
};

export const updateProduct = async (productId: string, payload: any) => {
  const response = await axiosInstance.put(`/products/${productId}`, payload);
  return response.data;
};

export const softDeleteProduct = async (productId: string) => {
  const response = await axiosInstance.delete(`/products/soft/${productId}`);
  return response.data;
};

export const restoreProduct = async (productId: string) => {
  const response = await axiosInstance.patch(`/products/restore/${productId}`);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data;
};
