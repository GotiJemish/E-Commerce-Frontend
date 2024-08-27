import React from "react";
import { Box, Typography, Container, IconButton, Divider } from "@mui/material";
import {
  FaCcDiscover,
  FaCcPaypal,
  FaCcVisa,
  FaCreditCard,
  FaCcMastercard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="footer" bgcolor="black" color="white" py={4}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          mb={4}
        >
          <Box mb={{ xs: 3, md: 0 }}>
            <img
              src="/assets/images/logo.png"
              alt="website logo"
              width="200px"
            />
            <Typography variant="body2">
              Creating value through Customer Satisfaction.
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variant="h6" mb={2}>
              Informations
            </Typography>
            <Link to='/about' style={{ color: "white", textDecoration: "none" }}>
              About us
            </Link>
            <Link to="/career" style={{ color: "white", textDecoration: "none" }}>
              Careers
            </Link>
            <Link to="/policy" style={{ color: "white", textDecoration: "none" }}>
              Privacy policy
            </Link>
            {/* <Link to="#" style={{ color: "white", textDecoration: "none" }}>
              Terms &amp; condition
            </Link> */}
            <Link to="#" style={{ color: "white", textDecoration: "none" }}>
              My Account
            </Link>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variant="h6" mb={2}>
              Customer Services
            </Typography>
           
            <Link to="/faqs" style={{ color: "white", textDecoration: "none" }}>
              FAQ's
            </Link>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </Link>
          
            <Link to="/help" style={{ color: "white", textDecoration: "none" }}>
              Help
            </Link>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variant="h6" mb={2}>
              Contact Us
            </Typography>
            <Typography variant="body2" mb={1}>
              <strong>Address:</strong>
              <br />
              55 Gallaxy Enque,
              <br />
              2568 Street, 23568 NY
            </Typography>
            <Typography variant="body2" mb={1}>
              <strong>Phone:</strong>
              <br />
              (440) 000 000 0000
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong>
              <br />
              sales@yousite.com
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ height: 1, bgcolor: "white" }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()}
            <Link to="https://mui.com/">Jemish Goti</Link>. All rights reserved.
          </Typography>

          <Box display="flex" mt={{ xs: 2, md: 0 }}>
            <IconButton color="inherit">
              <FaCcVisa />
            </IconButton>
            <IconButton color="inherit">
              <FaCcMastercard />
            </IconButton>
            <IconButton color="inherit">
              <FaCcDiscover />
            </IconButton>
            <IconButton color="inherit">
              <FaCcPaypal />
            </IconButton>
            <IconButton color="inherit">
              <FaCreditCard />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
