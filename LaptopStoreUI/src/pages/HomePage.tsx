import { Content } from "antd/es/layout/layout";
import { Card, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const HomePage = () => {
  const [laptops, setLaptops] = useState<laptopType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:44387/api/Laptop")
      .then((req) => req.json())
      .then((data) => {
        setLaptops(data);
      });
  }, []);
  function handleClick(laptopId: number){
    navigate(`/laptop/${laptopId}`);
  }
  return (
    <Content style={{ margin: "50px" }}>
      <Row gutter={[16, 16]}>
        {laptops.length == 0 ? <p>Please wait...</p> : ""}
        {laptops.map((laptop) => {
          let price = `Price:  $${laptop.price}.00`;
          return (
            <Col span={6} key={laptop.id} onClick={()=>handleClick(laptop.id)}>
              <Card
                hoverable = {laptop.instock > 0 ? true : false}
                cover={
                  <div
                    style={{
                      width: "100%",
                      height: "350px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="example"
                      src={laptop.detailImages[0]}
                    />
                    {laptop.instock > 0 ? (
                      ""
                    ) : (
                      <p
                        style={{
                          position: "absolute",
                          top: 10,
                          left: -15,
                          backgroundColor: "red",
                          padding: "5px 28px",
                          transform: "rotateZ(-34deg)",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        Sold Out
                      </p>
                    )}
                  </div>
                }
              >
                <Meta title={laptop.title} description={price} />
                <p style={{ marginTop: 10 }}>In Stock: {laptop.instock}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Content>
  );
};

export default HomePage;
