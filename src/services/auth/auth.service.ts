import axiosInstance from "../../utils/axios.util";
import { notification } from "../../utils/notification.util";

const handleError = (err: any, defaultMsg: string) => {
  const errorData = err?.response?.data;

  if (errorData?.errors && Array.isArray(errorData.errors)) {
    const messages = errorData.errors.map((e: any) => e.msg || e.message).join(", ");
    throw new Error(messages);
  } else if (errorData?.message) {
    throw new Error(errorData.message);
  } else if (err.message) {
    throw new Error(err.message);
  } else {
    throw new Error(`${defaultMsg} - Unknown error`);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email: email.trim(),
      password,
    });

    const { accessToken, user, token } = response.data;
    const finalToken = accessToken || token;

    if (!finalToken) throw new Error("No token received from server");

    localStorage.setItem("token", finalToken);
    localStorage.setItem("user", JSON.stringify(user));

    notification.success("Đăng nhập thành công!");
    return user;
  } catch (err: any) {
    handleError(err, "Đăng nhập thất bại");
  }
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
}) => {
  try {
    const cleanData = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password,
      ...(data.phone && { phone: data.phone.trim() }),
      ...(data.address && { address: data.address.trim() }),
    };

    const response = await axiosInstance.post("/auth/register", cleanData);
    notification.success("Đăng ký thành công!");
    return response.data;
  } catch (err: any) {
    handleError(err, "Đăng ký thất bại");
  }
};

export const sendOtp = async (email: string) => {
  try {
    await axiosInstance.post("/auth/send-otp", {
      email: email.trim(),
    });

    notification.success("OTP đã được gửi đến email của bạn");
  } catch (err: any) {
    handleError(err, "Gửi OTP thất bại");
  }
};

export const resetPassword = async (data: {
  email: string;
  otp: string;
  newPassword: string;
}) => {
  try {
    const cleanData = {
      email: data.email.trim(),
      otp: data.otp.trim(),
      newPassword: data.newPassword,
    };

    await axiosInstance.post("/auth/reset-password", cleanData);
    notification.success("Mật khẩu đã được đặt lại thành công");
  } catch (err: any) {
    handleError(err, "Đặt lại mật khẩu thất bại");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  notification.info("Đã đăng xuất thành công");
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return !!(token && user);
};

export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
};
