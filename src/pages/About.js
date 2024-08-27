import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const About = () => {
  return (
    <Layout pagetitle={"Ecommerce - about us"}>
      <Box>
        {/*Page Title*/}
        <Box textAlign="center" pt={1}>
          <Typography variant="h4">About Us</Typography>
        </Box>
        {/*End Page Title*/}
        <Container>
          <Box display={"flex"}>
            <div lg={12} md={12} sm={12} sx={12}>
              <Box textAlign={"center"} mb={4}>
                <h2>Belle Multipurpose Bootstrap 4 Html Template</h2>
                <div>
                  <p>
                    <strong>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </strong>
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </Box>
            </div>
          </Box>
          <Box display="flex">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={4} mb={4}>
                <img
                  src="/assets/images/about/about1.jpg"
                  alt="About Us"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} mb={4}>
                <img
                  src="/assets/images/about/about2.jpg"
                  alt="About Us"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} mb={4}>
                <img
                  src="/assets/images/about/about3.jpg"
                  alt="About Us"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box display={"flex"}>
            <div>
              <h2>Sed ut perspiciatis unde omnis iste natus error</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, On the other hand, we
                denounce with righteous indignation and dislike men who are so
                beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain.
              </p>
              <p>
                simple and easy to distinguish. In a free hour, when our power
                of choice is untrammelled and when nothing prevents our being
                able to do what we like best, every pleasure is to be welcomed
                and every pain avoided. But in certain circumstances and owing
                to the claims of duty or the obligations of business it will
                frequently occur that pleasures have to be repudiated and
                annoyances accepted.
              </p>
              <p />
            </div>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            mb={4}
          >
            {/* About Section */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" gutterBottom>
                  About Annimex Web
                </Typography>
                <Box mb={2}>
                  <Typography variant="body1" fontWeight="bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                  <Typography variant="body1">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </Typography>
                </Box>
              </Grid>

              {/* Contact Section */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" gutterBottom>
                  Contact Us
                </Typography>
                <List>
                  <ListItem>
                    <Typography variant="body1">
                      <strong>Address:</strong> 55 Gallaxy Enque, 2568 steet,
                      23568 NY
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1">
                      <strong>Phone:</strong> (440) 000 000 0000
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1">
                      <strong>Email:</strong> sales@yousite.com
                    </Typography>
                  </ListItem>
                </List>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="h6">Follow Us</Typography>
                  <Box display="flex" gap={2}>
                    <Link to="#" aria-label="Facebook">
                      <Facebook />
                    </Link>
                    <Link to="#" aria-label="Twitter">
                      <Twitter />
                    </Link>
                    <Link to="#" aria-label="Pinterest">
                      <Pinterest />
                    </Link>
                    <Link to="#" aria-label="Instagram">
                      <Instagram />
                    </Link>
                    {/* <Link to="#" aria-label="Tumblr">
                <Tumblr />
              </Link> */}
                    <Link to="#" aria-label="YouTube">
                      <YouTube />
                    </Link>
                    {/* <Link to="#" aria-label="Vimeo">
                <Vimeo />
              </Link> */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default About;
