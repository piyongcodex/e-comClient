import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Checkout = ({ reload }) => {
  const checkout = () => {
    fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/orders/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === "No items in cart") {
          Swal.fire({
            title: "Oppss no items in your cart",
            icon: "warning",
          });
        } else if (data.message === "Ordered Successfully") {
          // data.message can also be used as condition
          Swal.fire({
            title: "Order success",
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
    <Button variant="dark" size="sm" onClick={() => checkout()}>
      Checkout
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  );
};

export default Checkout;
