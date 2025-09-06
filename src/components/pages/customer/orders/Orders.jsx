import React from "react";

const CustomerOrders = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">My Orders</h2>
        <button className="btn btn-primary">Place New Order</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#10234</td>
                  <td>2025-06-25</td>
                  <td>3 Products</td>
                  <td>₹1,250</td>
                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>
                  <td>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#10233</td>
                  <td>2025-06-21</td>
                  <td>2 Products</td>
                  <td>₹750</td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
                  </td>
                  <td>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#10230</td>
                  <td>2025-06-18</td>
                  <td>5 Products</td>
                  <td>₹2,400</td>
                  <td>
                    <span className="badge bg-danger">Cancelled</span>
                  </td>
                  <td>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      View
                    </a>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerOrders;
