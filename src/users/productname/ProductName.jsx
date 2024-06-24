import React, { useState, useEffect } from "react";

async function getProductName(productId) {
  try {
    const response = await fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${productId}`
    );

    const data = await response.json();
    return data.product.name;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

const ProductName = ({ productId }) => {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    let isMounted = true;
    getProductName(productId).then((name) => {
      if (isMounted && name) {
        setProductName(name);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [productId]);

  return <td>{productName}</td>;
};
export default ProductName;
