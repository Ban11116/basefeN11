import axiosInstance from "../../utils/axios.util";

export const getDashboardData = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/summary");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching dashboard data:", error);
    throw error;
  }
};
