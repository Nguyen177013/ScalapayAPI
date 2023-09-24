import { Col, Input, Layout, Row } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCart";

const Header = () => {
  const navigate = useNavigate();
  const { state } = useCartContext();
  function handleClick(url: string) {
    navigate(url);
  }
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: 56,
          border: "1px solid white",
          padding: "10px",
        }}
      >
        <Row>
          <Col
            span={8}
            onClick={() => handleClick("/")}
            style={{ cursor: "pointer" }}
          >
            <h2>Laptop Store</h2>
          </Col>
          <Col span={8}>
            <Input.Search
              prefix={<SearchOutlined style={{ verticalAlign: "middle" }} />}
              placeholder="Find your something..."
            />
          </Col>
          <Col span={8} onClick={() => handleClick("/cart")}>
            <div
              style={{
                float: "right",
                position: "relative",
                paddingRight: "10px",
                cursor: "pointer",
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
              <span
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  padding: "3px",
                  right: 4,
                  top: -5,
                  borderRadius: "100%",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {state.length}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Header;
