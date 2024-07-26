import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../UserContext";
import { useContext, useState } from "react";
import "./AppNavBar.css";

const AppNavBar = () => {
  const { user } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <Navbar className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand href="/" className="ms-3">
          <img
            src="../../images/logo.png"
            alt="Brand Logo"
            style={{ width: "50px", height: "50px" }} // Adjust size as needed
          />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          {user.id !== null ? (
            <>
              {user.isAdmin ? (
                <>
                  <Nav.Link as={Link} to="/addProduct">
                    Add Product
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    DashBoard
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orderslist">
                    Orders
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/" exact="true">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                </>
              )}
              <Nav className="ml-auto me-3">
                <Nav.Link
                  className="dropdown-toggle"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ cursor: "pointer" }}
                >
                  Hello! {user.firstName}
                </Nav.Link>
                <Dropdown
                  show={dropdownOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  align="end"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/profilepage/orders">
                      <i className="fas fa-box"></i> Your Orders
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/profilepage">
                      <i className="fas fa-cog"></i> Account Settings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/logout">
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link as={Link} to="/cart">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link as={Link} to="/bestseller">
                  <i className="fas fa-star"></i> Best Seller
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-sign-in-alt"></i> Sign in
                </Nav.Link>
              </Nav>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
