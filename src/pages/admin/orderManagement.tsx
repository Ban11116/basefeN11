import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Button,
  Input,
  Select,
  Card,
  Empty,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

interface Order {
  key: string;
  customer: string;
  date: string;
  type: string;
  tracking: string;
  total: string;
  status: string;
}

const initialOrders: Order[] = [
  {
    key: "1",
    customer: "Ban",
    date: "12 Aug 2022 - 12:25 am",
    type: "Home Delivery",
    tracking: "93487r9",
    total: "₦25,000.00",
    status: "Completed",
  },
  {
    key: "2",
    customer: "Nam",
    date: "12 Aug 2022 - 12:25 am",
    type: "Home Delivery",
    tracking: "abc123",
    total: "₦25,000.00",
    status: "In-Progress",
  },
  {
    key: "3",
    customer: "Đạt",
    date: "12 Aug 2022 - 12:25 am",
    type: "Home Delivery",
    tracking: "xyz789",
    total: "₦25,000.00",
    status: "Pending",
  },
];

const statusColors: Record<string, string> = {
  Completed: "green",
  Pending: "orange",
  Canceled: "red",
  "In-Progress": "blue",
};

const actionOptions = ["Completed", "In-Progress", "Pending"];

const OrderManagement: React.FC = () => {
  const navigate = useNavigate();

  const [orders] = useState<Order[]>(initialOrders);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(initialOrders);
  const [searchText, setSearchText] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  useEffect(() => {
    const filtered = orders.filter((order) => {
      const matchesSearch =
        order.customer.toLowerCase().includes(searchText.toLowerCase()) ||
        order.tracking.toLowerCase().includes(searchText.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    setFilteredOrders(filtered);
  }, [searchText, statusFilter, orders]);

  const columns: ColumnsType<Order> = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      responsive: ["md"],
    },
    {
      title: "Order Type",
      dataIndex: "type",
      key: "type",
      responsive: ["md"],
    },
    {
      title: "Tracking ID",
      dataIndex: "tracking",
      key: "tracking",
      responsive: ["md"],
    },
    {
      title: "Order Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: Order) => (
        <Select defaultValue={record.status} style={{ width: 120 }}>
          {actionOptions.map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
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

  const total = orders.length;
  const completed = orders.filter((o) => o.status === "Completed").length;
  const pending = orders.filter((o) => o.status === "Pending").length;
  const canceled = orders.filter((o) => o.status === "Canceled").length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">All Orders</div>
          <div className="text-2xl font-bold">{total}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Completed</div>
          <div className="text-2xl font-bold text-green-600">{completed}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Pending</div>
          <div className="text-2xl font-bold text-orange-400">{pending}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Canceled</div>
          <div className="text-2xl font-bold text-red-500">{canceled}</div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold whitespace-nowrap">Orders</h2>
        <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-full sm:w-48"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
            className="w-full sm:w-32"
          >
            <Option value="All">All</Option>
            <Option value="Completed">Completed</Option>
            <Option value="Pending">Pending</Option>
            <Option value="In-Progress">In-Progress</Option>
            <Option value="Canceled">Canceled</Option>
          </Select>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="py-20 text-center">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <>
                <p className="text-lg font-medium">No Orders Yet?</p>
                <p className="text-gray-500">
                  Add products to your store and start selling to see orders here.
                </p>
              </>
            }
          >
            <Button type="primary" icon={<ShoppingCartOutlined />}>
              New Product
            </Button>
          </Empty>
        </div>
      ) : (
        <Table<Order>
          columns={columns}
          dataSource={filteredOrders}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 600 }}
          onRow={(record) => ({
            onClick: () => navigate(`/admin/orders/${record.key}`),
            style: { cursor: "pointer" },
          })}
        />
      )}
    </div>
  );
};

export default OrderManagement;
