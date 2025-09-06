import React, { useState } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import { EyeIcon, SlashEyeIcon, TableBottomIcon, TableTopIcon } from "@/icons";

const Input = ({
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
  coverClass,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const maskedValue = "*".repeat(value?.length);

  return (
    <div className={`form-input-cover ${coverClass}`} style={{ maxWidth: width }}>
      <Form.Control
        type={isPasswordType ? (showPassword ? "text" : "password") : type}
        name={name}
        placeholder={ placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
        isInvalid={isInvalid}
        required
      />

      {isPasswordType ? (
        <i
          className="icon cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <SlashEyeIcon /> : <EyeIcon />}
        </i>
      ) : (
        <>
          {icon && <i className="icon">{icon}</i>}
          {type === "number" && sortable && (
            <div className="sort-icons position-absolute">
              <button
                type="button"
                className="d-flex align-items-center justify-content-center table-sort-btn"
                onClick={() => {
                  // Add sorting logic here
                }}
              >
                <TableTopIcon color="#6C718A" />
              </button>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center table-sort-btn"
                onClick={() => {
                  // Add sorting logic here
                }}
              >
                <TableBottomIcon color="#6C718A" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
