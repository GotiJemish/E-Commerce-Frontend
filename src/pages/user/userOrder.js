import React from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "@mui/material";
import Sidebar from "../../components/admin/sidebar";

const UserOrder = () => {
  return (
    <Layout pagetitle={"Ecommerce - Orders"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>

        <Box>orders</Box>
      </Box>
    </Layout>
  );
};

export default UserOrder;
