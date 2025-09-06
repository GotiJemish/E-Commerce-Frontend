"use client"
import React, { useState } from "react";
import { Table, Button, Container, Form } from "react-bootstrap";

const VendorOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      product: "Wireless Earbuds",
      quantity: 2,
      price: 100,
      status: "Pending",
    },
    {
      id: 2,
      customer: "Alice Johnson",
      product: "Laptop Stand",
      quantity: 1,
      price: 35,
      status: "Shipped",
    },
    {
      id: 3,
      customer: "Sam Smith",
      product: "Bluetooth Speaker",
      quantity: 3,
      price: 150,
      status: "Delivered",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4">Vendor Orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Total ($)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.quantity * order.price}</td>
              <td>
                <Form.Select
                  size="sm"
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </Form.Select>
              </td>
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

export default VendorOrders;

