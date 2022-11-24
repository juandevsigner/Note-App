import { useDispatch } from "react-redux";
import { FloatButton, Tooltip } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import { showModalAction } from "../../../actions";

export const BtnFloat = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showModalAction());
  };
  return (
    <Tooltip title="Add new note" placement="left">
      <FloatButton onClick={handleClick} icon={<FileAddOutlined />} />
    </Tooltip>
  );
};
