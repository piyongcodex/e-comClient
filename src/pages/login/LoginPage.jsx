import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container>
      <Col>
        <Row className="justify-content-center align-items-center vh-100">
          {/* <h1 className="">Login Page</h1> */}
          <Card>
            {/* <Card.Header>Login Page</Card.Header> */}
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default LoginPage;
