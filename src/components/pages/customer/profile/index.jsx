// CustomerProfile.js
import React from "react";

const customerData = {
  name: "Jemish Goti",
  email: "jemish@example.com",
  phone: "+91 98765 43210",
  address: "123, Green Avenue, Surat, Gujarat",
  avatar: "https://via.placeholder.com/150", // Replace with user avatar URL
};

const CustomerProfile = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body text-center p-4">
              <img
                src={customerData.avatar}
                alt="Customer Avatar"
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />
              <h4 className="fw-bold">{customerData.name}</h4>
              <p className="text-muted mb-1">{customerData.email}</p>
              <p className="text-muted mb-1">{customerData.phone}</p>
              <p className="text-muted">{customerData.address}</p>
              <button className="btn btn-primary mt-3">Edit Profile</button>
            </div>
          </div>

          {/* Optional: Account Settings */}
          <div className="card mt-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Account Settings</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Change Password
                  <button className="btn btn-sm btn-outline-secondary">
                    Update
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Manage Addresses
                  <button className="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Delete Account
                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerProfile;
