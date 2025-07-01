import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

type User = {
  email: string;
  [key: string]: any;
};

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="bg-[#1d1d1d] text-white py-4 w-full shadow-md sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-500">Local Face</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="/service">Services</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <div className="flex items-center gap-4 text-xl">
          {user ? (
            <>
              <span className="text-sm hidden md:inline">👋 {user.email}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-400 hover:underline"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login" aria-label="Đăng nhập">
              <FiUser />
            </Link>
          )}

          <FiHeart />
          <Link to="/cart" aria-label="Giỏ hàng">
            <FiShoppingBag />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
