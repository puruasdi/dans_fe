"use client";
import { Avatar, Divider, Flex, Image, List, Skeleton, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { DataDto } from "../model/apiModel";
import { Dispatch, SetStateAction } from "react";

interface ScrollableListProps {
  data: DataDto[];
  hasMore: boolean;
  loadMoreData: () => void;
  setSelectedData: Dispatch<SetStateAction<null | DataDto>>;
}

const ScrollableList = (prop: ScrollableListProps) => {
  const { data, loadMoreData, hasMore, setSelectedData } = prop;
  return (
    <div
      id="scrollableDiv"
      style={{
        height: "calc(100vh - 230px)",
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<Skeleton active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              id="list-item"
              key={item.id}
              onClick={() => setSelectedData(item)}
              style={{ cursor: "pointer" }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.company_logo} />}
                title={
                  <Typography.Text
                    style={{
                      color: "#0a66c2",
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </Typography.Text>
                }
                description={
                  <Flex vertical>
                    <Typography.Text>{item.company}</Typography.Text>
                    <Typography.Text type="secondary">
                      {item.location} - {item.type}
                    </Typography.Text>
                  </Flex>
                }
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ScrollableList;
