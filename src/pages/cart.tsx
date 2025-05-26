import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-[#1c1c1c] text-white min-h-screen">
      <h1 className="text-xl font-bold flex items-center gap-2 mb-6 text-orange-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13m-11 0a1 1 0 001 1h6a1 1 0 001-1m-8 0h8"
          />
        </svg>
        Giỏ hàng của bạn
      </h1>

      <div className="overflow-x-auto bg-[#2b2b2b] rounded-md shadow-md max-h-[400px] overflow-y-auto">
  <div className="min-w-[600px]">
    <table className="w-full border text-sm text-left text-white">
            <thead className="bg-[#333] text-orange-300">
              <tr>
                <th className="p-3">SẢN PHẨM</th>
                <th className="p-3">GIÁ</th>
                <th className="p-3">SỐ LƯỢNG</th>
                <th className="p-3">THÀNH TIỀN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr><tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
              <tr className="border-t border-[#444]">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src="image/products1.png"
                    alt="Nước hoa CK One 100ml"
                    className="w-16 h-16 object-cover rounded"
                  />
                  Nước hoa CK One 100ml
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={1}
                    className="w-16 sm:w-20 border border-gray-500 bg-[#1c1c1c] text-white px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 text-orange-400">850.000 ₫</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-right sm:text-left">
        <span className="font-bold text-lg text-orange-500">
          Tạm tính: 1.050.000 ₫
        </span>
        <Link to="/order" className="w-full sm:w-auto">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded w-full sm:w-auto transition">
            MUA NGAY
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4 text-orange-400">
          Sản phẩm bạn đã xem
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="bg-[#2a2a2a] border border-[#444] p-4 text-sm text-center rounded shadow hover:shadow-lg transition"
            >
              <img
                src={`image/products${num}.png`}
                alt={`sp-${num}`}
                className="mx-auto w-full h-40 object-cover rounded"
              />
              <p className="mt-3 font-medium text-white">Nước hoa demo {num}</p>
              <p className="text-orange-500 font-bold">999.000 ₫</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
