import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ProductPage = () => {
  const [showProduct, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      "http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/active"
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  return (
    <Container>
      <Row>
        {showProduct.map((product) => (
          <Col key={product.id} className="p-5 text-center">
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
