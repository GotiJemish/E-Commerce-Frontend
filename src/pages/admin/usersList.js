import React from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "@mui/material";
import Sidebar from "../../components/admin/sidebar";

const UsersList = () => {
  return (
    <Layout pagetitle={"admin - users"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>

        <Box>users</Box>
      </Box>
    </Layout>
  );
};

export default UsersList;
