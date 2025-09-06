"use client";
import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";

const VendorProducts = () => {
  // Dummy product data
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 25, stock: 100 },
    { id: 2, name: "Product B", price: 40, stock: 50 },
  ]);




  // Save Edited Product




  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4">Vendor Products</h2>
      <Button variant="primary" >
        Add New Product
      </Button>

      {/* Product Table */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                 
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

     
    </div>
  );
};

export default VendorProducts;
