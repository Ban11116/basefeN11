import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Spin,
  message,
  Typography,
  Space,
} from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { getDashboardData } from "../../services/admin/dashboard.serive";
import { getAllOrders } from "../../services/admin/order.serive";

const { Title } = Typography;
const COLORS = ["#4B70E2", "#F3B03C", "#10B981", "#EF4444", "#6366F1"];

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboardData();
        const orders = await getAllOrders();

        const ordersByStatus = orders.reduce((acc: Record<string, number>, order: any) => {
          acc[order.status] = (acc[order.status] || 0) + 1;
          return acc;
        }, {});
        res.ordersByStatus = ordersByStatus;

        const revenueMap = new Map<string, number>();
        const countMap = new Map<string, number>();

        orders.forEach((order: any) => {
          const date = new Date(order.order_date).toLocaleDateString("vi-VN");
          revenueMap.set(date, (revenueMap.get(date) || 0) + (order.total_price || 0));
          countMap.set(date, (countMap.get(date) || 0) + 1);
        });

        res.salesByDay = Array.from(revenueMap.entries())
          .map(([date, total]) => ({ date, total }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        res.ordersByDay = Array.from(countMap.entries())
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setData(res);
      } catch {
        message.error("Không thể tải dữ liệu dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spin tip="Đang tải dữ liệu..." style={{ width: "100%" }} />;
  if (!data) return <p style={{ color: "red" }}>Không có dữ liệu dashboard.</p>;

  const statCards = [
    {
      title: "Tổng đơn hàng",
      value: data.totalOrders,
      icon: <ShoppingCartOutlined style={{ color: "#4B70E2" }} />,
      color: "#E0EDFF",
    },
    {
      title: "Tổng người dùng",
      value: data.totalUsers,
      icon: <UserOutlined style={{ color: "#10B981" }} />,
      color: "#D1FAE5",
    },
    {
      title: "Tổng doanh thu",
      value: `$${data.totalRevenue?.toFixed(2)}`,
      icon: <DollarCircleOutlined style={{ color: "#F59E0B" }} />,
      color: "#FEF3C7",
    },
    {
      title: "Đơn hàng hôm nay",
      value: data.todayOrders,
      icon: <ShoppingOutlined style={{ color: "#6366F1" }} />,
      color: "#E0E7FF",
    },
  ];

  const pieData = Object.entries(data.ordersByStatus || {}).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  return (
    <div style={{ padding: 24 }}>
      <Title level={3} style={{ marginBottom: 24 }}>📊 Thống kê tổng quan</Title>

      <Row gutter={[16, 16]}>
        {statCards.map((card, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card style={{ backgroundColor: card.color, border: "none", borderRadius: 10 }}>
              <Space align="center">
                {card.icon}
                <Statistic title={card.title} value={card.value} />
              </Space>
            </Card>
          </Col>
        ))}

        <Col xs={24} md={12}>
          <Card title="📦 Trạng thái đơn hàng" style={{ borderRadius: 10 }}>
            {pieData.length ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    label
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <ReTooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p>Không có dữ liệu trạng thái đơn hàng.</p>
            )}
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="💰 Doanh thu theo ngày" style={{ borderRadius: 10 }}>
            {data.salesByDay?.length ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.salesByDay}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ReTooltip formatter={(v: number) => `$${v.toFixed(2)}`} />
                  <Bar dataKey="total" fill="#4B70E2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p>Không có dữ liệu doanh thu.</p>
            )}
          </Card>
        </Col>

        <Col xs={24}>
          <Card title="🧾 Số đơn hàng theo ngày" style={{ borderRadius: 10 }}>
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 800 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.ordersByDay}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <ReTooltip formatter={(v: number) => `${v} đơn`} />
                    <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
