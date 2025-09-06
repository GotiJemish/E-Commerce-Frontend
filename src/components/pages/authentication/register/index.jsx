"use client"
import React, { useState } from "react";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg p-4">
          <h3 className="text-center mb-4">Create Account</h3>
          <form>
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={()=>togglePassword('password')}
                >
                  Show
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={()=>togglePassword('confirmPassword')}
                >
                  Show
                </button>
              </div>
            </div>
            {/* Terms & Conditions */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            {/* Already have an account */}
            <p className="mt-3 text-center">
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
