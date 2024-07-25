import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const [showEdit, setShowEdit] = useState(false);

  //open modal
  const openEdit = () => {
    setName(name);
    setDescription(description);
    setPrice(price);

    setShowEdit(true);
  };
  //close modal
  const closeEdit = () => {
    setShowEdit(false);

    setName("");
    setDescription("");
    setPrice(0);
  };

  //edit the product
  const editProduct = (e, product) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${product}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name, // name: name
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Product updated successfully") {
          Swal.fire({
            title: "Success!",
            icon: "success",
          });
          closeEdit();
        } else {
          Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please try again",
          });
          closeEdit();
        }
      });
  };

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => openEdit()}>
        Edit
      </Button>

      <Modal show={showEdit} onHide={closeEdit}>
        <Form onSubmit={(e) => editProduct(e, product)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => closeEdit()}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateProduct;
