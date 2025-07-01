import React, { useState } from "react";
import { Tooltip, message } from "antd";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { register } from "../../services/auth/auth.service";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
};

const initialFormState: RegisterForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
};

const ClientRegister: React.FC = () => {
  const [form, setForm] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidVietnamesePhone = (phone: string) =>
    /^(0[3|5|7|8|9])[0-9]{8}$/.test(phone);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      return message.error("Vui lòng nhập đầy đủ họ tên và email.");
    }

    if (form.password !== form.confirmPassword) {
      return message.error("Mật khẩu không khớp.");
    }

    if (!isValidVietnamesePhone(form.phone)) {
      return message.error("Số điện thoại không hợp lệ (VD: 09xxxxxxxx)");
    }

    if (form.address.length > 200) {
      return message.error("Địa chỉ không được vượt quá 200 ký tự");
    }

    try {
      setLoading(true);
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        phone: form.phone,
        address: form.address,
        role: "user",
      });
      message.success("Đăng ký thành công!");
      navigate("/login");
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Đăng ký thất bại.";
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fc] px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <Tooltip title="User Register">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <UserOutlined style={{ fontSize: 24, color: "#52c41a" }} />
            </div>
          </Tooltip>
        </div>

        <h2 className="text-xl font-semibold">
          Get Started with <span className="text-green-500">Client Portal</span>
        </h2>
        <p className="text-gray-500 text-sm mb-6">Create your free account</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {[
            {
              name: "name",
              icon: <FaUser />,
              placeholder: "Full Name",
              type: "text",
            },
            {
              name: "email",
              icon: <FaEnvelope />,
              placeholder: "Email Address",
              type: "email",
            },
            {
              name: "password",
              icon: <FaLock />,
              placeholder: "Password",
              type: showPassword ? "text" : "password",
              showToggle: true,
            },
            {
              name: "confirmPassword",
              icon: <FaLock />,
              placeholder: "Confirm Password",
              type: "password",
            },
            {
              name: "phone",
              icon: "📞",
              placeholder: "Phone Number",
              type: "text",
            },
            {
              name: "address",
              icon: "🏠",
              placeholder: "Address",
              type: "text",
            },
          ].map(({ name, icon, placeholder, type, showToggle }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={form[name as keyof RegisterForm]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
              />
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                {icon}
              </span>
              {showToggle && (
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            {loading ? "Đang đăng ký..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClientRegister;
