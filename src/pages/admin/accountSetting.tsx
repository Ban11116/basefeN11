import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Spin, notification } from "antd";
import { getCurrentUser } from "../../services/auth/auth.service";
import { updateUser } from "../../services/admin/user.serive";

const { Title } = Typography;

const AccountSetting: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = getCurrentUser();

        if (!currentUser || !currentUser._id) {
          notification.error({ message: "Không tìm thấy thông tin người dùng" });
          return;
        }

        setUserId(currentUser._id);
        form.setFieldsValue({
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone,
          address: currentUser.address,
        });
      } catch (error) {
        console.error("get user error:", error);
        notification.error({ message: "Không thể tải thông tin người dùng" });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [form]);

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      const updatedUser = await updateUser(userId, values);

      const currentUser = getCurrentUser();
      const newUser = { ...currentUser, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(newUser));

      notification.success({ message: "Cập nhật thành công!" });
      form.setFieldsValue(newUser);
    } catch (error) {
      console.error("update user error:", error);
      notification.error({ message: "Không thể cập nhật người dùng" });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-sm max-w-3xl">
      <Title level={4}>Account Settings</Title>
      <Form form={form} layout="vertical" onFinish={handleUpdate} className="mt-6">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Phone Number" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>

        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountSetting;
