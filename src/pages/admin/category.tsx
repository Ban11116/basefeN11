import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Space,
  Input,
  Dropdown,
  Menu,
  Card,
  message,
  Spin,
  Modal,
  Form,
  Select,
} from "antd";
import {
  FolderOpenOutlined,
  SearchOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import {
  getAllCategories,
  updateCategory,
  createCategory,
} from "../../services/admin/category.serive";
import type { Category } from "../../types/admin/category.type";

const { Option } = Select;

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [form] = Form.useForm();
  const [deletedFilter, setDeletedFilter] = useState<string | undefined>("false");

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const includeDeleted = deletedFilter === "true";
      const data = await getAllCategories(searchText, includeDeleted);
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
        message.warning("Dữ liệu trả về không hợp lệ.");
      }
    } catch (err) {
      message.error("Không thể tải danh sách danh mục.");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [searchText, deletedFilter]);

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    form.setFieldsValue(category);
    setIsModalVisible(true);
  };

  const handleToggleDeleted = async (category: Category) => {
    const action = category.deleted ? "khôi phục" : "vô hiệu hóa";
    try {
      await updateCategory(category._id, { deleted: !category.deleted });
      message.success(`Đã ${action} danh mục`);
      fetchCategories();
    } catch {
      message.error(`Không thể ${action} danh mục`);
    }
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      if (!selectedCategory) return;
      await updateCategory(selectedCategory._id, values);
      message.success("Cập nhật danh mục thành công");
      setIsModalVisible(false);
      fetchCategories();
    } catch (error) {
      message.error("Cập nhật thất bại");
    }
  };

  const handleCreate = async () => {
    if (!newCategory.name) {
      return message.warning("Vui lòng nhập tên danh mục!");
    }
    try {
      await createCategory(newCategory);
      message.success("Tạo danh mục thành công");
      setIsAddModalVisible(false);
      setNewCategory({ name: "", description: "" });
      fetchCategories();
    } catch (err) {
      message.error("Không thể tạo danh mục");
    }
  };

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
      title: "Action",
      key: "action",
      render: (_, record) => {
        const menu = (
          <Menu>
            <Menu.Item onClick={() => handleEdit(record)}>✏️ Edit</Menu.Item>
            <Menu.Item
              onClick={() =>
                Modal.confirm({
                  title: record.deleted
                    ? "Khôi phục danh mục?"
                    : "Vô hiệu hóa danh mục?",
                  content: `Bạn có chắc muốn ${
                    record.deleted ? "khôi phục" : "vô hiệu hóa"
                  } danh mục này?`,
                  onOk: () => handleToggleDeleted(record),
                })
              }
            >
              {record.deleted ? "♻️ Restore" : "🗑️ Deactivate"}
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Card className="text-center" bordered={false}>
          <div className="text-gray-500 text-sm">All Categories</div>
          <div className="text-2xl font-bold">{categories.length}</div>
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
            allowClear
          />
          <Select
            placeholder="Filter deleted"
            allowClear
            style={{ width: 150 }}
            onChange={(value) => setDeletedFilter(value)}
            value={deletedFilter}
          >
            <Option value="false">Not Deleted</Option>
            <Option value="true">Deleted</Option>
          </Select>
          <Button type="primary" onClick={() => setIsAddModalVisible(true)}>
            + Add a New Category
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <Spin tip="Đang tải danh mục..." />
        ) : categories.length === 0 ? (
          <div className="text-center text-gray-500 py-10">Không có danh mục nào.</div>
        ) : (
          <Table<Category>
            columns={columns}
            dataSource={categories}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            scroll={{ x: 600 }}
          />
        )}
      </div>

      {/* Modal Edit */}
      <Modal
        title="Edit Category"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleUpdate}
        okText="Save"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input category name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal Add */}
      <Modal
        title="Add New Category"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={handleCreate}
        okText="Create"
      >
        <Form layout="vertical">
          <Form.Item label="Name" required>
            <Input
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              rows={3}
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryManagement;
