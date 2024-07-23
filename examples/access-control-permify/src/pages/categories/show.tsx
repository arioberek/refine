import { useShow } from "@refinedev/core";

import { Show } from "@refinedev/antd";

import { Typography } from "antd";

import type { ICategory } from "../../interfaces";

const { Title, Text } = Typography;

export const CategoryShow = () => {
  const { query } = useShow<ICategory>();
  const { data, isLoading } = query;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Id</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>
    </Show>
  );
};
