import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-base text-black mb-1">Welcome !</h2>
        <h1 className="text-2xl font-bold text-black mb-1">Sign in to</h1>
        <p className="text-sm text-gray-600 mb-6">Lorem Ipsum is simply</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">User name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 outline-none"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm mt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an Account?{" "}
          <Link to="/register">
          <span className="text-black font-semibold cursor-pointer hover:underline">
            Register
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
