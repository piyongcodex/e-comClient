import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ViewOrderList from "../vieworderlist/ViewOrderList";
import ProductPage from "../product/ProductPage";

const AdminPage = () => {
  const [activePage, setActivePage] = useState("products");

  return (
    <Row className="vh-100">
      <Col xs="1" className="border">
        <h5 className="text-center mt-3">Admin Panel</h5>
        <Col className="ms-3">
          <div className="d-flex flex-column">
            <a
              href="#"
              onClick={() => setActivePage("products")}
              style={{ textDecoration: "none" }}
              className="my-2"
            >
              Products
            </a>
            <a
              href="#"
              onClick={() => setActivePage("orders")}
              style={{ textDecoration: "none" }}
            >
              Orders
            </a>
          </div>
        </Col>
      </Col>
      <Col xs="11">
        {activePage === "orders" && <ViewOrderList />}
        {activePage === "products" && <ProductPage />}
      </Col>
    </Row>
  );
};

export default AdminPage;
