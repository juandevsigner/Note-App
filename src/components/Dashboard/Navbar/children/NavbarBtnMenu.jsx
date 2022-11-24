import { Tooltip, Button } from "antd";
import { useDispatch } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import { showSidebarAction } from "../../../../actions";

export const NavbarBtnMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSidebarAction());
  };
  return (
    <Tooltip placement="left" title="Open Menu">
      <Button
        onClick={handleClick}
        className="navbar__btn"
        shape="circle"
        icon={<MenuOutlined />}
      />
    </Tooltip>
  );
};
