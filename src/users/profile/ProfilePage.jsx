import React from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
const ProfilePage = () => {
  const profileImage =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";

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

            {/* <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
              <h5 class="my-3">John Smith</h5>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
              <div class="d-flex justify-content-center mb-2">
                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" class="btn btn-primary" data-mdb-button-initialized="true">Follow</button>
                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" class="btn btn-outline-primary ms-1" data-mdb-button-initialized="true">Message</button>
              </div>
            </div> */}
          </Col>
          <Col lg={8}>
            {" "}
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
                  <Button>Change Password</Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
