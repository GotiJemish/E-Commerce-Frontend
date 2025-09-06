"use client";

import React from "react";
import "./index.css";
import CommanSearch from "@/components/common-components/comman-search/CommanSearch";
import { usePathname, useRouter } from "next/navigation";
import { connect, useSelector } from "react-redux";
import { logout } from "@/store/slice/authSlice";
import { setToast } from "@/store/slice/toastSlice";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";

const Header = ({ logout, toast, role }) => {
  const path = usePathname();
  const userType = useSelector((state) => state.auth.userType);

  const handleLogout = () => {
    logout();
    toast({ varient: "success", message: "Logout Successfully" });
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width={40}
              height={32}
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="nav-link px-2 text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/all-products" className="nav-link px-2 text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end d-flex align-items-center gap-2">
            {/* for vendor */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-account">
                Vendor Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/vendor/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/vendor/register">
                  Register
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/vendor/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

{/* for customer */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-account">
                My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/customer/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/customer/register">
                  Register
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/customer/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link href="/checkout" className="btn btn-warning">
              Cart (23)
            </Link>

            {/* for vendors */}
            <Link href="/vendor/orders" className="btn btn-warning">
              New Orders (23)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  role: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  toast: (message) => dispatch(setToast(message)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
