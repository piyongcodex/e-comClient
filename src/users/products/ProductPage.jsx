import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UserContext from "../../UserContext";
import { DashboardPage } from "../../admin";

const ProductPage = () => {
  const { user } = useContext(UserContext);
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

  // Placeholder image URL
  const placeholderImgUrl =
    "https://via.placeholder.com/286x180.png?text=Placeholder";

  // return user.isAdmin ? (
  //   <DashboardPage />
  // ) : (
  //   <Container className="mt-5">
  //     {/* old code */}
  //     {/* <Row>
  //     {showProduct.map((product) => (
  //       <Col key={product._id} className="p-5 text-center">
  //         <div>
  //           <h3>{product.name}</h3>
  //           <p>{product.description}</p>
  //           <p>Price: ${product.price}</p>
  //         </div>
  //       </Col>
  //     ))}
  //   </Row> */}
  //     <Row xs={1} md={2} lg={3} className="g-4">
  //       {showProduct.map((product) => (
  //         <Col key={product._id}>
  //           <Card className="h-100 d-flex flex-column">
  //             <Card.Img
  //               variant="top"
  //               src={product.image || placeholderImgUrl}
  //               alt={product.name}
  //             />
  //             <Card.Body className="d-flex flex-column">
  //               <Card.Title>{product.name}</Card.Title>
  //               <Card.Text>{product.description}</Card.Text>
  //               <div className="mt-auto">
  //                 <Card.Text className="mt-auto">
  //                   Price: ${product.price}
  //                 </Card.Text>
  //                 <Button variant="primary" className="w-100">
  //                   Buy Now
  //                 </Button>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       ))}
  //     </Row>
  //   </Container>
  // );
  return (
    <Container className="mt-5">
      {/* <Row>
  //     {showProduct.map((product) => (
  //       <Col key={product._id} className="p-5 text-center">
  //         <div>
  //           <h3>{product.name}</h3>
  //           <p>{product.description}</p>
  //           <p>Price: ${product.price}</p>
  //         </div>
  //       </Col>
  //     ))}
  //   </Row> */}

      <Row xs={1} md={2} lg={3} className="g-4">
        {showProduct.map((product) => (
          <Col key={product._id}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={product.image || placeholderImgUrl}
                alt={product.name}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="mt-auto">
                  <Card.Text className="mt-auto">
                    Price: ${product.price}
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
