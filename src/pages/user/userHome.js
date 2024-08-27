import React from "react";
import Layout from "../../components/layout/Layout";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import { AuthHook } from "../../context/authentication";

const UserHome = () => {
  const [authenticate] = AuthHook();

  return (
    <Layout pagetitle={"Ecommerce - user-home"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>
        user home
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ Width: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Name : {authenticate.user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email : {authenticate.user.email}
                </Typography>

                <Typography variant="body2">
                  Contact : {authenticate.user.phone}
                </Typography>

                <Typography variant="body2">
                  Address : {authenticate.user.address}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default UserHome;
