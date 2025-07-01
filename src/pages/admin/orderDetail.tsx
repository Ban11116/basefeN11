import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/admin/order.serive";
import { Spin, Tag, Descriptions, Table, message } from "antd";
import type { Order, OrderProduct } from "../../types/admin/order.type";
import type { ColumnsType } from "antd/es/table";

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      const data = await getOrderById(id);

      if (!data) {
        message.error("Không tìm thấy đơn hàng");
      }

      setOrder(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-20 text-gray-500">
        Đơn hàng không tồn tại hoặc đã bị xóa.
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    Completed: "green",
    Pending: "orange",
    Canceled: "red",
    Delivered: "green",
  };

  const columns: ColumnsType<OrderProduct> = [
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
      render: (product) => product?.name || "Unknown",
    },
    {
      title: "Giá",
      dataIndex: "product",
      key: "price",
      render: (product) => product?.price?.toLocaleString("vi-VN") + " ₫",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm w-full">
      <div className="text-xl font-semibold mb-4">Chi tiết đơn hàng</div>

      <Descriptions bordered column={1}>
        <Descriptions.Item label="Mã đơn hàng">{order._id}</Descriptions.Item>
        <Descriptions.Item label="Khách hàng">{order.user?.name || "N/A"}</Descriptions.Item>
        <Descriptions.Item label="Email">{order.user?.email || "N/A"}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ giao hàng">{order.shipping_address || "N/A"}</Descriptions.Item>
        <Descriptions.Item label="Ghi chú">{order.note || "Không có"}</Descriptions.Item>
        <Descriptions.Item label="Ngày đặt">
          {order.order_date ? new Date(order.order_date).toLocaleString("vi-VN") : "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Tổng tiền">
          {order.total_price?.toLocaleString("vi-VN")} ₫
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color={statusColors[order.status ?? ""] || "blue"}>{order.status}</Tag>
        </Descriptions.Item>
      </Descriptions>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Sản phẩm</h3>
        <Table
          dataSource={order.products || []}
          columns={columns}
          rowKey={(record) => record.product._id}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
