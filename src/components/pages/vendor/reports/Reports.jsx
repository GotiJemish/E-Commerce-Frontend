"use client";
import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const Reports = () => {
  const summary = {
    totalSales: 125,
    revenue: 3250,
    productsSold: 310,
    returns: 4,
  };

  const recentTransactions = [
    {
      id: 1,
      date: "2025-06-25",
      product: "Bluetooth Speaker",
      amount: 120,
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-06-24",
      product: "Phone Case",
      amount: 25,
      status: "Pending",
    },
    {
      id: 3,
      date: "2025-06-23",
      product: "Wireless Charger",
      amount: 45,
      status: "Completed",
    },
    {
      id: 4,
      date: "2025-06-22",
      product: "LED Monitor",
      amount: 200,
      status: "Returned",
    },
  ];

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4">Vendor Reports</h2>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>Total Sales</Card.Title>
              <Card.Text>{summary.totalSales}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>${summary.revenue}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="info" text="white">
            <Card.Body>
              <Card.Title>Products Sold</Card.Title>
              <Card.Text>{summary.productsSold}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="danger" text="white">
            <Card.Body>
              <Card.Title>Returns</Card.Title>
              <Card.Text>{summary.returns}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Transactions Table */}
      <Card>
        <Card.Header>Recent Transactions</Card.Header>
        <Table striped bordered hover responsive className="mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Product</th>
              <th>Amount ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.product}</td>
                <td>{tx.amount}</td>
                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Reports;
