import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-base text-black mb-1">Welcome !</h2>
        <h1 className="text-2xl font-bold text-black mb-1">Sign up to</h1>
        <p className="text-sm text-gray-600 mb-6">Lorem Ipsum is simply</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
            />
          </div>

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

          <div>
            <label className="block text-sm text-black mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your Password"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 outline-none"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mt-4"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an Account?{" "}
          <Link to="/login">
          <span className="text-black font-semibold cursor-pointer hover:underline">
            Login
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
