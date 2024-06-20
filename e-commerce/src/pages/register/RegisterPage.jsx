import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <Container>
      <Col md={6}>
        <Row className="justify-content-center align-items-center vh-100">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name .." />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile No. ." />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email . ." />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password . ."
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default RegisterPage;
