import { useShow } from "@refinedev/core";

import type { IPost } from "../../interfaces";

export const PostShow: React.FC = () => {
  const { query } = useShow<IPost>();
  const { data } = query;
  const record = data?.data;

  return (
    <div>
      <div>
        <label>Title</label>
        <input value={record?.title} disabled />
      </div>
      <div>
        <label>Content</label>
        <textarea value={record?.content} disabled rows={10} />
      </div>
    </div>
  );
};
