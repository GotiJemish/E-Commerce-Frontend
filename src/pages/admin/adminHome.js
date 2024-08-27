import Layout from "../../components/layout/Layout";
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import { AuthHook } from "./../../context/authentication";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AdminHomepage = () => {
  const [authenticate] = AuthHook();

  return (
    <Layout pagetitle={"admin - home"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>

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
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AdminHomepage;
