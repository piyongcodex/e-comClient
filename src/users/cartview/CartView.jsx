import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";
import { useParams } from "react-router-dom";

import {
  Card,
  Button,
  Container,
  Table,
  FormControl,
  InputGroup,
  Form,
  FormGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CartView = () => {
  const { user } = useContext(UserContext);
  const { pid } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [prodName, setProdName] = useState([]);
  useEffect(() => {
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/cart/get-cart`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // const { cart } = data;
        // console.log(data.cart[0].cartItems);
        setName(data);
        setCartItems(data.cart[0].cartItems);
        setTotal(data.cart[0].totalPrice);
        console.log(data);

        // setName(data.name);
        // setQuantity(data.quantity); // Update quantity state
        // setSubtotal(data.subtotal); // Update subtotal state
        // setTotal(data.totalPrice); // Update total state
        // setProduct(data); // Store the entire product data if needed for rendering
      });
  }, []);

  function getProductName(productId) {
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProdName(data.product.name);
        console.log(data.product.name);
        //   setName();
      });

    return prodName;
  }
  // let productName = getProductName("664f04bc5900fa62ffe175fe");
  //   console.log("Product Name  ID : ", productName);
  //   For Checkout Update quantity and totals
  //   function updateCart(e) {}

  //   useEffect(() => {
  //     // Fetch product name based on productId
  //     if (cartItems.length > 0) {
  //       cartItems.forEach((item) => {
  //         fetch(
  //           `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${item.productId}`
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             setProdName(data.product.name);
  //           });
  //       });
  //     }
  //   }, [cartItems]);

  // Function to handle updating quantity and subtotal
  const handleQuantityChange = (e, index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = e.target.value;
    updatedItems[index].subtotal =
      updatedItems[index].quantity * updatedItems[index].price;
    setCartItems(updatedItems);
  };

  // Function to handle removing an item from cart
  const handleRemoveItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  return (
    <>
      <h1 className="display-1 mt-5 text-center">Cart</h1>
      <h2 className="display-5 mt-5 text-center">Your Shopping Cart</h2>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Table striped bordered hover>
              <thead className="text-center">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody className="text-center ">
                <tr>
                  <td>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Provident, veritatis!
                  </td>
                  <td>2000</td>
                  <td>
                    <Form>
                      <FormGroup>
                        <InputGroup
                          className="mb-3 mx-auto"
                          style={{ maxWidth: "150px" }}
                        >
                          <Button variant="outline-secondary btn-dark">
                            -
                          </Button>
                          <FormControl type="number" min="1" />
                          <Button variant="outline-secondary btn-dark">
                            +
                          </Button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </td>
                  <td>2000</td>
                  <td>
                    <Button variant="danger">Remove</Button>
                  </td>
                </tr>
              </tbody> */}
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{prodName}</td>
                    <td>{item.price}</td>

                    <td>
                      <Form>
                        <FormGroup>
                          <InputGroup
                            className="mb-3 mx-auto"
                            style={{ maxWidth: "150px" }}
                          >
                            <Button variant="outline-secondary btn-dark">
                              -
                            </Button>
                            <FormControl
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(e, index)}
                            />
                            <Button variant="outline-secondary btn-dark">
                              +
                            </Button>
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </td>
                    <td>{item.subtotal}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Row>
              <Col>
                <p>{total}</p>
              </Col>
              <Col>
                <Button variant="warning">Clear Cart</Button>
              </Col>
              <Col className="text-right">
                <Button variant="dark">
                  Update <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CartView;
