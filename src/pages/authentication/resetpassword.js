import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../services/helper";
import axios from "axios";
import Layout from "../../components/layout/Layout";

const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const Resetfunction = async (e) => {
    e.preventDefault();
    if (!Password) {
      toast.error("Please enter new password");
      return;
    }
    if (!confirmPassword) {
      toast.error("Please confirm new password");
      return;
    }
    if (confirmPassword === Password) {
      const data = { Password, email: location.state };
      try {
        const res = await axios.post(
          `${BACKEND_URL}/authentication/reset-password`,
          data
        );
        if (res && res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    } else {
      toast.error("both values are not same");
      return;
    }
  };

  return (
    <Layout pagetitle={"Ecommerce - Reset Password"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Box
          component="form"
          onSubmit={Resetfunction}
          sx={{
            maxWidth: 400,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" gutterBottom>
            reset password
          </Typography>
          <TextField
            label="new Password"
            variant="outlined"
            type="text"
            fullWidth
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="text"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ResetPassword;
