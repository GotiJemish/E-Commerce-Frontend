import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";
import { ValidationErrorIcon } from "@/icons";

export default function ValidationFeedback({ title,type }) {
  return (
    <Form.Control.Feedback type={type} className="mt-2 comman-feedback">
    <i className="icon"> <ValidationErrorIcon/></i> <span className="message">{title}</span> 
    </Form.Control.Feedback>
  );
}
