import React from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "@mui/material";
import Sidebar from "../../components/admin/sidebar";

const UserProfile = () => {
  return (
    <Layout pagetitle={"Ecommerce - Profiles"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>

        <Box>user profile</Box>
      </Box>
    </Layout>
  );
};

export default UserProfile;
