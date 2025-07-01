import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getTitleFromPath = (pathname: string): string => {
  if (pathname.includes('/users')) return 'Quản lý người dùng';
  if (pathname.includes('/orders/:orderId')) return 'Chi tiết đơn hàng';
  if (pathname.includes('/orders')) return 'Quản lý đơn hàng';
  if (pathname.includes('/productql')) return 'Quản lý sản phẩm';
  if (pathname.includes('/newproduct')) return 'Thêm sản phẩm';
  if (pathname.includes('/category')) return 'Quản lý danh mục';
  if (pathname.includes('/newcategory')) return 'Thêm danh mục';
  if (pathname.includes('/setting')) return 'Cài đặt';
  if (pathname.includes('/login')) return 'Đăng nhập';
  if (pathname.includes('/register')) return 'Đăng ký';
  return 'Thống kê';
};

export const AdminHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = getTitleFromPath(location.pathname);

  const [user, setUser] = useState<{
    name?: string;
    storeName?: string;
    avatar?: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Lỗi parse user:", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b">
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
      <Dropdown overlay={menu}>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>{user?.storeName || user?.name || "Tài khoản"}</span>
          <DownOutlined />
          <Avatar src={user?.avatar || "https://i.pravatar.cc/300"} />
        </div>
      </Dropdown>
    </div>
  );
};
