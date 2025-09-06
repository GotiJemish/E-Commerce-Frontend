import Sidebar from "@/components/layout/sidebar/Sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
        <h2>Welcome, John Doe</h2>
        <p className="lead">Here's a summary of your account activity.</p>
        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <p className="card-text">You have 5 active orders.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Wishlist</h5>
                <p className="card-text">3 items saved for later.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Addresses</h5>
                <p className="card-text">2 saved shipping addresses.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Orders Table */}
        <div className="card">
          <div className="card-header">Recent Orders</div>
          <div className="card-body p-0">
            <table className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th>#Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>June 20, 2025</td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
                  </td>
                  <td>$199.00</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#1002</td>
                  <td>June 25, 2025</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Processing
                    </span>
                  </td>
                  <td>$89.00</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
