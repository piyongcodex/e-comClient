import React, { useState, useEffect } from "react";
import { Button, Form, Col, Row, Image } from "react-bootstrap";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import app from "../../Firebase";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Added state for image preview
  const [isDisabled, setIsDisabled] = useState(true);

  const checkProductExists = async () => {
    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_API_BASE_URL
        }/products?name=${encodeURIComponent(name)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      return data.exists; // Assuming the API returns an object with an 'exists' property
    } catch (error) {
      console.error("Error checking if product exists:", error);
      return false;
    }
  };

  const uploadImage = async () => {
    if (image) {
      try {
        const storage = getStorage(app);
        const timestamp = new Date().getTime(); // Get current timestamp
        const imageName = `${timestamp}_${image.name}`; // Create a unique image name
        const storageRef = ref(storage, `images/${imageName}`); // Reference with unique name
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);
        return downloadUrl;
      } catch (error) {
        console.log("Error uploading image:", error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    if (name === "" || desc === "" || price <= 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, desc, price]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      // Create a local URL for preview
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      // Clean up the object URL after the component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const create = async (e) => {
    e.preventDefault();

    const productExists = await checkProductExists(); // Check if the product exists

    if (productExists) {
      Swal.fire({
        title: "Product exists",
        icon: "warning",
        showConfirmButton: true,
      });
      return;
    }

    const imageURL = await uploadImage(); // Upload the image and get the URL

    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        description: desc,
        price: price,
        imageURL: imageURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.product) {
          Swal.fire({
            title: "New product added",
            icon: "success",
            text: `${name}: Php ${parseFloat(price).toFixed(2)}`,
            showConfirmButton: true,
          });
          // Reset all fields
          setName("");
          setPrice(0);
          setDesc("");
          setImage(null); // Reset image
          setImagePreview(null); // Reset image preview
        } else if (data.error === "Product already exists") {
          Swal.fire({
            title: "Product exists",
            icon: "warning",
            showConfirmButton: true,
          });
        } else {
          Swal.fire({
            title: "An error occurred",
            icon: "error",
            text: "Please try again",
            showConfirmButton: true,
          });
        }
      });
  };

  return (
    <>
      <Row className="justify-content-center align-items-center m-5 p-5">
        <Col xs={5}>
          <Form onSubmit={(e) => create(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type the product name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type the description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Image preview"
                  thumbnail
                  className="mt-3"
                  style={{ maxHeight: "200px" }}
                />
              )}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;
