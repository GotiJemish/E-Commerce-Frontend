import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

const CommanRadio = ({  valuesList, name, value, onChange ,className}) => {
  const handleBooleanChange = (e) => {
    const val = e.target.value === "true";
    onChange({ target: { name, value: val } });
  };

  return (
    
      <div className={`d-flex checkbox-cover ${className}`} >
        {valuesList?.map((item, i) => (
          <Form.Check
            inline
            key={i}
            type="radio"
            label={item.label}
            name={name}
            value={item.value.toString()} // ✅ pass string here
            checked={value === item.value} // ✅ boolean check remains correct
            onChange={handleBooleanChange}
            className={value === item.value ? "checked" : ""}
          />
        ))}
      </div>
   
  );
};

export default CommanRadio;