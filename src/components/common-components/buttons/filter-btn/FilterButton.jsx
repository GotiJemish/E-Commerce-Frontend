import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const FilterButton = (props) => {
  return (
    <Button
      variant={props?.varient || "primary"}
      className={`${
        props?.className ? props?.className : ""
      }  d-flex align-items-center justify-content-center  filter-btn`}
      onClick={props?.onClick}
    >
      <i>{props?.icon}</i>

      {/* <span className="text-capitalize">{props?.title}</span> */}
    </Button>
  );
};

export default FilterButton;
