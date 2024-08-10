import React from "react";
import { Row, Col, Carousel, Card, Button, Container } from "react-bootstrap";
import "./HomePage.css";
const HomePage = () => {
  const products = [
    { name: "Keyboard", image: "keyboard.png" },
    { name: "Mouse", image: "mouse.png" },
    { name: "Headset", image: "headset.png" },
    { name: "Monitor", image: "monitor.png" },
    { name: "MOBO", image: "mobo.png" },
    { name: "GPU", image: "gpu.png" },
    { name: "PSU", image: "psu.png" },
    { name: "Laptop", image: "laptops.png" },
    { name: "SSD", image: "ssd.png" },
    { name: "Printer", image: "printer.png" },
    { name: "CPU", image: "processor.png" },
  ];
  const newproducts = [
    {
      name: "RAkk Hannan Pro",
      image: "rakkhannan.png",
      price: "P 3,999.00",
      reviews: "No reviews",
    },
    {
      name: "MSI Bravo 15 B7ED-009PH 15.6",
      image: "msi-laptop.png",
      price: "P 34,199.00",
      reviews: "No reviews",
    },
    {
      name: "AMD Ryzen 7 5700X 8-Core",
      image: "ryzen-7.png",
      price: "P 10,799.00",
      reviews: "No reviews",
    },
    {
      name: "SAMSUNG SSD 860/870 EVO",
      image: "samsung-evo.png",
      price: "P 3,280.00",
      reviews: "No reviews",
    },
    {
      name: "Inplay ATX Power Supply 450W",
      image: "inplay-psu.png",
      price: "P 1,755.00",
      reviews: "No reviews",
    },

    // ...add other products here
  ];
  return (
    <>
      <Row id="hero">
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
      <Container className="border hero-container p-3">
        <Row id="types" className="justify-content-center">
          {products.map((product, index) => (
            <Col
              key={index}
              className="d-flex justify-content-center align-items-stretch border col-hover-shadow"
            >
              <Card
                style={{ width: "100%", height: "100%", border: "none" }}
                className="text-center d-flex flex-column"
              >
                <Card.Img
                  variant="top"
                  src={`../../../images/${product.image}`}
                  style={{ objectFit: "cover", height: "50%" }} // Adjust height if needed
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="custom-card-title">
                    {product.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row id="new-arrivals" className="py-3">
          <Col xs={12}>
            <h1 className="new-arrivals-title text-center">New Arrivals</h1>
          </Col>
          {newproducts.map((product, index) => (
            <Col key={index} className="d-flex justify-content-center mb-3">
              <Card
                style={{ width: "13rem" }}
                className="card-hover-shadow text-center"
              >
                <Card.Img
                  variant="top"
                  src={`../../../images/${product.image}`}
                />
                <Card.Body>
                  <Card.Title className="card-title">{product.name}</Card.Title>
                  <Card.Text className="card-text">{product.price}</Card.Text>
                  <div className="mb-3 d-flex align-items-center justify-content-center">
                    <i className="far fa-star" style={{ color: "#ccc" }}></i>
                    <span className="card-reviews ml-2">{product.reviews}</span>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
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
          ))}
          <Col xs={12}>
            <hr className="mt-3" />
          </Col>
        </Row>
        <Row id="reviews" className="py-5">
          <Row className="pb-3">
            <h1 className="w-100 text-center">What Customers say about us</h1>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="text-center" xs={12} md={6} lg={4}>
              <Card
                className="mx-auto"
                style={{ width: "80%", height: "11rem" }}
              >
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
            <Col className="text-center" xs={12} md={6} lg={4}>
              <Card
                className="mx-auto"
                style={{ width: "80%", height: "11rem" }}
              >
                <Card.Body>
                  <Card.Title>RAkk Haliya</Card.Title>
                  <Card.Text>
                    Ganda ng design na case na to, sobrang nagustuhan ng husband
                    ko.
                  </Card.Text>
                  <i className="fas fa-star" style={{ color: "green" }}></i>
                  <i className="fas fa-star" style={{ color: "green" }}></i>
                  <i className="fas fa-star" style={{ color: "green" }}></i>
                  <i className="fas fa-star" style={{ color: "green" }}></i>
                  <i className="fas fa-star" style={{ color: "green" }}></i>
                  <Card.Subtitle className="mb-2 text-muted">
                    Ruby
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-center" xs={12} md={6} lg={4}>
              <Card
                className="mx-auto"
                style={{ width: "80%", height: "11rem" }}
              >
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
        </Row>
        <Row id="about" className="py-5">
          <h1 className="pb-3">PIYONGX-ECOM: The Future of Tech Shopping</h1>
          <p style={{ textAlign: "justify" }} className="px-4">
            In today's fast-paced world, convenience is a top priority for
            everyone, and the realm of online shopping has transformed the way
            we purchase goods and services. EasyPC, your go-to computer store
            online, is revolutionizing the way customers buy computer components
            such as motherboards, memory, solid-state drives, power supplies, PC
            cases, and processors. EasyPC also offers computer accessories such
            as keyboards, headset, monitors, speakers and many more. With a
            strong focus on making the buying experience fast, safe, and
            reliable, EasyPC has become the ultimate destination for tech
            enthusiasts and casual users alike.
          </p>
          <p style={{ textAlign: "justify" }} className="px-4">
            In today's fast-paced world, convenience is a top priority for
            everyone, and the realm of online shopping has transformed the way
            we purchase goods and services. EasyPC, your go-to computer store
            online, is revolutionizing the way customers buy computer components
            such as motherboards, memory, solid-state drives, power supplies, PC
            cases, and processors. EasyPC also offers computer accessories such
            as keyboards, headset, monitors, speakers and many more. With a
            strong focus on making the buying experience fast, safe, and
            reliable, EasyPC has become the ultimate destination for tech
            enthusiasts and casual users alike.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
