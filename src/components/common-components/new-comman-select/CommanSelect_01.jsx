import React from "react";
import "./index.css";
import Select from "react-select";
import { DropDownIcon } from "@/icons";

const CommanSelect_01 = ({
  className,
  isClearable,
  isSearchable,
  isDisabled,
  isLoading,
  isRtl,
  value,
  placeholder,
  options,
  minWidth,
  maxWidth,
  width,
  menuPlacement,
  menuMinWidth,menuMaxWidth,menuWidth
}) => {
  const customStyles = {
    container: (provided) => ({
      ...provided,
      minWidth: minWidth || "auto",
      maxWidth: maxWidth || "100%",
      width: width || "100%",
    }),
    menu: (provided) => ({
      ...provided,
      minWidth: menuMinWidth || "auto",
      maxWidth: menuMaxWidth || "100%",
      width: menuWidth || "100%",
      
    }),
  };

  return (
   
<>
 <Select
      className={`comman-select-01 ${className}`}
      classNamePrefix="select"
      defaultValue={value}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      // name="color"
      options={options}
      components={{ DropdownIndicator: DropDownIcon }}
      styles={customStyles}
menuPlacement={menuPlacement}
      // menuIsOpen={true}
    />

</>

  );
};

export default CommanSelect_01;
