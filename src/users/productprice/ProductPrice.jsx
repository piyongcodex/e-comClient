import React, { useState, useEffect } from "react";

async function getProductPrice(productId) {
  try {
    const response = await fetch(
      `http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/${productId}`
    );

    const data = await response.json();
    return data.product.price;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

const ProductPrice = ({ productId }) => {
  const [productPrice, setProductPrice] = useState(0);

  useEffect(() => {
    let isMounted = true;
    getProductPrice(productId).then((price) => {
      if (isMounted && price) {
        setProductPrice(price);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [productId]);

  return <td>{productPrice}</td>;
};
export default ProductPrice;
