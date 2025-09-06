"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const VendorProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Vendor",
    email: "vendor@example.com",
    storeName: "John's Electronics",
    address: "123 Market Street, NY",
    phone: "555-123-4567",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setProfile((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
    // TODO: Send updated profile to backend
  };

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4">Vendor Profile</h2>

      <Card className="p-4">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4} className="text-center">
              <div className="mb-3">
                <img
                  src={preview || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="img-thumbnail"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                />
              </Form.Group>
            </Col>

            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Store Name</Form.Label>
                <Form.Control
                  type="text"
                  name="storeName"
                  value={profile.storeName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default VendorProfile;


