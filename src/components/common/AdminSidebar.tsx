import { Layout, Badge, Tooltip } from 'antd';
import {
  PieChartOutlined,
  AppstoreFilled,
  ShoppingCartOutlined,
  UserOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const iconStyle = {
  fontSize: '20px',
  color: '#555',
};

const activeStyle = {
  backgroundColor: '#eef1ff',
  borderRadius: '12px',
  color: '#3c5eff',
};

const AdminSidebar = () => {
  const location = useLocation();
  const current = location.pathname;

  return (
    <Sider
      width={70}
      theme="light"
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        borderRight: '1px solid #f0f0f0',
        padding: '12px 0',
      }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
          <Tooltip title="Analytics" placement="right">
            <PieChartOutlined style={iconStyle} />
          </Tooltip>
          <div
            style={{
              ...iconStyle,
              ...(current === '/admin' ? activeStyle : {}),
              padding: '8px',
            }}
          >
            <Link to="/admin" aria-label="thong ke">
          <AppstoreFilled />
          </Link>
        
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Link to="/admin/productql" aria-label="ql san pham">
          <Badge size="small" offset={[6, 0]}>
            <ShoppingCartOutlined style={iconStyle} />
          </Badge>
          </Link>
          
          <Link to="/admin/users" aria-label="Ng dùng">
          <UserOutlined style={iconStyle} />
          </Link>
          <Link to="/admin/orders" aria-label="don hang">
          <FolderOpenOutlined style={iconStyle} />
          </Link>
          
          
          <Link to="/admin/setting" aria-label="Tai khoan">
          <SettingOutlined style={iconStyle} />
          </Link>
          
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
            marginTop: 'auto',
            paddingBottom: 10,
          }}
        >
          <div style={{ background: '#f5f5f5', padding: 8, borderRadius: '50%' }}>
            <CustomerServiceOutlined style={iconStyle} />
          </div>
          <div style={{ background: '#fff7e6', padding: 8, borderRadius: '50%' }}>
            <GiftOutlined style={{ ...iconStyle, color: '#fa8c16' }} />
          </div>
          <div style={{ background: '#ffe7e7', padding: 6, borderRadius: '50%' }}>
            <LogoutOutlined style={{ color: '#f5222d', fontSize: 18 }} />

          </div>
        </div>
      </div>
    </Sider>
  );
};

export default AdminSidebar;
