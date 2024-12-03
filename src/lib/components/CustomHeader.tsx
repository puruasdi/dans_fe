"use client";
import { googleLogout } from "@react-oauth/google";
import { Avatar, Button, Flex, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};

const CustomHeader = () => {
  const router = useRouter();
  const { profile, setProfile } = useContext(UserContext);

  const logOut = () => {
    
    googleLogout();
    router.replace("/");
    setProfile(null);
    sessionStorage.clear();
  };

  return (
    <Header style={headerStyle}>
      <div
        style={{
          width: "65vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>GitJobs</h1>
        {profile && (
          <Flex gap="middle" align="center">
            <Avatar src={profile?.picture} />
            <Typography.Text style={{fontWeight: "bold", color: "#fff"}}>{profile.name}</Typography.Text>
            <Button onClick={() => logOut()}>Logout</Button>
          </Flex>
        )}
      </div>
    </Header>
  );
};

export default CustomHeader;
