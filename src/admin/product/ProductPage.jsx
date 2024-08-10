import React, { useEffect, useState } from "react";
import { Tab, Tabs, Card, Row } from "react-bootstrap";
import UpdateProduct from "../updateProduct/UpdateProduct";
import ArchiveProduct from "../archiveproduct/ArchiveProduct";
import AddProduct from "../addproduct/AddProduct";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [reloadFlag, setReloadFlag] = useState(false); // Track reload

  const reload = () => {
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
  };
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

  // useEffect(() => {
  //   reload();
  // }, [reloadFlag]); // Reload when reloadFlag changes

  // const handleAddProductSuccess = () => {
  //   setReloadFlag(!reloadFlag); // Trigger reload
  // };

  return (
    <>
      <Tabs
        defaultActiveKey="product"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="product" title="Products">
          <Row
            xs={1}
            md={2}
            lg={4}
            style={{ rowGap: "1rem", columnGap: "1rem" }}
            className="m-2"
          >
            {products &&
              products.map((product) => (
                <Card
                  key={product.id}
                  style={{
                    width: "13rem",
                    height: "25rem",
                    borderRadius: "0.25rem",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="p-3"
                >
                  <Card.Img
                    variant="top"
                    src={product.imageURL}
                    style={{
                      width: "100%",
                      height: "12rem",
                      objectFit: "scale-down",
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
                      <UpdateProduct product={product} reload={reload} />
                      <ArchiveProduct
                        product={product._id}
                        isActive={product.isActive}
                        reload={reload}
                      />
                    </div>
                  </Card.Body>
                </Card>
              ))}
          </Row>
        </Tab>
        <Tab eventKey="addproduct" title="Create">
          {/* <AddProduct onSuccess={handleAddProductSuccess} /> */}
          <AddProduct reload={reload} />
        </Tab>
      </Tabs>
    </>
  );
};

export default ProductPage;
