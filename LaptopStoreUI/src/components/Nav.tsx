import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <MailOutlined />,
  },
];
const Nav = () => {
  const [current, setCurrent] = useState<string>("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          position: "relative",
          display: "fex",
          justifyContent: "center",
          padding:"20px"
        }}
      />
    </>
  );
};
export default Nav;
