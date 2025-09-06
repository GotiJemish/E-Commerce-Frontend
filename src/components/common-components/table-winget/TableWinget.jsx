import React from 'react'
import "./index.css"
const TableWinget = ({ title, number, icon }) => {
  return (
    <div className="table-winget position-relative">
    <p className=" text-capitalize">{title}</p>
    <h5 className="">{number}</h5>
    <i className=" position-absolute icon d-flex align-items-center justify-content-center">
      {icon}
    </i>
  </div>
  )
}

export default TableWinget