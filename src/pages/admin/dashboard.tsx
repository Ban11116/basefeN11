import { Card, Row, Col, Statistic, Select, Grid } from 'antd';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

const { Option } = Select;
const { useBreakpoint } = Grid;

const pieData = [
  { name: 'Acquisition', value: 40 },
  { name: 'Purchase', value: 30 },
  { name: 'Retention', value: 30 }
];

const COLORS = ['#4B70E2', '#F3B03C', '#CBD5E1'];

const chartData = [
  { name: 'Sept 10', sales: 30000 },
  { name: 'Sept 11', sales: 40000 },
  { name: 'Sept 12', sales: 100000 },
  { name: 'Sept 13', sales: 70000 },
  { name: 'Sept 14', sales: 90000 },
  { name: 'Sept 15', sales: 80000 },
  { name: 'Sept 16', sales: 95000 }
];

const orders = Array.from({ length: 12 }, (_, i) => ({
  key: i + 1,
  image: 'https://images.pexels.com/photos/1795692/pexels-photo-1795692.jpeg',
  name: 'Matcha Latte',
  price: '₦730,000.00',
  date: '12 Sept 2022',
  status: i % 3 === 0 ? 'Pending' : 'Completed'
}));

const Dashboard = () => {
  const screens = useBreakpoint();

  return (
    
    <div style={{ padding: 16, maxWidth: '100%' }}>
      <Row gutter={[16, 16]}>
        {/* Statistics Cards */}
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card>
            <Statistic title="Sales" value="₦4,000,000.00" />
            <Statistic
              title="Volume"
              value={450}
              suffix={<span style={{ color: '#52c41a' }}>+20%</span>}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card>
            <Statistic title="Customers" value={1250} suffix={<span style={{ color: '#52c41a' }}>+15.80%</span>} />
            <Statistic title="Active" value={1180} suffix={<span style={{ color: '#52c41a' }}>85%</span>} />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card>
            <Statistic title="All Orders" value={450} />
            <Row gutter={8}>
              <Col span={12}>
                <Statistic title="Pending" value={5} />
              </Col>
              <Col span={12}>
                <Statistic title="Completed" value={445} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="Marketing">
                <ResponsiveContainer width="100%" height={197}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12 }}>
                  <span style={{ color: '#4B70E2' }}>Acquisition</span>
                  <span style={{ color: '#F3B03C' }}>Purchase</span>
                  <span style={{ color: '#CBD5E1' }}>Retention</span>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card style={{ backgroundColor: '#4B70E2', color: 'white' }}>
                <div>
                  <h4>All Products</h4>
                  <h2>45</h2>
                  <div style={{ marginTop: 8 }}>
                    <p>Active</p>
                    <h3>32 <span style={{ color: '#52c41a' }}>+24%</span></h3>
                  </div>
                </div>
              </Card>

              <Card extra={<div style={{ fontSize: 13 }}>This Week</div>}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ color: '#cf1322', fontSize: 12 }}>Abandoned Cart</p>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <span style={{ fontSize: 16, color: '#cf1322', marginRight: 6 }}>20%</span>
                      <span style={{ color: '#52c41a', fontSize: 12 }}>+0.00%</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 12 }}>Customers</p>
                    <span style={{ fontSize: 16 }}>30</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24}>
              <Card
                title="Summary"
                extra={
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Select defaultValue="Sales" size="small" style={{ width: 100 }}>
                      <Option value="Sales">Sales</Option>
                    </Select>
                    <Select defaultValue="Last 7 Days" size="small" style={{ width: 120 }}>
                      <Option value="Last 7 Days">Last 7 Days</Option>
                    </Select>
                  </div>
                }
              >
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#4B70E2" barSize={20} radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
        </Col>

     
        <Col xs={24} lg={8}>
  <Card
    title="Recent Orders"
    style={{
      maxHeight: '107vh',
      overflowY: 'auto',
      padding: 0,
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}
    bodyStyle={{ padding: 0 }}
  >
    {orders.map(order => (
      <div
        key={order.key}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
          borderBottom: '1px solid #f0f0f0'
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <img
            src={order.image}
            alt={order.name}
            style={{ width: 36, height: 36, borderRadius: 4, objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 500 }}>{order.name}</div>
            <div style={{ fontSize: 12, color: '#666' }}>{order.price} × 1</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontWeight: 500,
            color: order.status === 'Completed' ? '#52c41a' : '#faad14'
          }}>
            {order.status}
          </div>
          <div style={{ fontSize: 12, color: '#666' }}>{order.date}</div>
        </div>
      </div>
    ))}
  </Card>
</Col>

      </Row>
    </div>
  );
};

export default Dashboard;
