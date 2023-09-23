import { Button, Card, Carousel, Col, Image, Layout, Row } from "antd";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
const DetailPage = () => {
  const laptop = useLoaderData() as laptopType;
  const [imageUrl, setImageUrl] = useState<string>(laptop.detailImages[0]);
  const handleClick = (url : string)=>{
    setImageUrl(url);
  }
  return (
    <>
      <Row gutter={[8, 8]} style={{ margin:"80px 0" }}>
        <Col span={8}>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={imageUrl} width={250} height={150} />
            </div>
            <div style={{textAlign:"center"}}>
              {laptop.detailImages.map((url) => (
                <div style={{ width: 70, height: 70, cursor: "pointer", display:"inline-block" }} onClick={()=>handleClick(url)}>
                  <img
                    src={url}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col span={16}>
          <Card title={laptop.title}>
            <p style={{ fontSize: "20px" }}>
              Price: <strong style={{ color: "red" }}> {laptop.price}$ </strong>
            </p>
            <p style={{ fontSize: "20px" }}>CPU: {laptop.cpu}</p>
            <p style={{ fontSize: "20px" }}>Ram: {laptop.memory}</p>
            <p style={{ fontSize: "20px" }}>SSD: {laptop.ssd}</p>
            <p style={{ fontSize: "20px" }}>
              Status: {laptop.instock > 0 ? "On Sale" : "Sold Out"}
            </p>
          </Card>
          <Button
            type="primary"
            style={{
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              height: 38,
              marginTop: "10px",
            }}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </>
  );
};
export const laptopLoader = async ({ params }: any) => {
  const res = await fetch(`https://localhost:44387/api/Laptop/${params.id}`);
  const jsonData = await res.json();
  return jsonData;
};
export default DetailPage;
