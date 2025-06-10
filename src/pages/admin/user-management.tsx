import React, { useState } from "react";
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
    name: "ban",
    email: "jbanlnph111222@gmail.com",
    phone: "+855831662",
    status: "Active",
  },
  {
    key: "2",
    name: "Phuong",
    email: "phuongdm@gmail.com",
    phone: "+0987517228",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Dat",
    email: "datnv@gmail.com.com",
    phone: "+876552662",
    status: "Pending",
  },
];

const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

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
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = users.filter((user) => {
    const name = removeVietnameseTones(user.name.toLowerCase());
    const keyword = removeVietnameseTones(searchText.toLowerCase());
    const matchesSearch = name.includes(keyword);
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const total = filteredUsers.length;
  const active = filteredUsers.filter((u) => u.status === "Active").length;
  const inactive = filteredUsers.filter((u) => u.status === "Inactive").length;
  const pending = filteredUsers.filter((u) => u.status === "Pending").length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
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

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold whitespace-nowrap">User List</h2>
        <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-full sm:w-48"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            defaultValue="All"
            value={statusFilter}
            className="w-full sm:w-32"
            onChange={(value) => setStatusFilter(value)}
          >
            <Option value="All">All</Option>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
            <Option value="Pending">Pending</Option>
          </Select>
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button>Bulk Action</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table<User>
          columns={columns}
          dataSource={filteredUsers}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 600 }}
        />
      </div>
    </div>
  );
};

export default UserManagement;
