import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../services/helper";
import { Box, Typography, TextField, Button } from "@mui/material";
import Layout from "../../components/layout/Layout";

const OtpVarify = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const OtpChecking = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your OTP");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid OTP");
    } else if (otp.length < 6) {
      toast.error("OTP must be at least 6 digits long");
    } else {
      const data = { otp, email: location.state };

      try {
        const response = await axios.post(
          `${BACKEND_URL}/authentication/otp-verify`,
          data
        );
        if (response.status === 200) {
          toast.success(response.data.message);

          navigate("/reset-password", { state: data.email });
        } else {
          toast.error(response.response.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    }
  };

  return (
    <Layout pagetitle={"Ecommerce - OTP"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Box
          component="form"
          onSubmit={OtpChecking}
          sx={{
            maxWidth: 400,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Please Enter Your OTP Here
          </Typography>
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter Your OTP"
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default OtpVarify;
