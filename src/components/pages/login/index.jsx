"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Image, Form } from "react-bootstrap";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import ValidationFeedback from "@/components/common-components/validationFeedback/ValidationFeedback";

import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import Input from "@/components/common-components/input/Input";
import { EmailIcon } from "@/icons";
import Link from "next/link";
import { connect } from "react-redux";
import { loginUser } from "@/store/slice/authSlice";
import withLoader from "@/components/hocs/loader/withLoader";

const LoginPage = ({
  error,
  loading,
  login,
  isAuthenticated,
  loginUserType,
}) => {
  const router = useRouter();
  const path = usePathname();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });
  const setLoginData = (key, value) =>
    setLoginDetail((prev) => ({
      ...prev,
      [key]: value,
    }));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login({ ...loginDetail, pathname: path });
    } catch (error) {}
  };
  useEffect(() => {
    if (isAuthenticated) {
      if (loginUserType === "admin") {
        router.push("/admin/profile");
      } else if (loginUserType === "vendor") {
        router.push("/vendor/profile");
      }
    }
  }, [isAuthenticated]);
  if (isAuthenticated) {
    return null;
  }
  return (
    <>
      <section className="background-image">
        {loading && <p>Logging in...</p>}

        <div className="card comman-shadow">
          <div className="image">
            <Image src={"/images/logos/Harson-logo.png"} alt="logo" />
          </div>
          <p className="form-title pb-4">Login</p>

          <Form onSubmit={handleSubmit} className="login-form mt-3">
            <div className="fields">
              <Form.Group>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={loginDetail?.username}
                  onChange={(e) => setLoginData("username", e.target.value)}
                  placeholder="User Name"
                  isInvalid={false}
                  // icon={<EmailIcon />}
                />
                <ValidationFeedback
                  title={"Username is required"}
                  type="invalid"
                />
              </Form.Group>

              <Form.Group>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginDetail?.password}
                  onChange={(e) => setLoginData("password", e.target.value)}
                  placeholder="Enter Password"
                  isInvalid={false}
                />
                <ValidationFeedback
                  title={"Password is required"}
                  type="invalid"
                />
              </Form.Group>
            </div>
            <div className="text-end pb-1">
              <Link href={"/"} className="link mb-4">
                Forgot Password?
              </Link>
            </div>

            <CommanButton
              title={"Login"}
              type="submit"
              variant="success"
              disabled={false}
              className="w-100 mt-4"
              // onClick={handleSubmit}
            />
          </Form>
        </div>
      </section>
      <footer>© 2025,Jemish Goti. All Rights Reserved.</footer>
    </>
  );
};

// export default LoginPage;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loginUserType: state.auth.userType,
  loading: state.auth.loading,
  error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
  login: (LoginDetail) => dispatch(loginUser(LoginDetail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(LoginPage));
