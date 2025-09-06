import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { DropDownIcon } from "@/icons";
import "./index.css";

const CommanDropdown = ({
  options = [],
  className,
  label,
  isValid,
  message,
  placeholder,
  value,
  onChange,
  name,
  type,
  fade_content,
  secondary,
  width,
  menuPlacement,
  menuWidth,
  secondary_2
}) => {
  const [selectedOption, setSelectedOption] = useState(value ||placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();

  const toggleSelect = () => setIsOpen((p) => !p);
  const handleOptionClick = (o) => (setSelectedOption(o), setIsOpen(false));

  useEffect(() => {
    const outsideClick = (e) =>
      !selectRef.current?.contains(e.target) && setIsOpen(false);
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  return (
    <Form.Group
      md="4"
      controlId="validationFormik101"
      className={` position-relative form-group ${className ? className : ""}`}
    >
      <div
        className={`${secondary ? "d-flex secondary align-items-center justify-content-between" : secondary_2?"d-flex secondary align-items-center justify-content-end":""}`}
      >
        <Form.Label>{label}</Form.Label>
        <div
          className={`custom-select w-100`}
          ref={selectRef}
          style={{ minWidth: `${width}` }}
        >
          <div
            className={`select-selected ${isOpen ? "select-arrow-active" : ""}`}
            onClick={toggleSelect}
          >
            {selectedOption}
            <span className="icon">
              <DropDownIcon
                width={16}
                height={16}
                color={"#444050"}
                strokewidth={1.5}
              />
            </span>
          </div>
          {isOpen && (
            <ul className={`select-items ${menuPlacement==="top" ?"bottom-100 p-1":"top-100"}`} style={{minWidth: `${menuWidth?menuWidth:"270px"}`}}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={
                    option.value === selectedOption ? "same-as-selected" : ""
                  }
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}

          {/* Hidden native select for form compatibility */}
          {/* <select style={{ display: 'none' }} value={selectedOption} readOnly>
        {options.map((option, index) => (
       
<option key={index} value={option.value}>
            
             <Form.Check
            label={option.label}
            name={"credit-type"}
            type="checkbox"
            checked={true}
            id={option.value}
            onChange={onChange}
            className={`${className} custom-checkbox`}
        />


           </option>


        ))}
      </select> */}
        </div>
      </div>

      <Form.Control.Feedback
        className={`${secondary ? "position-absolute secondary-feedback" : ""}`}
        type={isValid ? "valid" : "invalid"}
      >
        {message}
      </Form.Control.Feedback>
      {fade_content && <span className="fade-content">{fade_content}</span>}
    </Form.Group>
  );
};

export default CommanDropdown;
