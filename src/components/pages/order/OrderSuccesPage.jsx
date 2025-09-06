import React from 'react'

const OrderSuccesPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center p-4">
      {/* <CheckCircleFill color="green" size={64} className="mb-3" /> */}
      <h2 className="text-success fw-bold mb-2">Order Placed Successfully!</h2>
      <p className="text-muted mb-4">
        Thank you for your purchase. Your order ID is <strong>#ORD10245</strong>
        .
      </p>

      <div
        className="card shadow-sm mb-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body text-start">
          <h5 className="card-title">Order Summary</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Date:</strong> June 28, 2025
            </li>
            <li>
              <strong>Items:</strong> 3 Products
            </li>
            <li>
              <strong>Total Amount:</strong> ₹1,250
            </li>
            <li>
              <strong>Payment:</strong> Paid via UPI
            </li>
          </ul>
        </div>
      </div>

      <div>
        <a href="/" className="btn btn-outline-primary me-2">
          Continue Shopping
        </a>
        <a href="/my-orders" className="btn btn-primary">
          View Orders
        </a>
      </div>
    </div>
  );
}

export default OrderSuccesPage
