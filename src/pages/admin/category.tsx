import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Input,
  Dropdown,
  Menu,
  Card,
  Select,
} from "antd";
import {
  FolderOpenOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

const { Option } = Select;

interface Category {
  key: string;
  name: string;
  description: string;
  status: string;
}

const allCategories: Category[] = [
  {
    key: "1",
    name: "Nước Hoa A",
    description: "sjashjasjkahjaskkjashk",
    status: "Active",
  },
  {
    key: "2",
    name: "Nước Hoa B",
    description: "sáhkjahsjksa",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Nước Hoa C",
    description: "dsdssđjskjdhkj",
    status: "Active",
  },
];

const statusColors: Record<string, string> = {
  Active: "green",
  Inactive: "red",
};

const CategoryManagement: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);

  const filteredCategories = allCategories.filter((category) => {
    const matchesSearch = category.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter ? category.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const columns: ColumnsType<Category> = [
    {
      title: "Category",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <Space>
          <FolderOpenOutlined />
          <span className="whitespace-nowrap">{text}</span>
        </Space>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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

  const total = allCategories.length;
  const active = allCategories.filter((c) => c.status === "Active").length;
  const inactive = allCategories.filter((c) => c.status === "Inactive").length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">All Categories</div>
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
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold whitespace-nowrap">Category List</h2>
        <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
          <Input
            placeholder="Search category"
            prefix={<SearchOutlined />}
            className="w-full sm:w-48"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            placeholder="Filter by status"
            allowClear
            style={{ width: 160 }}
            onChange={(value) => setStatusFilter(value)}
            value={statusFilter}
          >
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
          <Link to="/admin/newcategory" aria-label="Thêm danh mục">
            <Button type="primary">+ Add a New Category</Button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table<Category>
          columns={columns}
          dataSource={filteredCategories}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 600 }}
        />
      </div>
    </div>
  );
};

export default CategoryManagement;
