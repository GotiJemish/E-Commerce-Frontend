import React from "react";
import "./index.css";
import Spinner from 'react-bootstrap/Spinner';

const TableLoader = () => {
  return (
     <div className="table-loader-wrapper">
      <Spinner animation="border" role="status" variant="primary" />
    </div>
  );
};

export default TableLoader;
