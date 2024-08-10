import React from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
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
    <Navbar className="custom-navbar">
      <Navbar.Brand href="/" className=""></Navbar.Brand>
      <Nav className="ms-auto">
        {user.id !== null ? (
          <>
            {user.isAdmin ? null : (
              <>
                <Nav.Link as={NavLink} to="/" exact="true">
                  Home
                </Nav.Link>
              </>
            )}
            <Nav className="">
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
                  {!user.isAdmin ? (
                    <Dropdown.Item as={NavLink} to="/profilepage/orders">
                      Your Orders
                    </Dropdown.Item>
                  ) : null}
                  <Dropdown.Item as={NavLink} to="/profilepage">
                    Account Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={NavLink} to="/logout">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {!user.isAdmin ? (
                <Nav.Link as={Link} to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Nav.Link>
              ) : null}
            </Nav>
          </>
        ) : (
          <>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Log in
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Sign Up
              </Nav.Link>
            </Nav>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavBar;
