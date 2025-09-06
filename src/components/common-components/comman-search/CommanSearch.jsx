import React from "react";
import "./index.css";
import { SearchIcon } from "@/icons";

const CommanSearch = (props) => {
  return (
    //    <input type="search" className='comman-search form-control' name={props?.name ||"search..."} id="comman-search" />

    <div
      className={`search-container  ${
        props?.className ? props?.className : ""
      }`}
    >
      <input type="text" placeholder={props?.placeholder || "Search"} />
      <i className="search-icon">
        <SearchIcon />
      </i>
    </div>
  );
};

export default CommanSearch;
