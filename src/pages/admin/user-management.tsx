import React, { useState, useEffect } from "react";
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
  Spin,
  Modal,
  Form,
  message,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { fetchAllUsers, updateUser } from "../../services/admin/user.serive";
import type { User } from "../../types/admin/user.type";

const { Option } = Select;

const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

const roleColors: Record<string, string> = {
  admin: "purple",
  user: "blue",
  manager: "gold",
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const data = await fetchAllUsers();
      setUsers(data);
      setLoading(false);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue(selectedUser);
    }
  }, [selectedUser, form]);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleDeactivate = async (user: User) => {
    Modal.confirm({
      title: `Deactivate ${user.name}?`,
      onOk: async () => {
        try {
          await updateUser(user._id, { status: "Inactive" });
          setUsers((prev) =>
            prev.map((u) => (u._id === user._id ? { ...u, status: "Inactive" } : u))
          );
          message.success(`${user.name} deactivated`);
        } catch {
          message.error("Failed to deactivate user");
        }
      },
    });
  };

  const filteredUsers = users.filter((user) => {
    const name = removeVietnameseTones(user.name.toLowerCase());
    const keyword = removeVietnameseTones(searchText.toLowerCase());
    return name.includes(keyword);
  });

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
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: string) => (
        <Tag color={roleColors[role] || "default"}>{role}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => handleEdit(record)}>
                Edit
              </Menu.Item>
              <Menu.Item key="deactivate" onClick={() => handleDeactivate(record)}>
                Deactivate
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
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
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button>Bulk Action</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center py-10">
            <Spin size="large" />
          </div>
        ) : (
          <Table<User>
            columns={columns}
            dataSource={filteredUsers}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            scroll={{ x: 600 }}
          />
        )}
      </div>

      <Modal
        title="Edit User"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => {
          form
            .validateFields()
            .then(async (values) => {
              try {
                if (!selectedUser) return;
                const updatedUser = await updateUser(selectedUser._id, values);
                setUsers((prev) =>
                  prev.map((u) => (u._id === updatedUser._id ? updatedUser : u))
                );
                message.success("Cập nhật người dùng thành công");
                setIsModalVisible(false);
              } catch {
                message.error("Cập nhật người dùng thất bại");
              }
            });
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input email!" }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role">
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
