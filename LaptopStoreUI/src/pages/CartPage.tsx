import { Button, Card, Col, Input, Row, Form } from "antd";
import { useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCart";
import { updateCart } from "../context/cart_context/action";
import { reduceAmount } from "../utils/reduceAmount";
const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCartContext();
  const handleReturn = () => {
    navigate("/");
  };
  const increaseItem = (item: cartItem) => {
    item.quantity++;
    dispatch(updateCart(item));
  };
  const decreaseItem = (item: cartItem) => {
    if (item.quantity == 0) {
      return;
    }
    item.quantity--;
    dispatch(updateCart(item));
  };
  const handleSubmit = async (consumerForm: shipping & consumer) => {
    const shipping :shipping = {
        countryCode : "VN",
        postcode : "177013",
        line1 : consumerForm.line1,
        name : consumerForm.givenNames + " " + consumerForm.surname,
        phoneNumber : consumerForm.phoneNumber,
        suburb : consumerForm.suburb
    };
    const consumer : consumer = {
        givenNames: consumerForm.givenNames,
        phoneNumber: consumerForm.phoneNumber,
        surname : consumerForm.surname
    }
    const items = state;
    const totalAmount: totalAmount = {
      amount: reduceAmount(items).toString()+".00",
      currency: "EUR",
    };
    const merchant : merchant = {
        redirectCancelUrl:"https://portal.integration.scalapay.com/success-url",
        redirectConfirmUrl:"https://portal.integration.scalapay.com/failure-url"
    }
    const data = {
        totalAmount,
        consumer,
        shipping,
        items,
        merchant
    }
    console.log(JSON.stringify(data).replace(/"/g, '\\"'));
  };
  return (
    <Card
      title="Your Cart Items"
      extra={
        <p
          onClick={handleReturn}
          style={{
            textDecoration: "underline",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </p>
      }
      style={{ marginTop: 25 }}
    >
      {state.map((item) => (
        <Card key={item.gtin}>
          <Row align={"middle"}>
            <Col span={4}>
              <div style={{ width: 150, height: 150, display: "block" }}>
                <img
                  src={item.imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <p>{item.name}</p>
            </Col>
            <Col span={6} style={{ textAlign: "center" }}>
              <div>
                <Button onClick={() => increaseItem(item)}>+</Button>
                <Input
                  value={item.quantity}
                  disabled={true}
                  style={{ width: "60px", marginLeft: "5px" }}
                />{" "}
                <Button onClick={() => decreaseItem(item)}>-</Button>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ float: "right" }}>
                <strong>${Number.parseInt(item.price.amount) * item.quantity}.00</strong>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
      <br />
      <h3 style={{ textAlign: "center" }}>Input your infomation</h3>
      <br />
      <div style={{ textAlign: "-webkit-center" }}>
        <Form
          name="userInto"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Given Names"
            name="givenNames"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sure Name"
            name="surname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Suburb" name="suburb" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Line1" name="line1" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default CartPage;
