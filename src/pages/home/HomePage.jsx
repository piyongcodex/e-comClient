import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import "./HomePage.css";
const HomePage = () => {
  return (
    <Container>
      <Row id="hero" className="mb-3">
        <Col>
          <Carousel interval={3000} pause={false} indicators={true}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/hero-sale-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/hero-sale-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/hero-sale-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row id="types" className="text-center">
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/keyboard.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">Keyboard</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/mouse.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">Mouse</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/headset.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">Headset</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/monitor.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">Monitor</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/mobo.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">Motherboard</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/gpu.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">GPU</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} className="card-hover-shadow">
            <Card.Img
              variant="top"
              src="holder.js/100px180../../../images/psu.png"
            />
            <Card.Body>
              <Card.Title className="custom-card-title">
                Power Supply
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row id="new-arrivals" className="py-3">
        <h1 className="new-arrivals-title">New Arrivals</h1>
        <hr />
        {/* 1 */}
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" src="../../../images/rakkhannan.png" />
            <Card.Body>
              <Card.Title className="card-title">RAkk Hannan Pro</Card.Title>
              <Card.Text className="card-text">P 3,999.00</Card.Text>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <i className="far fa-star" style={{ color: "#ccc" }}></i>
                <span style={{ marginLeft: "5px" }} className="card-reviews">
                  No reviews
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <Button variant="warning" className="custom-button">
                  Buy Now
                </Button>
                <Button variant="warning" className="custom-button">
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* 2 */}
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" src="../../../images/rakkhannan.png" />
            <Card.Body>
              <Card.Title className="card-title">RAkk Hannan Pro</Card.Title>
              <Card.Text className="card-text">P 3,999.00</Card.Text>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <i className="far fa-star" style={{ color: "#ccc" }}></i>
                <span style={{ marginLeft: "5px" }} className="card-reviews">
                  No reviews
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <Button variant="warning" className="custom-button">
                  Buy Now
                </Button>
                <Button variant="warning" className="custom-button">
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* 3 */}
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" src="../../../images/rakkhannan.png" />
            <Card.Body>
              <Card.Title className="card-title">RAkk Hannan Pro</Card.Title>
              <Card.Text className="card-text">P 3,999.00</Card.Text>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <i className="far fa-star" style={{ color: "#ccc" }}></i>
                <span style={{ marginLeft: "5px" }} className="card-reviews">
                  No reviews
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <Button variant="warning" className="custom-button">
                  Buy Now
                </Button>
                <Button variant="warning" className="custom-button">
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* 4 */}
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" src="../../../images/rakkhannan.png" />
            <Card.Body>
              <Card.Title className="card-title">RAkk Hannan Pro</Card.Title>
              <Card.Text className="card-text">P 3,999.00</Card.Text>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <i className="far fa-star" style={{ color: "#ccc" }}></i>
                <span style={{ marginLeft: "5px" }} className="card-reviews">
                  No reviews
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <Button variant="warning" className="custom-button">
                  Buy Now
                </Button>
                <Button variant="warning" className="custom-button">
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* 5 */}
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" src="../../../images/rakkhannan.png" />
            <Card.Body>
              <Card.Title className="card-title">RAkk Hannan Pro</Card.Title>
              <Card.Text className="card-text">P 3,999.00</Card.Text>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <i className="far fa-star" style={{ color: "#ccc" }}></i>
                <span style={{ marginLeft: "5px" }} className="card-reviews">
                  No reviews
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <Button variant="warning" className="custom-button">
                  Buy Now
                </Button>
                <Button variant="warning" className="custom-button">
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <hr className="mt-3" />
      </Row>
      <Row id="reviews">
        <h1>What Customers say about us</h1>
        <Col className="text-center">
          <Card style={{ width: "25rem", height: "11rem" }}>
            <Card.Body>
              <Card.Title>Rakk Hannan Pro</Card.Title>
              <Card.Text>
                Sobrang sulit! sobrang sarap mag type, take note it can be
                modified and ang cute ng design.
              </Card.Text>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <Card.Subtitle className="mb-2 text-muted">
                Jennieca
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card style={{ width: "25rem", height: "11rem" }}>
            <Card.Body>
              <Card.Title>RAkk Haliya</Card.Title>
              <Card.Text>
                Ganda ng design na case na to, sobrang nagustuhan ng husband ko.
              </Card.Text>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <Card.Subtitle className="mb-2 text-muted">Ruby</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card style={{ width: "25rem", height: "11rem" }}>
            <Card.Body>
              <Card.Title>Logitech G304</Card.Title>
              <Card.Text>Sobrang gaan gamitin.</Card.Text>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <i className="fas fa-star" style={{ color: "green" }}></i>
              <Card.Subtitle className="mb-2 text-muted">
                Princess Mae
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row id="about">
        <h1 className="mt-3">PIYONGX-ECOM: The Future of Tech Shopping</h1>
        <p style={{ textAlign: "justify" }}>
          In today's fast-paced world, convenience is a top priority for
          everyone, and the realm of online shopping has transformed the way we
          purchase goods and services. EasyPC, your go-to computer store online,
          is revolutionizing the way customers buy computer components such
          as motherboards, memory, solid-state drives, power supplies, PC
          cases, and processors. EasyPC also offers computer accessories such as
          keyboards, headset, monitors, speakers and many more. With a strong
          focus on making the buying experience fast, safe, and reliable, EasyPC
          has become the ultimate destination for tech enthusiasts and casual
          users alike.
        </p>
        <p style={{ textAlign: "justify" }}>
          In today's fast-paced world, convenience is a top priority for
          everyone, and the realm of online shopping has transformed the way we
          purchase goods and services. EasyPC, your go-to computer store online,
          is revolutionizing the way customers buy computer components such
          as motherboards, memory, solid-state drives, power supplies, PC
          cases, and processors. EasyPC also offers computer accessories such as
          keyboards, headset, monitors, speakers and many more. With a strong
          focus on making the buying experience fast, safe, and reliable, EasyPC
          has become the ultimate destination for tech enthusiasts and casual
          users alike.
        </p>
      </Row>
    </Container>
  );
};

export default HomePage;
