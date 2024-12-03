import { Spin } from "antd";

type LoadingProps = {
  isLoading: boolean;
  children?: JSX.Element | JSX.Element[];
};

export const Loading = ({ isLoading, children }: LoadingProps) => {
  return (
    <Spin tip="Loading" size="large" spinning={isLoading}>
      {children}
    </Spin>
  );
};
