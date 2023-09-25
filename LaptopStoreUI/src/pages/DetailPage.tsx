import { Button, Card, Col, Image, Row, notification } from "antd";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useCartContext from "../hooks/useCart";
import { setCart } from "../context/cart_context/action";
const DetailPage = () => {
  const laptop = useLoaderData() as laptopType;
  const [imageUrl, setImageUrl] = useState<string>(laptop.detailImages[0]);
  const handleClick = (url: string) => {
    setImageUrl(url);
  };
  const { dispatch } = useCartContext();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type: NotificationType, message: string) => {
    api[type]({
      message: "Add item into cart",
      description: message,
    });
  };
  const handleAddCart = (laptop: laptopType) => {
    const cart: cartItem = {
      gtin: laptop.id.toString(),
      name: laptop.title,
      category: "Laptop",
      price: {
        amount: laptop.price.toString(),
        currency: "EUR",
      },
      quantity: 1,
      sku: laptop.id.toString(),
      imageUrl: laptop.detailImages[0],
    };
    dispatch(setCart(cart));
    openNotification("success", "Item successfully added to cart");
  };
  return (
    <>
      {contextHolder}
      <Row gutter={[8, 8]} style={{ margin: "80px 0" }}>
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
            <div style={{ textAlign: "center" }}>
              {laptop.detailImages.map((url, index) => (
                <div
                  style={{
                    width: 70,
                    height: 70,
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                  key={index}
                  onClick={() => handleClick(url)}
                >
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
              Price: <strong style={{ color: "red" }}> ${laptop.price}.00 </strong>
            </p>
            <p style={{ fontSize: "20px" }}>CPU: {laptop.cpu}</p>
            <p style={{ fontSize: "20px" }}>Ram: {laptop.memory}</p>
            <p style={{ fontSize: "20px" }}>SSD: {laptop.ssd}</p>
            <p style={{ fontSize: "20px" }}>
              Status: {laptop.instock > 0 ? "On Sale" : "Sold Out"}
            </p>
          </Card>
          {laptop.instock > 0 ? (
            <Button
              type="primary"
              style={{
                width: "100%",
                fontSize: "18px",
                fontWeight: "bold",
                height: 38,
                marginTop: "10px",
              }}
              onClick={() => handleAddCart(laptop)}
            >
              Add to cart
            </Button>
          ) : (
            <Button
              type="primary"
              style={{
                width: "100%",
                fontSize: "18px",
                fontWeight: "bold",
                height: 38,
                marginTop: "10px",
              }}
              disabled={true}
            >
              Item out of stock
            </Button>
          )}
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
