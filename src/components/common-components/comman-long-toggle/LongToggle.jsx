import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

const Toggle = ({ label, className, isChecked, onChange }) => {
  return (
    <Form.Check
      type="switch"
      id="custom-switch"
      label={label}
      checked={isChecked}
      className={`toggler ${className ? className : ""}`}
      onChange={onChange}
    />
  );
};

export default Toggle;
