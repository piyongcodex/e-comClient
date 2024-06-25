import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const profileImage =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <div className="text-center display-1 mt-5">ProfilePage</div>
        <Row className="mt-5">
          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="shadow">
              <Card.Img
                variant="top"
                src={profileImage}
                className="img-fluid rounded-circle mx-auto d-block mt-2"
                style={{ width: "150px" }}
              />
              <Card.Body>
                <Card.Title className="text-center">John Doe</Card.Title>
                <Card.Text className="text-center">
                  Full Stack Developer
                </Card.Text>
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <Button variant="primary">Follow</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card style={{ width: "80%" }} className="shadow">
              <Card.Body>
                <Col lg={9}>
                  <Card.Title>Account Name</Card.Title>
                  <Card.Text>John Doe</Card.Text>
                  <Card.Title>Email</Card.Title>
                  <Card.Text>johndoe@mail.com</Card.Text>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text>12345</Card.Text>
                  <Card.Title>Status</Card.Title>
                  <Card.Text>User</Card.Text>
                  <Button onClick={toggleModal}>Change Password</Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for changing password */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="currentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter new password" />
            </Form.Group>
            <Form.Group controlId="confirmNewPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePage;
