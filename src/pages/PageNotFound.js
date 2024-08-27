import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Container, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout pagetitle={"Ecommerce - 404"}>
      <Container maxWidth="sm">
        <Box
          textAlign="center"
          py={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" color="secondary" gutterBottom>
            404
          </Typography>
          <Typography variant="h4" color="textSecondary" paragraph>
            Oops! Page Not Found
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            The page you're looking for doesn't exist. It might have been
            removed, or the URL might be incorrect.
          </Typography>

          <Button component={NavLink} to="/" color="secondary" size="large">
            Go Back Home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
