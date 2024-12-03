import { Avatar, Card, Flex, Skeleton, Tag, Typography } from "antd";
import React from "react";
import { DataDto } from "../model/apiModel";
import { HomeFilled } from "@ant-design/icons";

type JobDetailProp = {
  data: DataDto | null;
};

const JobDetail = (prop: JobDetailProp) => {
  const { data } = prop;
  const descriptionHtml: string = data?.description ?? "";
  const applyHtml: string = data?.how_to_apply ?? "";
  return (
    <>
      {!data ? (
        <Card>
          <Skeleton active/>
        </Card>
      ) : (
        <Card
          title={
            <Flex gap="large" align="center">
              <Avatar src={data?.company_logo} />
              <Typography.Text>{data?.company}</Typography.Text>
            </Flex>
          }
          style={{
            height: "calc(100vh - 180px)",
            overflow: "auto",
          }}
        >
          <Typography.Title level={3} style={{ marginTop: 0 }}>
            {data?.title}
          </Typography.Title>
          <Typography.Text type="secondary">{data?.created_at}</Typography.Text>
          <Flex gap="small" align="center">
            <HomeFilled />
            <Typography.Text type="secondary">
              {data?.company} -{" "}
              <span>
                <a href={data?.company_url}>{data?.company_url}</a>
              </span>
            </Typography.Text>
          </Flex>
          <Flex gap="small" align="center" style={{ marginTop: 12 }}>
            <Tag color="orange">{data?.location}</Tag>
            <Tag color="magenta">{data?.type}</Tag>
          </Flex>
          <Typography.Title level={5}>About the job</Typography.Title>
          <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <Card title={"How to apply"}>
            <div dangerouslySetInnerHTML={{ __html: applyHtml }} />
          </Card>
        </Card>
      )}
    </>
  );
};

export default JobDetail;
