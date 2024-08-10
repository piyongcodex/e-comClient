import React, { useState, useEffect } from "react";
import { Button, Form, Col, Row, Image, Spinner } from "react-bootstrap";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import app from "../../Firebase";
import "./AddProduct.css"; // Assuming you have a CSS file for styling

const AddProduct = ({ reload }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {
    if (image) {
      try {
        const storage = getStorage(app);
        const timestamp = new Date().getTime();
        const imageName = `${timestamp}_${image.name}`;
        const storageRef = ref(storage, `images/${imageName}`);
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
    if (
      name === "" ||
      desc === "" ||
      price <= 0 ||
      imagePreview === null ||
      category === ""
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, desc, price, imagePreview, category]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      // Clean up the object URL after the component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const create = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageURL = await uploadImage();
      const product = {
        name,
        description: desc,
        category,
        price,
        imageURL,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/products/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(product),
        }
      );

      const data = await response.json();
      handleResponse(data, product.name, product.price);
    } catch (error) {
      showAlert("An error occurred", "error", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = (data, name, price) => {
    if (data.product) {
      showAlert(
        "New product added",
        "success",
        `${name}: Php ${parseFloat(price).toFixed(2)}`
      );
      resetFields();
      // onSuccess(); // Notify parent component of success
      reload();
    } else if (data.error === "Product already exists") {
      showAlert("Product exists", "warning");
    } else {
      showAlert("An error occurred", "error", "Please try again");
    }
  };

  const showAlert = (title, icon, text = "", showConfirmButton = true) => {
    Swal.fire({
      title,
      icon,
      text,
      showConfirmButton,
    });
  };

  const resetFields = () => {
    setName("");
    setCategory(""); // This will make the select box default to the first option
    setPrice(0);
    setDesc("");
    setImage(null);
    setImagePreview(null);

    // Reset file input value
    document.getElementById("imageUpload").value = ""; // Clear the file input value
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
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={category === "" ? "category" : category} // Adjust based on your options
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="category">Category</option>{" "}
                {/* Default option */}
                <option value="Keyboard">Keyboard</option>
                <option value="Mouse">Mouse</option>
                <option value="Headset">Headset</option>
                <option value="Monitor">Monitor</option>
                <option value="MOBO">MOBO</option>
                <option value="GPU">GPU</option>
                <option value="PSU">PSU</option>
                <option value="Laptop">Laptop</option>
                <option value="SSD">SSD</option>
                <option value="Printer">Printer</option>
                <option value="CPU">CPU</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                id="imageUpload"
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
      {loading && (
        <div className="overlay">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
};

export default AddProduct;
