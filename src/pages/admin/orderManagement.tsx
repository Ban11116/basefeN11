import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Button,
  Input,
  Select,
  Card,
  Empty,
  Spin,
} from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../services/admin/order.serive";

const { Option } = Select;

interface Order {
  key: string;
  customer: string;
  date: string;
  address: string;
  tracking: string;
  total: string;
  status: string;
}

const statusLabels: Record<string, string> = {
  delivered: "Completed",
  pending: "Pending",
  canceled: "Canceled",
  deferred: "Deferred",
  shipped: "Shipped",
  processing: "Processing",
};

const statusColors: Record<string, string> = {
  delivered: "green",
  pending: "orange",
  canceled: "red",
  deferred: "blue",
  shipped: "purple",
  processing: "gold",
};

const OrderManagement: React.FC = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const rawOrders = await getAllOrders();

        const mappedOrders: Order[] = rawOrders.map((order: any, index: number) => ({
          key: order._id || String(index),
          customer: order.user_id?.name || "Unknown",
          date: new Date(order.order_date).toLocaleDateString(),
          address: order.shipping_address || "N/A",
          tracking: order._id?.slice(-6)?.toUpperCase() || "N/A",
          total: order.total_price?.toLocaleString("vi-VN") + " ₫",
          status: order.status || "pending",  // Giữ nguyên trạng thái gốc
        }));

        setOrders(mappedOrders);
        setFilteredOrders(mappedOrders);
      } catch (error) {
        console.error("❌ Lỗi khi tải danh sách đơn hàng:", error);
        setOrders([]);
        setFilteredOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    let result = [...orders];

    if (searchText) {
      result = result.filter((o) =>
        o.customer.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      result = result.filter((o) => o.status === statusFilter);
    }

    setFilteredOrders(result);
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
    },
    {
      title: "Shipping Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tracking ID",
      dataIndex: "tracking",
      key: "tracking",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusColors[status] || "default"}>
          {statusLabels[status] || status}
        </Tag>
      ),
    },
  ];

  const total = orders.length;
  const completed = orders.filter((o) => o.status === "delivered").length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const canceled = orders.filter((o) => o.status === "canceled").length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
      <div className="text-xl font-semibold mb-4">Quản lý đơn hàng</div>

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
        <h2 className="text-lg font-semibold whitespace-nowrap">Orders</h2>
        <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
          <Input
            placeholder="Search customer"
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
            <Option value="delivered">Completed</Option>
            <Option value="pending">Pending</Option>
            <Option value="canceled">Canceled</Option>
            <Option value="deferred">Deferred</Option>
            <Option value="shipped">Shipped</Option>
            <Option value="processing">Processing</Option>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <Spin size="large" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="py-20 text-center">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <>
                <p className="text-lg font-medium">No Orders Found</p>
                <p className="text-gray-500">Add products and receive orders to manage them here.</p>
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
          scroll={{ x: 800 }}
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
