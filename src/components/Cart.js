import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
        <Card className="mt-3">
      <h2 className="text-success text-center">Your Cart</h2>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price :- {item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h2 className="text-warning text-center">Cart is empty</h2>
      )}
      </Card>
    </Container>
  );
};

export default Cart;
