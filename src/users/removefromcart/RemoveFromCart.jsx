import React from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const RemoveFromCart = ({ product, reload }) => {
  const remove = (productId) => {
    console.log(productId);
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/cart/${productId}/remove-from-cart`,
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
        if (data.message === "Item removed from cart successfully") {
          Swal.fire({
            title: "Item removed",
            icon: "success",
          });
          //reload
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
    <Button variant="danger" size="sm" onClick={() => remove(product)}>
      Remove
    </Button>
  );
};

export default RemoveFromCart;
