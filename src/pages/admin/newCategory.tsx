import React, { useState } from "react";
import { Form, Input, Button, Select, Card, message } from "antd";

const { Option } = Select;

const NewCategory: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      message.success("Danh mục đã được thêm thành công!");
      form.resetFields();
    }, 1000);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-sm w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Thêm danh mục mới</h2>
      <Card bordered={false}>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{ status: "Active" }}
        >
          <Form.Item
            label="Category"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}
          >
            <Input placeholder="Nhập tên danh mục" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} placeholder="Nhập mô tả" />
          </Form.Item>

          <Form.Item label="Status" name="status">
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add Category
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default NewCategory;
