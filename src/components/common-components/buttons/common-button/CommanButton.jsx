import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
const CommanButton = (props) => {
  return (
    <Button
      variant={props?.varient || "primary"}
      type={props?.type || "button"}
      disabled={props?.disabled || false}
      className={`${
        props?.className ? props?.className : ""
      }  d-flex align-items-center justify-content-center gap-1 px-2 comman-btn`}
      onClick={props?.onClick || (() => {})}
    >
      {props?.icon && <i className="btn-icon">{props?.icon}</i>}

      {props?.title && <span className="text-capitalize btn-text">{props?.title}</span>}
    </Button>
  );
};

export default CommanButton;
