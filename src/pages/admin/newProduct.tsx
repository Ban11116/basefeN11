import React from "react";
import {
  Input,
  Select,
  DatePicker,
  TimePicker,
  Switch,
  Button,
  InputNumber,
  Upload,
  Form,
  Typography,
  Card,
  Row,
  Col,
  Space,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { TextArea } = Input;
const { Title } = Typography;

const NewProduct = () => {
  const [form] = Form.useForm();

  return (
    
    <div style={{ padding: 24, background: "#f9fbfd", minHeight: "100vh" }}>
        
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={5} style={{ margin: 0 }}>
            New Product 
          </Title>
        </Col>
        <Col>
          <Space>
            <Button style={{ background: "#1e1e1e", color: "#fff" }}>Save as Draft</Button>
            <Button type="primary">Save & Publish</Button>
          </Space>
        </Col>
      </Row>

      <Form layout="vertical" form={form}>
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="productName">
                  <Input placeholder="Product Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="category">
                  <Select placeholder="Select Product Category" options={[]} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="sellingPrice">
                  <Input placeholder="Selling Price" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="costPrice">
                  <Input placeholder="Cost Price" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="quantity">
                  <InputNumber min={0} style={{ width: "100%" }} placeholder="Quantity in Stock" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="orderType">
                  <Select placeholder="Order Type" options={[]} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} align="middle">
              <Col span={12}>
                <Space>
                  <span style={{ width: 80 }}>Discount</span>
                  <Switch />
                  <span>Add Discount</span>
                </Space>
              </Col>
              <Col span={12}>
                <Space>
                  <span style={{ width: 80 }}>Expiry Date</span>
                  <Switch />
                  <span>Add Expiry Date</span>
                </Space>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={24}>
                <TextArea rows={3} placeholder="Short Description" />
              </Col>
              <Col span={24} style={{ marginTop: 16 }}>
                <Form.Item label="Product Long Description">
                  <ReactQuill theme="snow" placeholder="Your text goes here" />
                </Form.Item>
                <span style={{ fontSize: 12, color: "#888" }}>
                  Add a long description for your product
                </span>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: 16 }} align="middle">
              <Col span={12}>
                <Space>
                  <span style={{ width: 100 }}>Return Policy</span>
                  <Switch />
                  <span>Add Discount</span>
                </Space>
              </Col>
              <Col span={12}>
                <Form.Item label="Date Added">
                  <DatePicker defaultValue={null} style={{ width: "100%" }} />
                  <TimePicker defaultValue={null} style={{ width: "100%", marginTop: 8 }} />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Card>
              <Form.Item label="">
                <Upload
                  name="coverImage"
                  listType="picture-card"
                  maxCount={1}
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <div>
                    <UploadOutlined /> Upload Image
                  </div>
                </Upload>
                <p style={{ fontSize: 12, color: "#999" }}>
                  Upload a cover image for your product.<br />
                  File format: jpeg, png. Recommended Size: 600×600 (1:1)
                </p>
              </Form.Item>

              <Form.Item label="">
                <Upload
                  name="additionalImages"
                  listType="picture-card"
                  multiple
                  beforeUpload={() => false}
                >
                  <div>
                    <UploadOutlined /> Upload Image
                  </div>
                </Upload>
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NewProduct;
