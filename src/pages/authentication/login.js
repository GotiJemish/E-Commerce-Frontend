import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Layout from "../../components/layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthHook } from "../../context/authentication";
import { BACKEND_URL } from "../../services/helper";

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // customized hook
  const [authenticate, setAutenticate] = AuthHook();

  // navigate
  const navigate = useNavigate();
  // create location for if user is un authorised and goto login page after login it goes to previous page which user is accessing
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(first_name,last_name,username,email,phone,password,address)
    try {
      const res = await axios.post(`${BACKEND_URL}/authentication/login`, {
        username,
        email,
        phone,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);

        // set authentication values
        setAutenticate({
          ...authenticate,
          user: res.data.user,
          token: res.data.token,
        });
        // save token in localstorage
        localStorage.setItem("authentication", JSON.stringify(res.data));

        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("data is not correct");
    }
  };

  return (
    <Layout pagetitle={"Ecommerce - Login"}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forget-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
