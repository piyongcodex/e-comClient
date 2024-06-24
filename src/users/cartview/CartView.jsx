import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";
import { useParams } from "react-router-dom";
import ProductName from "../productname/ProductName";
import ProductPrice from "../productprice/ProductPrice";

import {
  Card,
  Button,
  Container,
  Table,
  FormControl,
  InputGroup,
  Form,
  FormGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, handleIncrement, handleDecrement, handleChange }) => {
  return (
    <tr>
      <ProductName productId={item.productId} />
      <ProductPrice productId={item.productId} />
      <td>
        <Form>
          <FormGroup>
            <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "150px" }}>
              <Button
                variant="outline-secondary btn-dark"
                onClick={handleDecrement}
              >
                -
              </Button>
              <FormControl
                type="number"
                value={item.quantity}
                onChange={handleChange}
                min="1"
              />
              <Button
                variant="outline-secondary btn-dark"
                onClick={handleIncrement}
              >
                +
              </Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </td>
      <td>{item.subtotal}</td>
      <td>
        <Button variant="danger">Remove</Button>
      </td>
    </tr>
  );
};

const CartView = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/cart/get-cart`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cart[0].cartItems);
        setTotal(data.cart[0].totalPrice);
      });
  }, []);

  const handleIncrement = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecrement = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (value === "" || Number(value) > 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity = Number(value);
      setCartItems(newCartItems);
    }
  };

  return (
    <>
      <h1 className="display-1 mt-5 text-center">Cart</h1>
      <h2 className="display-5 mt-5 text-center">Your Shopping Cart</h2>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Table striped bordered hover>
              <thead className="text-center">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    handleIncrement={() => handleIncrement(index)}
                    handleDecrement={() => handleDecrement(index)}
                    handleChange={(e) => handleChange(index, e)}
                  />
                ))}
              </tbody>
            </Table>

            <Row>
              <Col>
                <p>{total}</p>
              </Col>
              <Col>
                <Button variant="warning">Clear Cart</Button>
              </Col>
              <Col className="text-right">
                <Button variant="dark">
                  Update <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CartView;
