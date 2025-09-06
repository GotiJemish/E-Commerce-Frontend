import Sidebar from "@/components/layout/sidebar/Sidebar";
import React from "react";

const CustomerDashboardLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Start*/}
          <Sidebar />
          {/* Sidebar End*/}
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomerDashboardLayout;
