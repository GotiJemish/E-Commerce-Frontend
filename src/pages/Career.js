import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link as MuiLink,
} from "@mui/material";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <Layout pagetitle={"Ecommerce - App-Career"}>
      <Box id="homepage">
        <Box id="search-container" py={5}>
          <Container>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" align="center" gutterBottom>
                  Careers
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box>
          <Container>
            <Grid container spacing={2}>
              <Grid>
                <Card>
                  <CardMedia
                    component="img"
                    image="https://static.amazon.jobs/campaign_banners/36/image_lgs/AmazonOps_JobsBanner_B_2023_Desktop.jpg?1723088232"
                    alt="E-Commerce Jobs Banner"
                  />
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      href="https://amazon.jobs/content/en/teams/amazon-operations?intcmpid=AS_DDFO200042B"
                      target="_blank"
                    >
                      Join Us
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={5}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Opportunities for students
                    </Typography>
                    <Typography variant="body2">
                      Learn about, search for, and apply to internships and
                      full-time opportunities for students.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/business_categories/student-programs"
                    >
                      View open jobs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Warehouse and Hourly Jobs
                    </Typography>
                    <Typography variant="body2">
                      Search open jobs and learn about job opportunities at
                      E-Commerce warehouses and stores.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/landing_pages/hourly-jobs"
                    >
                      View open jobs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Software Development
                    </Typography>
                    <Typography variant="body2">
                      Explore job opportunities and what it's like to be a
                      software engineer at E-Commerce.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/job_categories/software-development"
                    >
                      View open jobs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={5} bgcolor="grey.100">
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Explore opportunities
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card>
                  <MuiLink to="/search-teamcategory" component={Link}>
                    <CardMedia
                      component="img"
                      image="https://static.amazon.jobs/global_images/36/images/Teams_3_copy.jpg?1540850190"
                      alt="Teams"
                    />
                    <CardContent>
                      <Typography variant="h6">Teams</Typography>
                      <Typography variant="body2">
                        Get to know E-Commerce's teams, from E-Commerce Web
                        Services to subsidiaries.
                      </Typography>
                    </CardContent>
                  </MuiLink>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card>
                  <MuiLink to="/search-jobcategory" component={Link}>
                    <CardMedia
                      component="img"
                      image="https://static.amazon.jobs/global_images/34/images/job-categories-900x600.jpg?1647704396"
                      alt="Job Categories"
                    />
                    <CardContent>
                      <Typography variant="h6">Job Categories</Typography>
                      <Typography variant="body2">
                        Want to be an E-Commerceian? Find the right job for you.
                      </Typography>
                    </CardContent>
                  </MuiLink>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card>
                  <MuiLink to="/locations" component={Link}>
                    <CardMedia
                      component="img"
                      image="https://static.amazon.jobs/global_images/32/images/Location_copy.jpg?1540849565"
                      alt="Locations"
                    />
                    <CardContent>
                      <Typography variant="h6">Locations</Typography>
                      <Typography variant="body2">
                        View E-Commerce's office locations across the globe.
                      </Typography>
                    </CardContent>
                  </MuiLink>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={5}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4}>
                <CardMedia
                  component="img"
                  image="https://static.amazon.jobs/campaign_banners/36/image_lgs/AmazonOps_JobsBanner_B_2023_Desktop.jpg?1723088232"
                  alt="E-Commerce Jobs"
                />

                <img
                  src="https://static.amazon.jobs/employee_profiles/1035/images/7O6A8222.jpg?1677766171"
                  alt="Georgia"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5">Georgia</Typography>
                <Typography variant="subtitle1">General Manager</Typography>
                <Typography variant="body2" paragraph>
                  Georgia started her Pathways journey in 2016 as an Area
                  Manager in Peterborough, UK. Since then she has been promoted
                  to an Operations Manager, a Senior Operations Manager, a Site
                  Leader and she is now a General Manager with E-Commerce
                  Emerging Market Expansion team.
                </Typography>
                <Button variant="outlined" color="primary">
                  Read more
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={5} bgcolor="grey.200">
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Come build the future with us
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Our mission is to be Earth's most customer-centric company. This
              is what unites E-Commerceians across teams and geographies as we
              all strive to delight our customers and make their lives easier,
              one innovative product, service, and idea at a time.
            </Typography>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/en/landing_pages/working-at-amazon"
              >
                Learn about working at E-Commerce
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Career;
