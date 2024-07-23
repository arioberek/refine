import { useShow, useOne } from "@refinedev/core";

import { Show, MarkdownField } from "@refinedev/antd";

import { Typography, Tag } from "antd";

import type { IPost, ICategory } from "../../interfaces";

const { Title, Text } = Typography;

export const PostShow = () => {
  const { query } = useShow<IPost>();
  const { data, isLoading } = query;
  const record = data?.data;

  const { data: categoryData } = useOne<ICategory>({
    resource: "categories",
    id: record?.category.id ?? "",
    queryOptions: {
      enabled: !!record?.category.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Category</Title>
      <Text>{categoryData?.data.title}</Text>

      <Title level={5}>Content</Title>
      <MarkdownField value={record?.content} />
    </Show>
  );
};
