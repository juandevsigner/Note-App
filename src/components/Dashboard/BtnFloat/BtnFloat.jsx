import { FloatButton, Tooltip } from "antd";
import { FileAddOutlined } from "@ant-design/icons";

export const BtnFloat = () => {
  return (
    <Tooltip title="Add new note" placement="left">
      <FloatButton icon={<FileAddOutlined />} />
    </Tooltip>
  );
};
