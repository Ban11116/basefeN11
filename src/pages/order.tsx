import React from "react";

const Order = () => {
  return (
    <div className="bg-[#111] text-white px-4 py-8 md:py-12 max-w-7xl mx-auto">
      

      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm bạn đang đặt</h2>
        <div
  className="max-h-[400px] overflow-y-auto space-y-4 pr-2"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>

  <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#2b2b2b] p-4 rounded-md">
    <img
      src="image/products1.png"
      alt="Nước hoa CK One"
      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
    />
    <div className="flex-1 text-center sm:text-left">
      <p className="font-semibold">Nước hoa CK One 100ml</p>
      <p className="text-sm text-white/70">Số lượng: 1</p>
      <p className="text-sm text-white/70">Đơn giá: 850.000 ₫</p>
    </div>
    <div className="font-semibold text-orange-500 min-w-[100px] text-center sm:text-right">
      850.000 ₫
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#2b2b2b] p-4 rounded-md">
    <img
      src="image/products2.png"
      alt="Nước hoa Dior Sauvage"
      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
    />
    <div className="flex-1 text-center sm:text-left">
      <p className="font-semibold">Nước hoa Dior Sauvage 60ml</p>
      <p className="text-sm text-white/70">Số lượng: 2</p>
      <p className="text-sm text-white/70">Đơn giá: 2.450.000 ₫</p>
    </div>
    <div className="font-semibold text-orange-500 min-w-[100px] text-center sm:text-right">
      4.900.000 ₫
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#2b2b2b] p-4 rounded-md">
    <img
      src="image/products3.png"
      alt="Nước hoa Bleu de Chanel"
      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
    />
    <div className="flex-1 text-center sm:text-left">
      <p className="font-semibold">Nước hoa Bleu de Chanel 100ml</p>
      <p className="text-sm text-white/70">Số lượng: 1</p>
      <p className="text-sm text-white/70">Đơn giá: 2.750.000 ₫</p>
    </div>
    <div className="font-semibold text-orange-500 min-w-[100px] text-center sm:text-right">
      2.750.000 ₫
    </div>
  </div>
  
</div>


      </div>


      <form className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-xl font-semibold mb-4">Thông Tin Nhận Hàng</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border border-white/20 bg-[#222] p-2 rounded text-white" placeholder="Họ và tên*" />
            <input className="border border-white/20 bg-[#222] p-2 rounded text-white" placeholder="Số điện thoại*" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <select className="border border-white/20 bg-[#222] p-2 rounded text-white" defaultValue="">
              <option value="" disabled>Chọn Tỉnh / Thành phố*</option>
            </select>
            <select className="border border-white/20 bg-[#222] p-2 rounded text-white" defaultValue="">
              <option value="" disabled>Chọn Quận / Huyện*</option>
            </select>
            <select className="border border-white/20 bg-[#222] p-2 rounded text-white" defaultValue="">
              <option value="" disabled>Chọn Phường / Xã*</option>
            </select>
          </div>

          <input className="w-full border border-white/20 bg-[#222] p-2 rounded mt-4 text-white" placeholder="Địa chỉ*" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="border border-white/20 bg-[#222] p-2 rounded text-white" placeholder="Email" />
            <select className="border border-white/20 bg-[#222] p-2 rounded text-white">
              <option>Giao trong giờ hành chính</option>
            </select>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Thông Tin Quà Tặng</h2>
          <div className="flex items-start mt-2">
            <input type="checkbox" id="gift" className="mr-2 mt-1" />
            <label htmlFor="gift" className="text-sm leading-relaxed">
              Gửi quà tặng đến bạn bè, người thân 
              <br />
              <span className="text-orange-500">(30.000₫ bao gồm phí gói quà và thiệp)</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Mã Giảm Giá</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input className="flex-1 border border-white/20 bg-[#222] p-2 rounded text-white" placeholder="Nhập mã khuyến mãi" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">ÁP DỤNG</button>
          </div>

          <div className="mt-6 border-t border-white/20 pt-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Tạm tính:</span>
              <span>2.088.000 ₫</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Vận chuyển:</span>
              <span className="text-white/70">Vui lòng nhập địa chỉ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Điểm tích luỹ:</span>
              <span>20.880</span>
            </div>
            <div className="flex justify-between font-bold text-orange-500 text-base">
              <span>Tiền phải trả:</span>
              <span>2.088.000 ₫</span>
            </div>
            <p className="text-xs italic mt-1 text-white/60">
              (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <span className="text-sm">Tiền phải trả: <strong className="text-orange-500">1.598.000 ₫</strong></span>
            <div className="flex gap-2">
              <button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-black transition">← QUAY LẠI</button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">TIẾP TỤC</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
