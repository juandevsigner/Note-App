import { Button, Dropdown, Menu } from "antd";
import { UserOutlined, ImportOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a rel="noopener noreferrer" href="/">
            View Profile
          </a>
        ),
        icon: <UserOutlined />,
      },
      {
        key: "2",
        label: (
          <a rel="noopener noreferrer" href="/">
            Logout
          </a>
        ),
        icon: <ImportOutlined />,
      },
    ]}
  />
);

export const NavbarProfile = () => {
  return (
    <Dropdown overlay={menu}>
      <Button shape="circle" icon={<UserOutlined />} />
    </Dropdown>
  );
};
