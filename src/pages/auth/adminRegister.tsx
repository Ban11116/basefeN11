import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import { register } from "../../services/auth/auth.service";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidVietnamesePhone = (phone: string) =>
    /^(0[3|5|7|8|9])[0-9]{8}$/.test(phone);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidVietnamesePhone(form.phone)) {
      message.error("Số điện thoại không hợp lệ (VD: 09xxxxxxxx)");
      return;
    }

    if (form.address.length > 200) {
      message.error("Địa chỉ không được vượt quá 200 ký tự");
      return;
    }

    setLoading(true);
    try {
      await register(form);
      message.success("Đăng ký thành công!");
      navigate("/admin/login");
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fc] px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <Tooltip title="Analytics" placement="right">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <PieChartOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            </div>
          </Tooltip>
        </div>

        <h2 className="text-xl font-semibold">
          Get Started with{" "}
          <span className="text-blue-500 font-bold">Metrix</span>
        </h2>
        <p className="text-gray-500 text-sm mb-6">Create your free account</p>

        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a Strong Password"
              required
              className="w-full px-4 py-2 pl-10 pr-10 rounded-md bg-gray-50 outline-none"
            />
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <span
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              📞
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              🏠
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            {loading ? "Đang đăng ký..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/admin/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
