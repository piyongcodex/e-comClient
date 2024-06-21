import React, { useEffect, useState, useContext } from "react";
import { Table, Container, Button } from "react-bootstrap";
import UserContext from "../../UserContext";

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    // if (user !== null && user.isAdmin === true) {
    fetch(
      "http://ec2-3-145-114-4.us-east-2.compute.amazonaws.com/b5/products/all",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.table(data);
        // return;
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
    // }
  });

  const handleEdit = (id) => {
    console.log("Edit product with ID:", id);
  };

  const handleToggleAvailability = (id, isActive) => {
    console.log(
      "Toggle availability for product with ID:",
      id,
      "New status:",
      !isActive
    );
  };

  {
    user !== null;
    return (
      <Container>
        <h1 className="display-1 text-center mt-5">DashboardPage</h1>

        <Table responsive striped bordered className="mt-5">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Availability</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.isActive ? "Available" : "Unavailable"}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>{" "}
                </td>
                <td>
                  <Button
                    variant={product.isActive ? "danger" : "success"}
                    onClick={() =>
                      handleToggleAvailability(product.id, product.isActive)
                    }
                  >
                    {product.isActive ? "Archive" : "Activate"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
};

export default DashboardPage;
