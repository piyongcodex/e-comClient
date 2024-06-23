import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  InputGroup,
  Form,
  FormGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";

import Swal from "sweetalert2";

import UserContext from "../../UserContext";

const ProductDetails = () => {
  const { user } = useContext(UserContext);

  const { pid } = useParams();
  //set values
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${pid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.product.name);
        setDesc(data.product.description);
        setPrice(data.product.price);
      });
  }, []);
  //const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) > 0) {
      setQuantity(Number(value));
    }
  };
  //add to cart
  const addtocart = (e) => {
    e.preventDefault();

    fetch(
      "http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/cart/add-to-cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: pid,
          quantity: quantity,
          subtotal: quantity * price,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Add to cart is successful",
          icon: "success",
          showConfirmButton: true,
        });
      });
  };

  return (
    <Container>
      <Row
        className="justify-content-md-center"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <Col xs="auto">
          <Form onSubmit={(e) => addtocart(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <h5>{name}</h5>
              </Form.Label>
              <br />
              <Form.Label>{desc}</Form.Label>
              <br />
              <Form.Label>Php: {price}</Form.Label>
            </Form.Group>
            <FormGroup>
              <InputGroup
                className="mb-3 mx-auto"
                style={{ maxWidth: "200px" }}
              >
                <Button variant="outline-secondary" onClick={handleDecrement}>
                  -
                </Button>
                <FormControl
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  min="1"
                />
                <Button variant="outline-secondary" onClick={handleIncrement}>
                  +
                </Button>
              </InputGroup>
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
