import { Content } from "antd/es/layout/layout";
import { Card, Col, Row } from "antd";
import { useState, useEffect } from "react";
const { Meta } = Card;
const HomePage = () => {
  const [laptops, setLaptops] = useState<laptopType[]>([]);
  useEffect(() => {
    fetch("https://localhost:44387/api/Laptop")
      .then((req) => req.json())
      .then((data) => {
        setLaptops(data);
      });
  }, []);
  return (
    <Content style={{ margin: "50px" }}>
      <Row gutter={[16, 16]}>
        {laptops.length == 0 ? <p>Please wait...</p> : ""}
        {laptops.map((laptop) => (
          <Col span={6} key={laptop.id}>
            <Card
              hoverable
              cover={
                <div style={{ width: "100%", height: "350px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="example"
                    src={laptop.url}
                  />
                </div>
              }
            >
              <Meta
                title={laptop.title}
                description={laptop.price}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default HomePage;
