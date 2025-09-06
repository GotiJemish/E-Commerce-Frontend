import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import DatePicker from "react-datepicker";
const CommanDatePicker = ({ maxWidth, icon,value,placeholder,onChange,className }) => {

  return (
    <>
      <div
        className={`datepicker-wrapper ${className}`}
        style={{ maxWidth: `${maxWidth ? `${maxWidth}px` : "325px"}` }}
      >
        <DatePicker
          className="custom-react-datepicker-input"
          selected={value}
          placeholderText={placeholder}
          onChange={onChange}
          calendarClassName="custom-react-datepicker-calendar"
        />
        {icon && <span className="icon">{icon}</span>}
      </div>
    </>
  );
};

export default CommanDatePicker;
