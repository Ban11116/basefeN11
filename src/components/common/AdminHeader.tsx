import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const menu = (
  <Menu>
    <Menu.Item key="1">Logout</Menu.Item>
  </Menu>
);

const getTitleFromPath = (pathname: string): string => {
  if (pathname.includes('/users')) return 'Quản lý người dùng';
  if (pathname.includes('/orders')) return 'Quản lý đơn hàng';
  if (pathname.includes('/orders/:orderId')) return 'Chi tiết đơn hàng';
  if (pathname.includes('/setting')) return 'Setting';
  if (pathname.includes('/productql')) return 'Quản lý sản phẩm';
  if (pathname.includes('/newproduct')) return 'Thêm sản phẩm';
  if (pathname.includes('/setting')) return 'Setting';
  if (pathname.includes('/login')) return 'Login';
  if (pathname.includes('/register')) return 'Register';
  if (pathname.includes('/category')) return 'Quản lý danh mục';
  if (pathname.includes('/newcategory')) return 'Thêm danh mục';







  return 'Quản lý thống kế';
};

export const AdminHeader = () => {
  const location = useLocation();
  const pageTitle = getTitleFromPath(location.pathname);

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b">
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()} className="flex items-center space-x-2">
          <span>Nanny’s Shop</span>
          <DownOutlined />
          <Avatar src="https://i.pravatar.cc/300" />
        </a>
      </Dropdown>
    </div>
  );
};
