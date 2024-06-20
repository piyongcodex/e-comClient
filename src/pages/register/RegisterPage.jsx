import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import UserContext from "../../UserContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { user } = useContext(UserContext);

  // For the Input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  // For The Button
  const [isActive, setIsActive] = useState(false);

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(mobileNo);
  console.log(password);

  function registerUser(e) {
    e.preventDefault();

    fetch(
      "http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobileNo: mobileNo,
          password: password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        if (data.message === "Registered Successfully") {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobileNo("");
          setPassword("");
          Swal.fire({
            title: "Registered Successfully",
            icon: "success",
            // text: "Welcome to !",
          });
        } else if (data.error === "Email invalid") {
          Swal.fire({
            title: "Email is Invalid",
            icon: "warning",
            // text: "Welcome to !",
          });
        } else if (data.error === "Mobile number invalid") {
          Swal.fire({
            title: "Mobile number invalid",
            icon: "warning",
            text: "Please Change ! ",
          });
        } else if (data.error === "Password must be atleast 8 characters") {
          Swal.fire({
            title: "Password must be atleast 8 characters",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Error In Saving",
            icon: "error",
          });
        }
      });
  }

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      mobileNo !== "" &&
      email !== "" &&
      password !== "" &&
      mobileNo !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    // dependency - optional array
  }, [firstName, lastName, email, mobileNo, password]);

  return user.id !== null ? (
    <Navigate to="/products" />
  ) : (
    <Container>
      <Col md={6}>
        <Row className="justify-content-center align-items-center vh-100">
          <Card>
            <Card.Body>
              <Form onSubmit={(e) => registerUser(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Enter First Name .."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    type="text"
                    placeholder="Enter Mobile No. ."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email . ."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password . ."
                  />
                </Form.Group>

                {isActive ? (
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                ) : (
                  <Button variant="danger" type="submit" disabled>
                    Register
                  </Button>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default RegisterPage;
