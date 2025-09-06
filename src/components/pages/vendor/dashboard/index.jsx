"use client";
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const VendorDashboard = () => {
  // You can later replace this with dynamic data
  const vendorName = "John Doe";

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2>Welcome, vendor {vendorName}</h2>
      <p className="lead">Here's a summary of your account activity.</p>
      <div>
        <Row className="mb-4">
          <Col>
            <Card bg="primary" text="white">
              <Card.Body>
                <Card.Title>Total Sales</Card.Title>
                <Card.Text>$5,240</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="success" text="white">
              <Card.Body>
                <Card.Title>Orders</Card.Title>
                <Card.Text>128</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="warning" text="dark">
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <Card.Text>56</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card>
          <Card.Header>Recent Orders</Card.Header>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Product A</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Product B</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mike Ross</td>
                <td>Product C</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default VendorDashboard;
