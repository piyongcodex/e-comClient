import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import "./ArchiveProduct.css"; // Assuming you have a CSS file for styling

const ArchiveProduct = ({ product, isActive, reload }) => {
  const [loading, setLoading] = useState(false);

  const archiveToggle = (productId) => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/products/${productId}/archive`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message === "Product archived successfully") {
          Swal.fire({
            title: "Product archived successfully",
            icon: "success",
          });
          reload();
        } else {
          Swal.fire({
            title: "Something Went Wrong",
            icon: "error",
            text: "Please try again",
          });
        }
      });
  };

  const activateToggle = (productId) => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/products/${productId}/activate`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message === "Product activated successfully") {
          Swal.fire({
            title: "Product activated",
            icon: "success",
          });
          reload();
        } else {
          Swal.fire({
            title: "Something Went Wrong",
            icon: "error",
            text: "Please try again",
          });
        }
      });
  };

  return (
    <div className="archive-product">
      {loading && (
        <div className="overlay">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {isActive ? (
        <Button
          variant="danger"
          size="sm"
          onClick={() => archiveToggle(product)}
          disabled={loading}
        >
          Archive
        </Button>
      ) : (
        <Button
          variant="success"
          size="sm"
          onClick={() => activateToggle(product)}
          disabled={loading}
        >
          Activate
        </Button>
      )}
    </div>
  );
};

export default ArchiveProduct;
