import React, { useState } from "react";
import {
  Table,
  Tag,
  Input,
  Button,
  Select,
  Space,
  Typography,
  Dropdown,
  Menu,
  Row,
  Col,
} from "antd";
import {
  FilterOutlined,
  SearchOutlined,
  UserOutlined,
  AppstoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Title, Text } = Typography;

interface Product {
  key: string;
  name: string;
  category: string;
  price: string;
  stock: number | string;
  discount: string;
  value: string;
  status: "Published" | "Unpublished";
  image: string;
}

const initialProducts: Product[] = [
  {
    key: "1",
    name: "iPhone 13 Pro",
    category: "Gadgets",
    price: "₦1,225,000.00",
    stock: 8,
    discount: "₦0.00",
    value: "₦50,000.00",
    status: "Published",
    image: "📱",
  },
  {
    key: "2",
    name: "iPhone 13 Pro",
    category: "Gadgets",
    price: "₦725,000.00",
    stock: 12,
    discount: "₦0.00",
    value: "₦50,000.00",
    status: "Unpublished",
    image: "📱",
  },
  {
    key: "3",
    name: "Polo T-Shirt",
    category: "Fashion",
    price: "₦25,000.00",
    stock: 120,
    discount: "₦0.00",
    value: "₦0.00",
    status: "Published",
    image: "👕",
  },
  {
    key: "4",
    name: "Polo T-Shirt",
    category: "Fashion",
    price: "₦25,000.00",
    stock: "Out of Stock",
    discount: "₦0.00",
    value: "₦0.00",
    status: "Unpublished",
    image: "👕",
  },
];
const menu = (
  <Menu>
    <Menu.Item>This Week</Menu.Item>
    <Menu.Item>Last Week</Menu.Item>
  </Menu>
);
const ProductQl: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredProducts = initialProducts.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
    const matchesStatus = statusFilter ? item.status === statusFilter : true;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      render: () => <input type="checkbox" />,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      render: (text: string, record: Product) => (
        <Space>
          <span style={{ fontSize: 20 }}>{record.image}</span>
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
    },
    {
      title: "In-Stock",
      dataIndex: "stock",
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    {
      title: "Total Value",
      dataIndex: "value",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Select
          defaultValue="Publish"
          size="small"
          style={{ width: 100 }}
          suffixIcon={<DownOutlined />}
        >
          <Option value="publish">Publish</Option>
          <Option value="unpublish">Unpublish</Option>
        </Select>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: "Published" | "Unpublished") => (
        <Tag
          color={status === "Published" ? "#e6f4ff" : "#fff7e6"}
          style={{ color: status === "Published" ? "#1677ff" : "#fa8c16" }}
        >
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: "#f9fafc" }}>
 <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
  <Col>
    <Title level={5} style={{ margin: 0 }}>Inventory Summary</Title>
  </Col>
  <Link to="/admin/newproduct" aria-label="Them san pham">
          <Col>
    <Button type="primary">+ Add a New Product</Button>
  </Col>
          </Link>
  
</Row>
<Row gutter={16} style={{ marginBottom: 24 }} align="stretch">
        <Col flex={1.2}>
          <div
            style={{
              background: "#4E6AF3",
              borderRadius: 12,
              padding: 20,
              height: "100%",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <div
                style={{
                  background: "#f0f4ff",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <AppstoreOutlined style={{ fontSize: 24, color: "#4E6AF3" }} />
              </div>

              <div>
                <Text style={{ color: "#fff", fontSize: 14 }}>All Products</Text>
                <div style={{ fontSize: 22, fontWeight: 700 }}>350</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 4,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 14 }}>Active</Text>
              <div style={{ fontSize: 22, fontWeight: 700 }}>
                316 <span style={{ fontWeight: 400, fontSize: 16 }}>(90%)</span>
              </div>
            </div>
          </div>
        </Col>

        <Col flex={0.8}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}
            >
              <Dropdown overlay={menu} placement="bottomRight">
                <Text style={{ color: "#999", cursor: "pointer" }}>
                  This Week <DownOutlined />
                </Text>
              </Dropdown>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <div
                style={{
                  background: "#fff7f0",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <UserOutlined style={{ fontSize: 24, color: "#d32029" }} />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 32,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#d32029",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Low Stock Alert
                  </Text>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>23</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Text style={{ color: "#999", fontSize: 14 }}>Expired</Text>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>3</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Text style={{ color: "#999", fontSize: 14 }}>1 Star Rating</Text>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>2</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 600, minWidth: 150 }}>
          Inventory Items
        </Text>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by product name"
            value={searchText}
            onChange={handleSearchChange}
            style={{ width: 200, minWidth: 150 }}
            size="middle"
          />

          

          <Select
            placeholder="Filter by status"
            style={{ width: 160 }}
            allowClear
            onChange={(value) => setStatusFilter(value)}
            size="middle"
          >
            <Option value="Published">Published</Option>
            <Option value="Unpublished">Unpublished</Option>
          </Select>
        </div>
      </div>

      <Table
        rowSelection={{}}
        columns={columns}
        dataSource={filteredProducts}
        scroll={{ x: "max-content" }}
        pagination={{
          current: 1,
          pageSize: 10,
          total: filteredProducts.length,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default ProductQl;
