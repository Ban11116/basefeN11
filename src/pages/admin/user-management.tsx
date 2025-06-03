import React from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Input,
  Select,
  Avatar,
  Dropdown,
  Menu,
  Card,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

const { Option } = Select;

interface User {
  key: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

const users: User[] = [
  {
    key: "1",
    name: "Janet Adebayo",
    email: "janet.adebayo@gmail.com",
    phone: "+2348065650833",
    status: "Active",
  },
  {
    key: "2",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+2347012345678",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Emily Smith",
    email: "emily.smith@example.com",
    phone: "+2348034567890",
    status: "Pending",
  },
];

const statusColors: Record<string, string> = {
  Active: "green",
  Inactive: "red",
  Pending: "orange",
};

const columns: ColumnsType<User> = [
  {
    title: "User",
    dataIndex: "name",
    key: "name",
    render: (text: string) => (
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span className="whitespace-nowrap">{text}</span>
      </Space>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    responsive: ["md"],
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    responsive: ["md"],
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={statusColors[status] || "default"}>{status}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Deactivate</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

const UserManagement: React.FC = () => {
  const total = users.length;
  const active = users.filter((u) => u.status === "Active").length;
  const inactive = users.filter((u) => u.status === "Inactive").length;
  const pending = users.filter((u) => u.status === "Pending").length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">All Users</div>
          <div className="text-2xl font-bold">{total}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Active</div>
          <div className="text-2xl font-bold text-green-600">{active}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Inactive</div>
          <div className="text-2xl font-bold text-red-500">{inactive}</div>
        </Card>
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">Pending</div>
          <div className="text-2xl font-bold text-orange-400">{pending}</div>
        </Card>
      </div>

      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold whitespace-nowrap">User List</h2>
        <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-full sm:w-48"
          />
          <Select defaultValue="All" className="w-full sm:w-32">
            <Option value="All">All</Option>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
            <Option value="Pending">Pending</Option>
          </Select>
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button>Bulk Action</Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table<User>
          columns={columns}
          dataSource={users}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 600 }}
        />
      </div>
    </div>
  );
};

export default UserManagement;
