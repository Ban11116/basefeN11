import React from 'react';
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
type Props = {}

const Header = (props: Props) => {
  return (
    <header className="bg-[#1d1d1d] text-white py-4 w-full shadow-md sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-500">Local Face</h1>
        
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <div className="flex items-center gap-4 text-xl">
          <FiSearch />
          <FiUser />
          <FiHeart />
          <FiShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Header
