import React from "react";

const Checkout = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Billing Details */}
        <div className="col-lg-8">
          <form>
            <h4 className="mb-3">Billing Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="zip" required />
              </div>
            </div>
            <hr className="my-4" />
            {/* Payment Info */}
            <h4 className="mb-3">Payment</h4>
            <div className="form-check">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                className="form-check-input"
                defaultChecked
                required
              />
              <label className="form-check-label" htmlFor="credit">
                Credit card
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="debit"
                name="paymentMethod"
                className="form-check-input"
                required
              />
              <label className="form-check-label" htmlFor="debit">
                Debit card
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                className="form-check-input"
                required
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
            <div className="row gy-3 mt-2">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  required
                />
              </div>
            </div>
            <hr className="my-4" />
            <button className="btn btn-primary btn-lg w-100" type="submit">
              Place Order
            </button>
          </form>
        </div>
        {/* Order Summary */}
        <div className="col-lg-4">
          <h4 className="mb-3">Your Order</h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6 className="my-0">Product 1</h6>
                <small className="text-muted">Qty: 1</small>
              </div>
              <span className="text-muted">$59.99</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6 className="my-0">Product 2</h6>
                <small className="text-muted">Qty: 2</small>
              </div>
              <span className="text-muted">$119.98</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>$179.97</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Shipping</span>
              <strong>$10.00</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$189.97</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
