import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormErrors {
  fullname?: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
  dob?: string;
}

const EditUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    gender: 'Nam',
    dob: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Load user information when component mounts
  useEffect(() => {
    const storedInfo = localStorage.getItem('userInfo');
    if (storedInfo) {
      try {
        const parsedInfo = JSON.parse(storedInfo);
        setFormData(parsedInfo);
      } catch (error) {
        console.error('Error parsing stored user info:', error);
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate fullname
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Vui lòng nhập họ và tên';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại phải có 10 chữ số';
      isValid = false;
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ';
      isValid = false;
    }

    // Validate dob
    if (!formData.dob) {
      newErrors.dob = 'Vui lòng chọn ngày sinh';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Lưu thông tin vào localStorage
      localStorage.setItem('userInfo', JSON.stringify(formData));

      // Hiển thị thông báo thành công
      toast.success('Cập nhật thông tin thành công!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background: '#1f1f1f',
          color: '#fff',
          border: '1px solid #4CAF50',
        },
      });

      // Chuyển hướng sau khi hiển thị thông báo
      setTimeout(() => {
        navigate('/userInfo');
      }, 2000);
    }
  };

  const handleCancel = () => {
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      address: '',
      gender: 'Nam',
      dob: '',
    });
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full max-w-md bg-[#1f1f1f] p-6 rounded-xl shadow-lg overflow-y-auto max-h-[95vh]">

        {/* Breadcrumb */}
        <nav className="text-[12px] text-white/70 mb-4">
          <ul className="flex space-x-2">
            <li><a className="hover:underline" href="#">Home</a></li>
            <li>/</li>
            <li><a className="hover:underline" href="#">About Us</a></li>
            <li></li>
            <li className="text-white"></li>
          </ul>
        </nav>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            alt="Black cat cartoon logo with white circular background"
            className="rounded-full object-cover w-[100px] h-[100px]"
            src="https://storage.googleapis.com/a1aa/image/d3007ba6-3313-4397-1fc0-f2c7a89c25ce.jpg"
          />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="block text-sm text-white mb-1 font-semibold">Họ và tên</label>
            <input
              id="fullname"
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
              className={`w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white ${errors.fullname ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1 font-semibold">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập email"
              className={`w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white ${errors.email ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-white mb-1 font-semibold">Số điện thoại</label>
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
              className={`w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white ${errors.phone ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm text-white mb-1 font-semibold">Địa chỉ</label>
            <input
              id="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Nhập địa chỉ"
              className={`w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white ${errors.address ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm text-white mb-1 font-semibold">Giới tính</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white"
            >
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm text-white mb-1 font-semibold">Ngày sinh</label>
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md bg-[#3a3b37] text-white focus:ring-2 focus:ring-white ${errors.dob ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
            >
              Lưu
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
