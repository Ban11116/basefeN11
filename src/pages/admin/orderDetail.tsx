import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Input,
  Select,
  Card,
  Space,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const orderItems = [
  {
    key: "1",
    name: "iPhone 13 Pro",
    unitPrice: "₦25,000.00",
    qty: 2,
    discount: "₦0.00",
    total: "₦50,000.00",
    status: "Pending",
    image: "https://cdn-icons-png.flaticon.com/512/831/831682.png",
  },
  {
    key: "2",
    name: "iPhone 14 Pro",
    unitPrice: "₦25,000.00",
    qty: 2,
    discount: "₦0.00",
    total: "₦50,000.00",
    status: "Completed",
    image: "https://cdn-icons-png.flaticon.com/512/831/831682.png",
  },
  {
    key: "3",
    name: "iPhone 15 Pro",
    unitPrice: "₦25,000.00",
    qty: 2,
    discount: "₦0.00",
    total: "₦50,000.00",
    status: "In-Progress",
    image: "https://cdn-icons-png.flaticon.com/512/831/831682.png",
  },
];

const statusColors: Record<string, string> = {
  Pending: "orange",
  Completed: "green",
  "In-Progress": "blue",
};

const OrderDetail: React.FC = () => {
  const [data, setData] = useState(orderItems);

  const handleStatusChange = (key: string, newStatus: string) => {
    const newData = data.map((item) =>
      item.key === key ? { ...item, status: newStatus } : item
    );
    setData(newData);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Space>
          <img
            src={record.image}
            alt="product"
            style={{ width: 32, height: 32, objectFit: "cover" }}
          />
          <span>{record.name}</span>
        </Space>
      ),
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Order Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Change Status",
      dataIndex: "status",
      key: "action",
      render: (status: string, record: any) => (
        <Select
          value={status}
          style={{ width: 130 }}
          size="small"
          onChange={(value) => handleStatusChange(record.key, value)}
        >
          <Option value="Pending">Pending</Option>
          <Option value="In-Progress">In-Progress</Option>
          <Option value="Completed">Completed</Option>
        </Select>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusColors[status] || "default"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 border-b pb-4">
        <div className="text-sm space-x-4 text-gray-700">
          <span className="font-medium">Order Number</span> #743648
          <span className="font-medium ml-4">Order Date</span> 12 Sept 2022 - 12:55 pm
          <span className="font-medium ml-4">Tracking ID</span>{" "}
          <span className="text-blue-600">9348fj73</span>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="Pending" style={{ width: 150 }} size="small">
            <Option value="Completed">Mark as Complete</Option>
          </Select>
          <Button danger size="small">
            Cancel Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card bordered={false} className="shadow-sm">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">Janet Adebayo</div>
              <div className="text-sm text-gray-500">Customer since: 12 Sept 2022</div>
              <div className="mt-2 text-sm text-gray-700 space-y-1">
                <div><span className="font-medium">Phone:</span> +2348065580633</div>
                <div><span className="font-medium">Email:</span> janet.adebayo@gmail.com</div>
              </div>
            </div>
            <Tag color="orange" className="self-start">Pending</Tag>
          </div>
        </Card>

        <Card bordered={false} className="shadow-sm">
          <div className="text-sm space-y-2">
            <div>
              <div className="font-semibold">Home Address</div>
              <div>No. 15 Adekunle Street, Yaba, Lagos State</div>
            </div>
            <div>
              <div className="font-semibold">Billing Address</div>
              <div>No. 15 Adekunle Street, Yaba, Lagos State</div>
            </div>
          </div>
        </Card>

        <Card bordered={false} className="shadow-sm">
          <div className="text-sm space-y-2">
            <div>
              <div className="font-semibold">Payment Method</div>
              <div>Master Card</div>
            </div>
            <div>
              <div className="font-semibold">Order Type</div>
              <div>Home Delivery</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 border-t pt-4">
        <div className="text-md font-medium">
          Items <span className="text-blue-600">{data.length}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            size="small"
            className="w-48"
          />
          <Button icon={<FilterOutlined />} size="small">
            Filter
          </Button>
          <Button size="small">Share</Button>
          <Select defaultValue="Bulk Action" size="small" className="w-32">
            <Option value="bulk">Bulk Action</Option>
          </Select>
        </div>
      </div>

      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ x: 800 }}
        rowSelection={{ type: "checkbox" }}
      />
    </div>
  );
};

export default OrderDetail;
