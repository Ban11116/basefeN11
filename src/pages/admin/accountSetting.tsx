import React, { useState } from "react";
import { Tabs, Form, Input, Button, Select, Upload, Avatar } from "antd";
import { UserOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Option } = Select;

const AccountSettings: React.FC = () => {
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState<string>("https://via.placeholder.com/100");

  const handleAvatarChange = (info: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => setAvatar(reader.result as string));
    reader.readAsDataURL(info.file.originFileObj);
  };

  return (
    <div className="bg-[#f9fbfd] min-h-screen py-10 px-6 md:px-10">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
        <Tabs defaultActiveKey="1" className="mb-6">
          <TabPane tab={<span className="font-medium">Account</span>} key="1" />
          <TabPane tab="Business" key="2" />
          <TabPane tab="Security" key="3" />
        </Tabs>

        <h2 className="text-xl font-semibold mb-6">Account Settings</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Form
            form={form}
            layout="vertical"
            className="flex-1 max-w-xl"
            initialValues={{
              firstName: "Ban",
              lastName: "Le",
              email: "banlnph51162@gmail.com",
              phone: "0806550633",
              address: "Hoai duc",
              city: "Ha noi",
              country: "Thai binh",
              state: "Hoang hoa",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="First Name" name="firstName">
                <Input prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName">
                <Input />
              </Form.Item>
            </div>

            <Form.Item label="Email" name="email">
              <Input prefix={<MailOutlined />} />
            </Form.Item>

            <Form.Item label="Phone Number" name="phone">
              <Input
                addonBefore={
                  <span className="flex items-center gap-1">
                    <img src="" alt="Vietnam" className="w-5 h-4 object-cover" />
                    +84
                  </span>
                }
              />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input prefix={<HomeOutlined />} />
            </Form.Item>

            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="Country" name="country">
                <Select>
                  <Option value="Nigeria">Nigeria</Option>
                  <Option value="Ghana">Ghana</Option>
                </Select>
              </Form.Item>
              <Form.Item label="State" name="state">
                <Select>
                  <Option value="Lagos">Lagos</Option>
                  <Option value="Abuja">Abuja</Option>
                </Select>
              </Form.Item>
            </div>
          </Form>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar src={avatar} size={96} className="rounded-md" />
              <Upload
  showUploadList={false}
  onChange={handleAvatarChange}
  beforeUpload={(file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      alert("Chỉ chấp nhận ảnh định dạng JPG hoặc PNG!");
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
}}
  className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer"
>
  <UploadOutlined />
</Upload>

            </div>
            <Button type="primary" className="w-32">Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
