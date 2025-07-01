import { Layout, Badge } from "antd";
import {
  PieChartOutlined,
  AppstoreFilled,
  ShoppingCartOutlined,
  UserOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  ClusterOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const iconStyle = {
  fontSize: "20px",
  color: "#555",
};

const activeStyle = {
  backgroundColor: "#eef1ff",
  borderRadius: "12px",
  color: "#3c5eff",
};

const AdminSidebar = () => {
  const location = useLocation();
  const current = location.pathname;

  const menuItems = [
    { to: "/admin", icon: <AppstoreFilled />, exact: true },
    { to: "/admin/productql", icon: <ShoppingCartOutlined /> },
    { to: "/admin/category", icon: <ClusterOutlined /> },
    { to: "/admin/users", icon: <UserOutlined /> },
    { to: "/admin/orders", icon: <FolderOpenOutlined /> },
    { to: "/admin/setting", icon: <SettingOutlined /> },
  ];

  return (
    <Sider
      width={70}
      theme="light"
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        borderRight: "1px solid #f0f0f0",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <PieChartOutlined style={iconStyle} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {menuItems.map(({ to, icon }) => (
            <Link to={to} key={to}>
              <div
                style={{
                  ...iconStyle,
                  ...(current === to ? activeStyle : {}),
                  padding: "8px",
                }}
              >
                {to.includes("productql") || to.includes("category") ? (
                  <Badge size="small" offset={[6, 0]}>
                    {icon}
                  </Badge>
                ) : (
                  icon
                )}
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            marginTop: "auto",
            paddingBottom: 10,
          }}
        >
          <div style={{ background: "#f5f5f5", padding: 8, borderRadius: "50%" }}>
            <CustomerServiceOutlined style={iconStyle} />
          </div>
          <div style={{ background: "#fff7e6", padding: 8, borderRadius: "50%" }}>
            <GiftOutlined style={{ ...iconStyle, color: "#fa8c16" }} />
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default AdminSidebar;
