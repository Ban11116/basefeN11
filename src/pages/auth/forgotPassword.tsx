import { useState } from "react";
import { Input, Button, message, Form } from "antd";
import { sendOtp, resetPassword } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleRequestOTP = async () => {
    try {
      await sendOtp(email);
      message.success("Đã gửi OTP đến email của bạn!");
      setStep("verify");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword({ email, otp, newPassword });
      message.success("Đặt lại mật khẩu thành công!");
      navigate("/admin/login");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Quên mật khẩu</h2>

      {step === "request" && (
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email đăng ký"
            />
          </Form.Item>
          <Button type="primary" block onClick={handleRequestOTP}>
            Gửi mã OTP
          </Button>
        </Form>
      )}

      {step === "verify" && (
        <Form layout="vertical">
          <Form.Item label="Mã OTP">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Nhập mã OTP từ email"
            />
          </Form.Item>
          <Form.Item label="Mật khẩu mới">
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nhập mật khẩu mới"
            />
          </Form.Item>
          <Button type="primary" block onClick={handleResetPassword}>
            Đặt lại mật khẩu
          </Button>
        </Form>
      )}
    </div>
  );
};

export default ForgotPassword;
