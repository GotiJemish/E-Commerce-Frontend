import React from "react";
import "./index.css";
import { Form } from "react-bootstrap";
const CustomCheckbox = ({ id, onChange, checked, name, label, className }) => {
  return (
    <div className={` custom-check ${className}`}>
      <Form.Check
        // inline
        label={label}
        className={`custom-checkbox d-flex align-items-center cursor-pointer`}
        name={name}
        type={"checkbox"}
        id={`inline-checkbox-${id}`}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default CustomCheckbox;
