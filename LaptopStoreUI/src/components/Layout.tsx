import { Image } from "antd";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import Header from "./Header";
const HomeLayout = () => {
  return (
    <>
      <Header/>
      <br />
      <Content style={{ margin: '0 50px' }}>
        <Image
          width={"100%"}
          height={350}
          src="https://laptop123.com.vn/index.php?t=ajax&p=tthumb&src=aHR0cHM6Ly9sYXB0b3AxMjMuY29tLnZuL3VwbG9hZC9nYWxsZXJ5L2RlbGwtNTQyMC5wbmc=&w=1200&h=450"
          preview={false}
        ></Image>
        <Outlet></Outlet>
      </Content>
    </>
  );
};

export default HomeLayout;
