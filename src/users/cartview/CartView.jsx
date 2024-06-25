import React, { useEffect, useState } from "react";
// import UserContext from "../../UserContext";
// import { useParams } from "react-router-dom";
import RemoveFromCart from "../removefromcart/RemoveFromCart";
import ClearCart from "../clearcart/ClearCart";

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
  // const { user } = useContext(UserContext);
  // const { pid } = useParams();
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [quantity, setQuantity] = useState(0);
  // const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

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
        console.table(data);
        console.log(data.cart[0].cartItems);

        setCartItems(data.cart[0].cartItems);
        setTotal(data.cart[0].totalPrice);
        console.log(data);
      });
  }, [cartItems]);

  const fetchProductDetails = (productId) => {
    return fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          name: data.product.name,
          price: data.product.price,
        };
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        return { name: "", price: 0 }; // Return default values or handle error gracefully
      });
  };

  useEffect(() => {
    const fetchProductDetailsForCart = async () => {
      const promises = cartItems.map((item) =>
        fetchProductDetails(item.productId)
      );
      const resolvedProductDetails = await Promise.all(promises);
      setProductDetails(resolvedProductDetails);
    };

    if (cartItems.length > 0) {
      fetchProductDetailsForCart();
    }
  }, [cartItems]);

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...cartItems];
    const newQuantity = updatedItems[index].quantity + change;
    if (newQuantity < 1) return; // Ensure quantity doesn't go below 1
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].subtotal =
      newQuantity * (productDetails[index] ? productDetails[index].price : 0);
    setCartItems(updatedItems);
    setTotal(updatedItems.reduce((acc, item) => acc + item.subtotal, 0)); // Update total
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    setTotal(updatedItems.reduce((acc, item) => acc + item.subtotal, 0)); // Update total

    //remove to database
    console.log(cartItems[index].productId);
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
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {productDetails[index] ? productDetails[index].name : ""}
                    </td>
                    <td>
                      {productDetails[index] ? productDetails[index].price : 0}
                    </td>
                    <td>
                      <Form>
                        <FormGroup>
                          <InputGroup
                            className="mb-3 mx-auto"
                            style={{ maxWidth: "150px" }}
                          >
                            <Button
                              variant="outline-secondary btn-dark"
                              onClick={() => handleQuantityChange(index, -1)}
                            >
                              -
                            </Button>
                            <FormControl
                              type="number"
                              min="1"
                              value={item.quantity}
                              readOnly
                            />
                            <Button
                              variant="outline-secondary btn-dark"
                              onClick={() => handleQuantityChange(index, 1)}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </td>
                    <td>
                      {item.quantity *
                        (productDetails[index]
                          ? productDetails[index].price
                          : 0)}
                    </td>
                    <td>
                      <RemoveFromCart product={item.productId} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Row>
              <Row>
                <Col>
                  <ClearCart />
                </Col>
                <Col className=" d-flex justify-content-end align-items-center">
                  <Button variant="dark">
                    CheckOut <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Col>
              </Row>

              <Col>
                <h1 className="text-center">Total: ${total.toFixed(2)}</h1>
              </Col>
            </Row>
            <Row></Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CartView;
