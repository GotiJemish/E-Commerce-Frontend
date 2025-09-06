"use client";
import React, { useEffect, useState } from "react";

import withLoader from "@/components/hocs/loader/withLoader";
import Link from "next/link";
import "./index.css";

const Sidebar = () => {
  // const path = usePathname();
  // const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   // Ensure this runs on client only
  //   const role = localStorage.getItem("user");
  //   setUserRole(role || "");
  // }, []);

  // const sidebarLinks =
  //   userRole === "admin" ? AdminSideBarLinks : VendorSidebarLinks;




  return (
    <nav
      id="sidebar"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h5 className="px-3">My Account</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            {/* for customers */}
            <Link className="nav-link active" href="/customer/profile">
              <i className="bi bi-person" /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/customer/orders">
              <i className="bi bi-box" /> My Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/customer/wishlist">
              <i className="bi bi-heart" /> Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/customer/address">
              <i className="bi bi-geo-alt" /> Addresses
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-danger border-0 bg-transparent"
              onClick={() => alert("Logged out")}
            >
              <i className="bi bi-box-arrow-right" /> Logout
            </button>
          </li>
        </ul>

        {/* this is for vendor */}
        <ul className="nav flex-column">
          <li className="nav-item">
            {/* for customers */}
            <Link className="nav-link active" href="/vendor/profile">
              <i className="bi bi-person" /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/vendor/orders">
              <i className="bi bi-box" /> Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/vendor/products">
              <i className="bi bi-heart" /> Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/vendor/add-product">
              <i className="bi bi-heart" />Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/vendor/customers">
              <i className="bi bi-geo-alt" /> Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/vendor/reports">
              <i className="bi bi-geo-alt" /> Reports
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-danger border-0 bg-transparent"
              onClick={() => alert("Logged out")}
            >
              <i className="bi bi-box-arrow-right" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default (withLoader(Sidebar));

