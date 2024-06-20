import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4005/b5/products/active")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="p-5 text-center">Product</Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
