import React, { useState } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import { TableBottomIcon, TableTopIcon } from "@/icons";

const TableInput = ({
  placeholder,
  value,
  onChange,
  name,
  type = "text",
  icon,
  width = "325px",
  disabled,
  className = "",
  sortable,
  isInvalid,
}) => {
  return (
    <>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`tbl-input ${className}`}
        isInvalid={isInvalid}
        required
        style={{ maxWidth: width }}
      />
    </>
  );
};

export default TableInput;
