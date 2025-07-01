import { useState } from 'react';
import { Form, Input, Tooltip, message } from 'antd';
import { MailOutlined, LockOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth/auth.service';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      message.success("Đăng nhập thành công!");
      navigate('/admin');
    } catch (err: any) {
      if (err.message) {
        message.error(err.message);
      } else {
        message.error("Email hoặc mật khẩu không đúng.");
      }
    } finally {
      setLoading(false);
    }
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
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input
              size="large"
              placeholder="Email Address"
              prefix={<MailOutlined />}
              className="bg-gray-50"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
              className="bg-gray-50"
            />
          </Form.Item>

          <div className="flex justify-between mb-4 text-sm">
            <div></div>
            <Link to="/forgotpassword" className="text-blue-500 hover:underline">
              Recover Password
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg text-base font-semibold"
          >
            {loading ? "Đang đăng nhập..." : "Login"}
          </button>
        </Form>

        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/admin/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
