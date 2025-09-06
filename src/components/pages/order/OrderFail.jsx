import React from 'react'

const OrderFail = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center p-4">
      
      <h2 className="text-danger fw-bold mb-2">Order Failed</h2>
      <p className="text-muted mb-4">
        Oops! Something went wrong while placing your order. Please try again or
        contact support.
      </p>

      <div
        className="card shadow-sm mb-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body text-start">
          <h5 className="card-title">Possible Reasons</h5>
          <ul className="list-unstyled">
            <li>⚠️ Payment failure</li>
            <li>⚠️ Network issue</li>
            <li>⚠️ Session timeout</li>
          </ul>
        </div>
      </div>

      <div>
        <a href="/checkout" className="btn btn-outline-danger me-2">
          Try Again
        </a>
        <a href="/support" className="btn btn-secondary">
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default OrderFail
