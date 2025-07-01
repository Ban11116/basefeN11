import axiosInstance from "../../utils/axios.util";
import { notification } from "../../utils/notification.util";
import type { User, UpdateUserData } from "../../types/admin/user.type";

export const fetchAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get("/users");
    const users = response.data?.data || response.data;
    if (!Array.isArray(users)) {
      notification.error("Dữ liệu trả về không hợp lệ");
      return [];
    }
    return users;
  } catch (error: any) {
    if (error.response?.status === 403) {
      notification.error("Không có quyền truy cập danh sách người dùng");
    } else if (error.response?.status === 401) {
      notification.error("Phiên đăng nhập đã hết hạn");
    } else {
      notification.error("Không thể tải danh sách người dùng");
    }
    return [];
  }
};

export const updateUser = async (
  id: string,
  updatedData: UpdateUserData
): Promise<User> => {
  try {
    const { email, ...rest } = updatedData;
    const cleanData = Object.entries(rest).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {} as any);

    if (Object.keys(cleanData).length === 0) {
      throw new Error("Không có dữ liệu để cập nhật");
    }

    const response = await axiosInstance.put(`/users/${id}`, cleanData);
    const updatedUser = response.data?.data || response.data;
    notification.success("Cập nhật người dùng thành công");
    return updatedUser;
  } catch (error: any) {
    const errorData = error?.response?.data;
    if (errorData?.errors && Array.isArray(errorData.errors)) {
      const errorMessages = errorData.errors.map((err: any) =>
        `${err.msg || err.message || "Lỗi validation"}`
      ).join(", ");
      notification.error(`Lỗi validation: ${errorMessages}`);
    } else if (errorData?.message) {
      notification.error(errorData.message);
    } else if (error.response?.status === 403) {
      notification.error("Không có quyền cập nhật người dùng này");
    } else if (error.response?.status === 404) {
      notification.error("Không tìm thấy người dùng");
    } else {
      notification.error("Không thể cập nhật người dùng");
    }
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/users/${id}`);
    notification.success("Xóa người dùng thành công");
  } catch (error: any) {
    if (error.response?.status === 403) {
      notification.error("Không có quyền xóa người dùng này");
    } else if (error.response?.status === 404) {
      notification.error("Không tìm thấy người dùng");
    } else {
      notification.error("Không thể xóa người dùng");
    }
    throw error;
  }
};

export const getUserById = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data?.data || response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      notification.error("Không tìm thấy người dùng");
    } else {
      notification.error("Không thể tải thông tin người dùng");
    }
    throw error;
  }
};
