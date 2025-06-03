import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { AdminHeader } from '../common/AdminHeader';
import AdminSidebar from '../common/AdminSidebar';


const { Content } = Layout;

export const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSidebar />
      <Layout style={{ marginLeft: 70 }}>
        <AdminHeader />
        <Content
          className="p-6 bg-gray-100"
          style={{
            overflowY: 'auto',
            height: '100vh',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
