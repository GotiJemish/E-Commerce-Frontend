import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout pagetitle={"Ecommerce - contact us"}>
      <Box>
        {/* Page Title */}
        <Box textAlign="center" pt={1}>
          <Typography variant="h4">Contact Us</Typography>
        </Box>
        {/* End Page Title */}

        <Box mt={2}>
          <Box position="relative" height={350}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb="
              height={350}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
            ></iframe>
            <Box
              position="absolute"
              top={35}
              left={0}
              bgcolor=" #ffffff70"
              p={2}
              boxShadow={3}
              borderRadius={1}
            >
              <Typography variant="h4" gutterBottom>
                Our Store
              </Typography>
              <Typography variant="body1" paragraph>
                123 Fake St.
                <br />
                Toronto, Canada
              </Typography>
              <Typography variant="body1" paragraph>
                Mon - Fri, 10am - 9pm
                <br />
                Saturday, 11am - 9pm
                <br />
                Sunday, 11am - 5pm
              </Typography>
              <Link
                href="https://maps.google.com/?daddr=80%20Spadina%20Ave,%20Toronto"
                underline="hover"
              >
                Get directions
              </Link>
            </Box>
          </Box>
          <Container>
            <Box
              display={"flex"}
              flexDirection={{
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              }}
            >
              <Box p={2} lg={8} md={8} sm={12} xs={12}>
                <Typography variant="h4" gutterBottom>
                  Drop Us A Line
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500.
                </Typography>

                <FormControl>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        id="ContactFormName"
                        name="name"
                        label="Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        id="ContactFormEmail"
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        id="ContactFormPhone"
                        name="phone"
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        id="ContactSubject"
                        name="subject"
                        label="Subject"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        id="ContactFormMessage"
                        name="message"
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" type="submit">
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>

              <Box p={2} lg={4} md={4} sm={12} xs={12}>
                <Typography variant="h5" gutterBottom>
                  Opening Hours
                </Typography>
                <Typography variant="body1">
                  Mon - Sat : 9am - 11pm
                  <br />
                  Sunday: 11am - 5pm
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" gutterBottom>
                  <strong>Address:</strong> 55 Gallaxy Enque, 2568 steet, 23568
                  NY
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Phone:</strong> (440) 000 000 0000
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Email:</strong> sales@yousite.com
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="center" gap={2}>
                  <Link to="#" target="_blank">
                    <Facebook />
                  </Link>
                  <Link to="#" target="_blank">
                    <Twitter />
                  </Link>
                  <Link to="#" target="_blank">
                    <Pinterest />
                  </Link>
                  <Link to="#" target="_blank">
                    <Instagram />
                  </Link>
                  {/* <Link to="#" target="_blank">
                <Facebook/>
                </Link> */}
                  <Link to="#" target="_blank">
                    <YouTube />
                  </Link>
                  {/* <Link to="#" target="_blank">
                <Facebook/>
                </Link> */}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
