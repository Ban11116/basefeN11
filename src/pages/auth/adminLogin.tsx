// src/pages/admin/auth/AdminLogin.tsx
import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { PieChartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  const onFinish = (values: any) => {
    console.log('Login form submitted:', values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f6f8fc]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">

        <div className="flex justify-center mb-6">
  <Tooltip title="Analytics" placement="right">
    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
      <PieChartOutlined style={{ fontSize: 24, color: '#1890ff' }} />
    </div>
  </Tooltip>
</div>

        <h2 className="text-xl font-semibold">Welcome back!</h2>
        <p className="text-gray-500 text-sm mb-6">Login to your account</p>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input
              size="large"
              placeholder="Email Address"
              prefix={<MailOutlined className="text-gray-400" />}
              className="bg-gray-50"
            />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className="text-gray-400" />}
              className="bg-gray-50"
            />
          </Form.Item>

          <div className="flex justify-between mb-4 text-sm">
            <div></div>
            <a href="#" className="text-blue-500 hover:underline">
              Recover Password
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg text-base font-semibold"
          >
            Login
          </button>
        </Form>

        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <Link to="/admin/register">
          <span className="text-blue-500 hover:underline">
            Register
          </span>
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
