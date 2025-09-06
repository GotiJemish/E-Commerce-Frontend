import React from "react";
import "./index.css";

const SimpleWinget = (props) => {
  return (
    <div className={`simple-winget ${props?.className || ""}`} onClick={props?.onClick}>
      {/* #FFAE00 */}
      <i className={`${props?.iconBgColor || "bg-primary"}`}>{props?.icon}</i>
      <h3 className="text">{props?.title}</h3>
    </div>
  );
};

export default SimpleWinget;
