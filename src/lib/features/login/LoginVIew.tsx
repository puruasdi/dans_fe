import { GoogleOutlined } from "@ant-design/icons";
import useLoginVM from "./LoginViewModel";
import { Button, Card, Flex, Typography } from "antd";

const LoginView = () => {
  const { login } = useLoginVM();

  const loginWrapperStyle: React.CSSProperties = {
    height: "100%",
  };

  return (
    <Flex justify="center" align="center" style={loginWrapperStyle}>
      <Card
        style={{
          height: "50vh",
        }}
        title={<h1 style={{ textAlign: "center", color: "#4096ff" }}>Login</h1>}
      >
        <Typography.Title level={5}>Login with Google</Typography.Title>
        <Typography.Paragraph>
          To get started, simply log in using your Google account. This will
          allow you to:
          <ul>
            <li>Access your data securely.</li>
            <li>Enjoy a faster and more personalized experience.</li>
          </ul>
          Your data will be safe and used only for authentication.
        </Typography.Paragraph>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Button
            size="large"
            type="primary"
            icon={<GoogleOutlined />}
            onClick={() => login()}
          >
            Login with Google
          </Button>
        </div>
      </Card>
    </Flex>
  );
};

export default LoginView;
