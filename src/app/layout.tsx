import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoadingProvider } from "@/lib/provider/loadingProvider";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import CustomHeader from "@/lib/components/CustomHeader";
import { UserProvider } from "@/lib/provider/userProvider";

const layoutStyle = {
  width: "100vw",
};

const contentStyle: React.CSSProperties = {
  height: "calc(100vh - 64px)",
};

const bodyStyle: React.CSSProperties = {
  margin: "0 !important",
  height: "100vh",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <GoogleOAuthProvider clientId="239357119746-afo206h27qa3jk9slgclb6dnmc0jst9j.apps.googleusercontent.com">
      <AntdRegistry>
        <body style={bodyStyle}>
          <LoadingProvider>
            <UserProvider>
              <Flex gap="middle" wrap>
                <Layout style={layoutStyle}>
                  <CustomHeader />
                  <Content style={contentStyle}>{children}</Content>
                </Layout>
              </Flex>
            </UserProvider>
          </LoadingProvider>
        </body>
      </AntdRegistry>
    </GoogleOAuthProvider>
  </html>
);

export default RootLayout;
