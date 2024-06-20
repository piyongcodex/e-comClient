import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className="p-5 text-center">
          <h1>Mabuhay Philippines Halikana </h1>
          <p>Tara nat magsaya sheesh</p>

          <Link className="btn btn-primary" to="/products">
            Products
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
