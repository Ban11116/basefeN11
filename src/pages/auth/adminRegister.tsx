import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PieChartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fc] px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <Tooltip title="Analytics" placement="right">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <PieChartOutlined style={{ fontSize: 24, color: '#1890ff' }} />
            </div>
          </Tooltip>
        </div>

        <h2 className="text-xl font-semibold">Get Started with <span className="text-blue-500">Metrix</span></h2>
        <p className="text-gray-500 text-sm mb-6">Create your free account</p> 

        <form className="space-y-4 text-left">

          <div className="relative">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-50 outline-none"
            />
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a Strong Password"
              className="w-full px-4 py-2 pl-10 pr-10 rounded-md bg-gray-50 outline-none"
            />
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/admin/login">
                    <span className="text-blue-500 hover:underline">
                      Login
                    </span>
                    </Link>
                    
        </p>
      </div>
    </div>
  );
}
