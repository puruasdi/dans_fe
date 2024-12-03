"use client";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from "antd";

import useHomeVM from "./HomeVIewModel";
import ScrollableList from "@/lib/components/ScrollableList";
import JobDetail from "@/lib/components/JobDetail";

const HomeView = () => {
  const {
    data,
    loadMoreData,
    hasMore,
    onFinish,
    selectedData,
    setSelectedData,
  } = useHomeVM();


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          height: "calc(100vh - 80px)",
          width: "70vw",
        }}
      >
        <Form
          onFinish={onFinish}
          autoComplete="off"
          layout="inline"
          style={{
            marginBottom: 24,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form.Item label="Description" name="description">
            <Input allowClear />
          </Form.Item>

          <Form.Item label="Location" name="location">
            <Input allowClear/>
          </Form.Item>

          <Form.Item name="full_time" valuePropName="checked" label={null}>
            <Checkbox defaultChecked>Full Time</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
        <Row gutter={[16, 16]}>
          <Col span={10}>
            <div
              style={{
                width: "100%",
                border: "1px solid rgba(140, 140, 140, 0.35)",
                paddingLeft: 24,
              }}
            >
              <Typography.Title level={4} style={{ marginTop: 12 }}>
                Jobs list for you
              </Typography.Title>
            </div>
            <ScrollableList
              data={data}
              loadMoreData={loadMoreData}
              hasMore={hasMore}
              setSelectedData={setSelectedData}
            />
          </Col>
          <Col span={14}>
            <JobDetail data={selectedData} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default HomeView;
