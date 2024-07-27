import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ViewOrderList from "../vieworderlist/ViewOrderList";
import ProductPage from "../product/ProductPage";

const AdminPage = () => {
  const [activePage, setActivePage] = useState("orders");

  return (
    <Row>
      <Col xs="1" className="border">
        <h5 className="text-center mt-3">Admin Panel</h5>
        <Col className="mx-4">
          <div className="d-flex flex-column">
            <a
              href="#"
              onClick={() => setActivePage("products")}
              style={{ textDecoration: "none" }}
              className="my-2"
            >
              <i className="fas fa-box fa-lg"></i> Products
            </a>
            <a
              href="#"
              onClick={() => setActivePage("orders")}
              style={{ textDecoration: "none" }}
            >
              <i className="fas fa-receipt fa-lg"></i> Orders
            </a>
          </div>
        </Col>
      </Col>
      <Col xs="11" className="border">
        {activePage === "orders" && <ViewOrderList />}
        {activePage === "products" && <ProductPage />}
      </Col>
    </Row>
  );
};

export default AdminPage;
