import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import { deleteObject } from "firebase/storage";
import Swal from "sweetalert2";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../../Firebase";
import "./UpdateProduct.css"; // Assuming you have a CSS file for styling

const UpdateProduct = ({ product, reload }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [imageURL, setImageURL] = useState(product.imageURL);
  const [showEdit, setShowEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(product.imageURL);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category);
    setImageURL(product.imageURL);
    setImagePreview(product.imageURL);
  }, [product]);

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

  const openEdit = () => {
    setShowEdit(true);
  };

  const closeEdit = () => {
    setShowEdit(false);
    reload();
  };

  const editProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let newImageURL = imageURL;

      if (imagePreview !== imageURL) {
        newImageURL = await uploadImage();

        if (newImageURL) {
          const storage = getStorage(app);
          const previousImageRef = ref(storage, imageURL);
          deleteObject(previousImageRef).catch((error) => {
            console.log("Error deleting previous image:", error);
          });
        }
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/products/${product._id}/update`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name,
            description,
            price,
            category,
            imageURL: newImageURL,
          }),
        }
      );

      const data = await response.json();

      setLoading(false);
      if (data.message === "Product updated successfully") {
        Swal.fire({
          title: "Success!",
          icon: "success",
          text: data.message,
        });
        closeEdit();
      } else {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: data.message || "Please try again",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "An unexpected error occurred. Please try again.",
      });
      console.error("Error updating product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Button variant="primary" size="sm" onClick={openEdit}>
        Edit
      </Button>
      <Modal show={showEdit} onHide={closeEdit}>
        <Form onSubmit={editProduct} className="m-5">
          <Modal.Body>
            <Form.Group>
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="image-preview mt-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
            </Form.Group>
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
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEdit}>
              Close
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {loading && (
        <div className="overlay">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
