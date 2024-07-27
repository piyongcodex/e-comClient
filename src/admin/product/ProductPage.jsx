import React, { useEffect, useState, useContext } from "react";
import { Tab, Tabs, Card, Row, Col, Button } from "react-bootstrap";

import UpdateProduct from "../updateProduct/UpdateProduct";
import ArchiveProduct from "../archiveproduct/ArchiveProduct";
import AddProduct from "../addproduct/AddProduct";

import UserContext from "../../UserContext";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey="product"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="product" title="Products">
          <Row xs={1} md={2} lg={6} className="g-4">
            {products &&
              products.map((product) => (
                <Col key={product.id}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "25rem",
                      borderRadius: "0.25rem",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.imageURL}
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body
                      style={{
                        flex: "1 1 auto",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <Card.Title
                          style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                        >
                          {product.name}
                        </Card.Title>
                        <Card.Text
                          style={{ fontSize: "0.875rem", margin: "0.5rem 0" }}
                        >
                          {product.description.length > 10
                            ? `${product.description.substring(0, 10)}...`
                            : product.description}
                        </Card.Text>
                        <Card.Text
                          style={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          <strong>Price:</strong> ${product.price}
                        </Card.Text>
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <UpdateProduct product={product} />
                        <ArchiveProduct
                          product={product.id}
                          isActive={product.isActive}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Tab>
        <Tab eventKey="addproduct" title="Create">
          <AddProduct />
        </Tab>
      </Tabs>
    </>
  );
};

export default ProductPage;
