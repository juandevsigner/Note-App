import { Button, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import { hiddenSidebarAction } from "../../../../actions";

export const SidebarBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hiddenSidebarAction());
  };
  return (
    <Tooltip placement="left" title="Close Menu">
      <Button
        className="sidebar__btn"
        shape="circle"
        icon={<CloseOutlined />}
        onClick={handleClick}
      />
    </Tooltip>
  );
};
