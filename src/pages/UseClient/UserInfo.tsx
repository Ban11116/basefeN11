import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserInfo {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    dob: string;
}

const UserInfo = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const storedInfo = localStorage.getItem('userInfo');
        if (storedInfo) {
            setUserInfo(JSON.parse(storedInfo));
        }
    }, []);

    const handleEdit = () => {
        navigate('/editUser');
    };

    if (!userInfo) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black">
                <div className="text-white">Không tìm thấy thông tin người dùng</div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black px-4">
            <div className="w-full max-w-md bg-[#1f1f1f] p-6 rounded-xl shadow-lg">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    <img
                        alt="User avatar"
                        className="rounded-full object-cover w-[100px] h-[100px]"
                        src="https://storage.googleapis.com/a1aa/image/d3007ba6-3313-4397-1fc0-f2c7a89c25ce.jpg"
                    />
                </div>

                {/* User Information */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Họ và tên</h3>
                        <p className="text-white font-semibold">{userInfo.fullname}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Email</h3>
                        <p className="text-white font-semibold">{userInfo.email}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Số điện thoại</h3>
                        <p className="text-white font-semibold">{userInfo.phone}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Địa chỉ</h3>
                        <p className="text-white font-semibold">{userInfo.address}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Giới tính</h3>
                        <p className="text-white font-semibold">{userInfo.gender}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-white/70 mb-1">Ngày sinh</h3>
                        <p className="text-white font-semibold">{userInfo.dob}</p>
                    </div>
                </div>

                {/* Edit Button */}
                <div className="mt-6">
                    <button
                        onClick={handleEdit}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                    >
                        Chỉnh sửa thông tin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo; 