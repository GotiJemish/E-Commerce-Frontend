"use client";
import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Customers = () => {
  const [customers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
      orders: 5,
    },
    {
      id: 2,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-987-6543",
      orders: 2,
    },
    {
      id: 3,
      name: "Robert Smith",
      email: "robert@example.com",
      phone: "555-222-3333",
      orders: 8,
    },
  ]);

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4">Vendor Customers</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Total Orders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id}>
              <td>{cust.id}</td>
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              <td>{cust.phone}</td>
              <td>{cust.orders}</td>
              <td>
                <Button variant="info" size="sm">
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Customers;



