import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Loader from "../../components/reusables/Loader";
import { Box, Typography, TextField, Button } from "@mui/material";
import { BACKEND_URL } from "../../services/helper";
import Layout from "../../components/layout/Layout";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    // setLoading(true);

    try {
      const res = await axios.post(
        `${BACKEND_URL}/authentication/forget-password`,
        { email }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/otp-varification", { state: email });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Layout pagetitle={"Ecommerce - forget password"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Box
          component="form"
          onSubmit={sendOtp}
          sx={{
            maxWidth: 400,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Forgot Password?
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            // disabled={loading}
            // endIcon={loading ? <Loader /> : null}
          >
            Send OTP
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ForgetPassword;
