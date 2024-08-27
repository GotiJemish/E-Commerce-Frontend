import React from "react";
import Layout from "../components/layout/Layout";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQS = () => {
  return (
    <Layout pagetitle={"Ecommerce - faq"}>
      <Box className="pageWrapper">
        <Container maxWidth="lg">
          <Box textAlign="center" my={4}>
            <Typography variant="h4" component="h1">
              FAQs
            </Typography>
          </Box>

          <Box my={4}>
            <Typography variant="h5" component="h2">
              Payment and Returns
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What is Lorem Ipsum?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nullam sed neque luctus, maximus diam sed, facilisis orci.
                  Nunc ultricies neque a aliquam sollicitudin...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Why do we use it?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Cras non gravida urna. Ut venenatis nulla in tellus lobortis,
                  vel mollis lectus condimentum...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How to use this template?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Duis nec nisi id ligula dapibus maximus nec eu dui. Proin
                  ornare, ipsum vitae tincidunt rutrum...
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box my={4}>
            <Typography variant="h5" component="h2">
              Other Resources
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Integer et erat quis ante tristique lobortis at vel lorem.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Proin varius magna rhoncus quam egestas, id faucibus eros
                  viverra. Suspendisse id ipsum at leo congue...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Where does it come from?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Aliquam erat volutpat. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Why do we use it?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content...
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default FAQS;
