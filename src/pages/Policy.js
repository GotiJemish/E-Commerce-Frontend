import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <>
      <Layout pagetitle={"Ecommerce - privacy policy"}>
        <Box>
          <Container maxWidth="lg" sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              E-Commerce.com Privacy Notice
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Disclaimer:</strong> In the event of any discrepancy or
              conflict, the English version will prevail over the translation.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Last updated: April 25, 2024</strong>. To see the prior
              version, click{" "}
              <Link
                to="https://www.amazon.in/gp/help/customer/display.html?nodeId=202056900"
                target="_blank"
                rel="noopener"
              >
                here
              </Link>
              .
            </Typography>
            <Typography variant="body1" paragraph>
              We know that you care how information about you is used and
              shared, and we appreciate your trust that we will do so carefully
              and sensibly. This Privacy Notice describes how E-Commerce Seller
              Services Private Limited and its affiliates including
              E-Commerce.com, Inc. (collectively "E-Commerce") collect and
              process your personal information through E-Commerce websites,
              devices, products, services, online marketplace, and applications
              that reference this Privacy Notice (together "E-Commerce
              Services").
            </Typography>
            <Typography variant="body1" paragraph>
              By using E-Commerce Services, you agree to our use of your
              personal information (including sensitive personal information) in
              accordance with this Privacy Notice, as may be amended from time
              to time at our discretion. You also agree and consent to us
              collecting, storing, processing, transferring, and sharing your
              personal information (including sensitive personal information)
              with third parties or service providers for the purposes set out
              in this Privacy Notice.
            </Typography>
            <Typography variant="body1" paragraph>
              Personal information subject to this Privacy Notice will be
              collected and retained by E-Commerce, with a registered office at
              8th floor, Brigade Gateway 26/1 Dr. Rajkumar Road, Bangalore,
              Karnataka 560055, India.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
              Table of Contents
            </Typography>
            <List>
              <ListItem>
                <Link to="#" underline="hover">
                  What Personal Information About Customers Does E-Commerce
                  Collect?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  For What Purposes Does E-Commerce Use Your Personal
                  Information?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  What About Cookies and Other Identifiers?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  Does E-Commerce Share Your Personal Information?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  How Secure is Information About Me?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  What About Advertising?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  What Information can I Access?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  What Choices Do I Have?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  Are Children Allowed to Use E-Commerce Services?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  Conditions of Use, Notices, and Revisions
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  Related Practices and Information
                </Link>
              </ListItem>
              <ListItem>
                <Link to="#" underline="hover">
                  Examples of Information Collected
                </Link>
              </ListItem>
            </List>

            <Typography variant="h6" component="h2" gutterBottom>
              What Personal Information About Customers Does E-Commerce Collect?
            </Typography>
            <Typography variant="body1" paragraph>
              We collect your personal information in order to provide and
              continually improve our products and services.
            </Typography>
            <Typography variant="body1" paragraph>
              Here are the types of personal information we collect:
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Information You Give Us:</strong> We receive and store any
              information you provide in relation to E-Commerce Services. Click{" "}
              <Link to="#_DC2A26D8DDBF4DA6A7313A9FC8B37F4B">here</Link> to see
              examples of what we collect. You can choose not to provide certain
              information, but then you might not be able to take advantage of
              many of our E-Commerce Services.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Automatic Information:</strong> We automatically collect
              and store certain types of information about your use of
              E-Commerce Services, including information about your interaction
              with content and services available through E-Commerce Services.
              Like many websites, we use cookies and other unique identifiers,
              and we obtain certain types of information when your web browser
              or device accesses E-Commerce Services and other content served by
              or on behalf of E-Commerce on other websites. Click{" "}
              <Link to="#">here</Link> to see examples of what we collect.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Information from Other Sources:</strong> We might receive
              information about you from other sources, such as updated delivery
              and address information from our carriers, which we use to correct
              our records and deliver your next purchase more easily. Click{" "}
              <Link to="#">here</Link> to see additional examples of the
              information we receive.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
              For What Purposes Does E-Commerce Use Your Personal Information?
            </Typography>
            <Typography variant="body1" paragraph>
              We use your personal information to operate, provide, develop, and
              improve the products and services that we offer our customers.
              These purposes include:
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>
                    Purchase and delivery of products and services.
                  </strong>{" "}
                  We use your personal information to take and fulfill orders,
                  deliver products and services, process payments, and
                  communicate with you about orders, products, and services, and
                  promotional offers.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>
                    Provide, troubleshoot, and improve E-Commerce Services.
                  </strong>{" "}
                  We use your personal information to provide functionality,
                  analyze performance, fix errors, and improve the usability and
                  effectiveness of the E-Commerce Services.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Recommendations and personalization.</strong> We use
                  your personal information to recommend features, products, and
                  services that might be of interest to you, identify your
                  preferences, and personalize your experience with E-Commerce
                  Services.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Provide voice, image, and camera services.</strong>{" "}
                  When you use our voice, image, and camera services, we use
                  your voice input, images, videos, and other personal
                  information to respond to your requests, provide the requested
                  service to you, and improve our services. For more information
                  about Alexa voice services, click{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GVP69FUJ48X9DK8V"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Comply with legal obligations.</strong> In certain
                  cases, we collect and use your personal information to comply
                  with laws. For instance, we collect from sellers information
                  regarding place of establishment and bank account information
                  for identity verification and other purposes.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Communicate with you.</strong> We use your personal
                  information to communicate with you in relation to E-Commerce
                  Services via different channels (e.g., by phone, e-mail,
                  chat).
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Advertising.</strong> We use your personal information
                  to display interest-based ads for features, products, and
                  services that might be of interest to you. We do not use
                  information that personally identifies you to display
                  interest-based ads. To learn more, please read our{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?language=en_IN&nodeId=202075050"
                    target="_blank"
                    rel="noopener"
                  >
                    Interest-Based Ads
                  </Link>{" "}
                  notice.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" paragraph>
                  <strong>Fraud Prevention and Credit Risks.</strong> We use
                  personal information to prevent and detect fraud and abuse in
                  order to protect the security of our customers, E-Commerce,
                  and others. We may also use scoring methods to assess and
                  manage credit risks.
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h5" component="h2" gutterBottom>
              What About Cookies and Other Identifiers?
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  To enable our systems to recognize your browser or device and
                  to provide and improve E-Commerce Services, we use cookies and
                  other identifiers. For more information about cookies and how
                  we use them, please read our{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html/?language=en_IN&nodeId=201890250"
                    target="_blank"
                    rel="noopener"
                  >
                    Cookies Notice
                  </Link>
                  .
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h5" component="h2" gutterBottom>
              Does E-Commerce Share Your Personal Information?
            </Typography>
            <Typography variant="body1" paragraph>
              Information about our customers is an important part of our
              business, and we are not in the business of selling our customers'
              personal information to others. We share customers' personal
              information only as described below and with E-Commerce.com, Inc.
              and subsidiaries that E-Commerce.com, Inc. controls that either
              are subject to this Privacy Notice or follow practices at least as
              protective as those described in this Privacy Notice.
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  <strong>Transactions involving Third Parties:</strong> We make
                  available to you services, products, applications, or skills
                  provided by third parties for use on or through E-Commerce
                  Services. For example, the products you order through our
                  marketplace are from third parties, you can download
                  applications from third-party application providers from our
                  App Store, and enable third-party skills through our Alexa
                  services. We also offer services or sell product lines jointly
                  with third-party businesses, such as sellers on the
                  marketplace, restaurants registered on E-Commerce.com,
                  merchants providing mobile recharges and bill-payment
                  assistance. You can tell when a third party is involved in
                  your transactions, and we share customers' personal
                  information related to those transactions with that third
                  party.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  <strong>Third-Party Service Providers:</strong> We employ
                  other companies and individuals to perform functions on our
                  behalf. Examples include fulfilling orders for products or
                  services, delivering packages, sending postal mail and e-mail,
                  removing repetitive information from customer lists, analyzing
                  data, providing marketing assistance, providing search results
                  and links (including paid listings and links), processing
                  payments, transmitting content, scoring, assessing and
                  managing credit risk, and providing customer service. These
                  third-party service providers have access to personal
                  information needed to perform their functions, but may not use
                  it for other purposes. Further, they must process the personal
                  information in accordance with applicable law.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  <strong>Business Transfers:</strong> As we continue to develop
                  our business, we might sell or buy other businesses or
                  services. In such transactions, customer information generally
                  is one of the transferred business assets but remains subject
                  to the promises made in any pre-existing Privacy Notice
                  (unless, of course, the customer consents otherwise). Also, in
                  the unlikely event that E-Commerce.com, Inc., E-Commerce
                  Seller Services Private Limited, or any of its affiliates, or
                  substantially all of their assets are acquired, customer
                  information will, of course, be one of the transferred assets.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  <strong>Protection of E-Commerce and Others:</strong> We
                  release account and other personal information when we believe
                  release is appropriate to comply with the law; enforce or
                  apply our{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201909000"
                    target="_blank"
                    rel="noopener"
                  >
                    Conditions of Use
                  </Link>{" "}
                  and other agreements; or protect the rights, property, or
                  safety of E-Commerce, our users, or others. This includes
                  exchanging information with other companies and organizations
                  for fraud protection and credit risk reduction.
                </Typography>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              Other than as set out above, you will receive notice when personal
              information about you might be shared with third parties, and you
              will have an opportunity to choose not to share the information.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
              How Secure Is Information About Me?
            </Typography>
            <Typography variant="body1" paragraph>
              We design our systems with your security and privacy in mind.
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  We work to protect the security of your personal information
                  during transmission by using encryption protocols and
                  software.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  We follow the Payment Card Industry Data Security Standard
                  (PCI DSS) when handling payment card data.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  We maintain physical, electronic, and procedural safeguards in
                  connection with the collection, storage, processing, and
                  disclosure of personal customer information. Our security
                  procedures mean that we may occasionally request proof of
                  identity before we disclose personal information to you.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Our devices offer security features to protect them against
                  unauthorized access and loss of data. You can control these
                  features and configure them based on your needs. Click{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GQFYXZHZB2H629WN"
                    target="_blank"
                    rel="noopener"
                  >
                    here
                  </Link>{" "}
                  for more information on how to manage the security settings of
                  your device.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  It is important for you to protect against unauthorized access
                  to your password and to your computers, devices, and
                  applications. Be sure to sign off when finished using a shared
                  computer. Click{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GQL359FK7DM8294C#:~:text=You%20can%20sign%20out%20of,that%20appears%2C%20select%20Sign%20Out."
                    target="_blank"
                    rel="noopener"
                  >
                    here
                  </Link>{" "}
                  for more information on how to sign off.
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h5" component="h2" gutterBottom>
              What About Advertising?
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>
                Third-Party Advertisers and Links to Other Websites:
              </strong>{" "}
              E-Commerce Services may include third-party advertising and links
              to other websites and apps. Third-party advertising partners may
              collect information about you when you interact with their
              content, advertising, and services. For more information about
              third-party advertising at E-Commerce, including interest-based
              ads, please read our{" "}
              <Link
                to="https://www.amazon.in/gp/help/customer/display.html?nodeId=202075050"
                target="_blank"
                rel="noopener"
              >
                Interest-Based Ads policy
              </Link>
              . To adjust your advertising preferences, please go to the{" "}
              <Link
                to="https://www.amazon.in/adprefs"
                target="_blank"
                rel="noopener"
              >
                Advertising Preferences
              </Link>{" "}
              page.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Use of Third-Party Advertising Services:</strong> We
              provide ad companies with information that allows them to serve
              you with more useful and relevant E-Commerce ads and to measure
              their effectiveness. We never share your name or other information
              that directly identifies you when we do this. Instead, we use an
              advertising identifier like a cookie, a device identifier, or a
              code derived from applying irreversible cryptography to other
              information like an email address. For example, if you have
              already downloaded one of our apps, we will share your advertising
              identifier and data about that event so that you will not be
              served an ad to download the app again. Some ad companies also use
              this information to serve you relevant ads from other advertisers.
              You can learn more about how to opt out of interest-based
              advertising by going to the{" "}
              <Link
                to="https://www.amazon.in/adprefs"
                target="_blank"
                rel="noopener"
              >
                Advertising Preferences
              </Link>{" "}
              page.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              What Information Can I Access?
            </Typography>
            <Typography variant="body1" paragraph>
              You can access your information, including your name, address,
              payment options, profile information, Prime membership, household
              settings, and purchase history in the "Your Account" section of
              the website or mobile application. Click{" "}
              <Link
                to="https://www.amazon.in/gp/privacycentral/dsar/preview.html"
                target="_blank"
                rel="noopener"
              >
                here
              </Link>{" "}
              for a list of examples that you can access. To request access to
              personal information that is not available through Your Account
              you can submit a request{" "}
              <Link
                to="https://www.amazon.in/gp/privacycentral/dsar/preview.html"
                target="_blank"
                rel="noopener"
              >
                here
              </Link>
              .
            </Typography>

            {/* What Choices Do I Have? */}
            <Typography variant="h5" component="h2" gutterBottom>
              What Choices Do I Have?
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions as to how we collect and use your
              personal information, please contact our{" "}
              <Link to="#">Grievance Officer</Link>. Many of our E-Commerce
              Services also include settings that provide you with options as to
              how your information is being used.
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  You can always choose not to provide certain information, but
                  then you might not be able to take advantage of many of the
                  E-Commerce Services.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  You can add or update certain information on pages such as
                  those referenced in{" "}
                  <Link to="#">What Information Can I Access?</Link>. When you
                  update information, we usually keep a copy of the prior
                  version for our records.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  If you do not want to receive e-mail or other communications
                  from us, please adjust your{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GXSTUM6E6RZDAQRY"
                    target="_blank"
                    rel="noopener"
                  >
                    Customer Communication Preferences
                  </Link>
                  . If you don't want to receive in-app notifications from us,
                  please adjust your notification settings in the app or device.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  If you do not want to see interest-based ads, please adjust
                  your{" "}
                  <Link
                    to="https://www.amazon.in/adprefs"
                    target="_blank"
                    rel="noopener"
                  >
                    Advertising Preferences
                  </Link>
                  .
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  The Help feature on most browsers and devices will tell you
                  how to prevent your browser or device from accepting new
                  cookies or other identifiers, how to have the browser notify
                  you when you receive a new cookie, or how to block cookies
                  altogether. Because cookies and identifiers allow you to take
                  advantage of some essential features of E-Commerce Services,
                  we recommend that you leave them turned on. For instance, if
                  you block or otherwise reject our cookies, you will not be
                  able to add items to your Shopping Cart, proceed to Checkout,
                  or use any Services that require you to Sign in. For more
                  information about cookies and other identifiers, see our{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html/?language=en_IN&nodeId=201890250"
                    target="_blank"
                    rel="noopener"
                  >
                    Cookies Notice
                  </Link>
                  .
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  If you want to browse our websites without linking the
                  browsing history to your account, you may do so by logging out
                  of your account{" "}
                  <Link
                    to="https://services.amazon.in/standards/cookies.html"
                    target="_blank"
                    rel="noopener"
                  >
                    here
                  </Link>{" "}
                  and blocking cookies on your browser.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  You will also be able to opt out of certain other types of
                  data usage by updating your settings on the applicable
                  E-Commerce website (e.g., in "Manage Your Content and
                  Devices"), device, or application. For more information click{" "}
                  <Link
                    to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200875610"
                    target="_blank"
                    rel="noopener"
                  >
                    here
                  </Link>
                  . Most non-E-Commerce devices also provide users with the
                  ability to change device permissions (e.g., disable/access
                  location services, contacts). For most devices, these controls
                  are located in the device's settings menu. If you have
                  questions about how to change your device permissions on
                  devices manufactured by third parties, we recommend you
                  contact your mobile service carrier or your device
                  manufacturer.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  If you are a seller, you can add or update certain information
                  in{" "}
                  <Link
                    to="https://sellercentral.amazon.in/"
                    target="_blank"
                    rel="noopener"
                  >
                    Seller Central
                  </Link>
                  , update your account information by accessing your{" "}
                  <Link
                    to="https://sellercentral.amazon.in/gp/help/external/G191?language=en_IN"
                    target="_blank"
                    rel="noopener"
                  >
                    Seller Account Information
                  </Link>
                  , and adjust your e-mail or other communications you receive
                  from us by updating your{" "}
                  <Link
                    to="https://sellercentral.amazon.in/gp/help/external/G871?language=en_IN"
                    target="_blank"
                    rel="noopener"
                  >
                    Notification Preferences
                  </Link>
                  .
                </Typography>
              </ListItem>
            </List>
            {/* Are Children Allowed to Use E-Commerce Services? */}
            <Typography variant="h5" component="h2" gutterBottom>
              Are Children Allowed to Use E-Commerce Services?
            </Typography>
            <Typography variant="body1" paragraph>
              E-Commerce does not sell products for purchase by children. We
              sell children's products for purchase by adults. If you are under
              the age of 18 years, you may use E-Commerce Services only with the
              involvement of a parent or guardian.
            </Typography>

            {/* Conditions of Use, Notices, and Revisions */}
            <Typography variant="h5" component="h2" gutterBottom>
              Conditions of Use, Notices, and Revisions
            </Typography>
            <Typography variant="body1" paragraph>
              If you choose to use E-Commerce Services, your use and any dispute
              over privacy is subject to this Notice and our{" "}
              <Link
                to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201909000"
                target="_blank"
                rel="noopener"
              >
                Conditions of Use
              </Link>
              , including limitations on damages, resolution of disputes, and
              application of the prevailing law in India. If you have any
              concern about privacy at E-Commerce, please{" "}
              <Link
                to="https://www.amazon.in/gp/help/contact-us/"
                target="_blank"
                rel="noopener"
              >
                contact us
              </Link>{" "}
              with a thorough description, and we will try to resolve it. Our
              business changes constantly, and our Privacy Notice will change
              also. You should check our websites frequently to see recent
              changes.
            </Typography>
            <Typography variant="body1" paragraph>
              Unless stated otherwise, our current Privacy Notice applies to all
              information that we have about you and your account. We stand
              behind the promises we make, however, and will never materially
              change our policies and practices to make them less protective of
              customer information collected in the past without the consent of
              affected customers.
            </Typography>

            {/* Related Practices and Information */}
            <Typography variant="h5" component="h2" gutterBottom>
              Related Practices and Information
            </Typography>
            <List>
              <ListItem>
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201909000"
                  target="_blank"
                  rel="noopener"
                >
                  Conditions of Use
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://sellercentral.amazon.in/gp/help/external/help.html?itemID=521&language=en_IN&ref=efph_521_cont_SNV3657R94YP9DZ"
                  target="_blank"
                  rel="noopener"
                >
                  Seller Program Policies
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
                  target="_blank"
                  rel="noopener"
                >
                  Help Department
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://www.amazon.in/gp/css/order-history/ref=oh_surl_yo"
                  target="_blank"
                  rel="noopener"
                >
                  Most Recent Purchases
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201929730"
                  target="_blank"
                  rel="noopener"
                >
                  Your Profile and Community Guidelines
                </Link>
              </ListItem>
            </List>

            {/* Examples of Information Collected */}
            <Typography variant="h5" component="h2" gutterBottom>
              Examples of Information Collected
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>
                Information You Give Us When You Use E-Commerce Services
              </strong>
            </Typography>
            <Typography variant="body1" paragraph>
              You provide information to us when you:
            </Typography>
            <List>
              <ListItem>
                Search or shop for products or services in our marketplace;
              </ListItem>
              <ListItem>
                Add or remove an item from your cart, or place an order through
                or use E-Commerce Services;
              </ListItem>
              <ListItem>
                Download, stream, view, or use content on a device or through a
                service or application on a device;
              </ListItem>
              <ListItem>
                Provide information in{" "}
                <Link
                  to="https://www.amazon.in/your-account"
                  target="_blank"
                  rel="noopener"
                >
                  Your Account
                </Link>{" "}
                (and you might have more than one if you have used more than one
                e-mail address or mobile number when shopping with us) or{" "}
                <Link to="/user-profile" target="_blank" rel="noopener">
                  Your Profile
                </Link>
                ;
              </ListItem>
              <ListItem>
                Talk to or otherwise interact with our Alexa Voice service;
              </ListItem>
              <ListItem>
                Upload your contacts, including access to mobile device contacts
                for certain services;
              </ListItem>
              <ListItem>
                Configure your settings on, provide data access permissions for,
                or interact with an E-Commerce device or service;
              </ListItem>
              <ListItem>
                Provide information in your Seller Account, Restaurant Central
                Account, Service Provider Account, or any other account we make
                available that allows you to develop or offer software, goods,
                or services to E-Commerce customers;
              </ListItem>
              <ListItem>
                Offer your products or services on or through E-Commerce
                Services;
              </ListItem>
              <ListItem>
                Communicate with us by phone, e-mail, or otherwise;
              </ListItem>
              <ListItem>
                Complete a questionnaire, a support ticket, or a contest entry
                form;
              </ListItem>
              <ListItem>
                Upload or stream images, videos, or audio, or other files while
                using E-Commerce Services;
              </ListItem>
              <ListItem>Use our services such as Prime Video;</ListItem>
              <ListItem>
                Compile Playlists, Watchlists,{" "}
                <Link
                  to="https://www.amazon.in/hz/wishlist/ls"
                  target="_blank"
                  rel="noopener"
                >
                  Wish Lists
                </Link>
                , or other gift registries;
              </ListItem>
              <ListItem>
                Participate in Discussion Boards or other community features;
              </ListItem>
              <ListItem>
                Provide and rate{" "}
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201929880"
                  target="_blank"
                  rel="noopener"
                >
                  Reviews
                </Link>
                ;
              </ListItem>
              <ListItem>Specify a Special Occasion Reminder;</ListItem>
              <ListItem>
                Employ Product Availability Alerts, such as Available to Order
                Notifications.
              </ListItem>
            </List>
            {/* Information You Might Supply */}
            <Typography variant="h5" component="h2" gutterBottom>
              As a result of those actions, you might supply us with such
              information as:
            </Typography>
            <List>
              <ListItem>
                Identifying information such as your name, address, and phone
                numbers;
              </ListItem>
              <ListItem>Payment information;</ListItem>
              <ListItem>Your age;</ListItem>
              <ListItem>Your location information;</ListItem>
              <ListItem>Your IP address;</ListItem>
              <ListItem>
                People, addresses, and phone numbers listed in your Addresses;
              </ListItem>
              <ListItem>
                E-mail addresses of your friends and other people;
              </ListItem>
              <ListItem>Content of reviews and e-mails to us;</ListItem>
              <ListItem>
                The personal description and photograph in{" "}
                <Link to="/user-profile" target="_blank" rel="noopener">
                  Your Profile
                </Link>
                ;
              </ListItem>
              <ListItem>Voice recordings when you speak to Alexa;</ListItem>
              <ListItem>
                Images, videos, and other content collected or stored in
                connection with E-Commerce Services;
              </ListItem>
              <ListItem>
                Information and officially valid documents regarding identity
                and address information, including PAN numbers;
              </ListItem>
              <ListItem>Credit history information;</ListItem>
              <ListItem>Corporate and financial information;</ListItem>
              <ListItem>
                Device log files and configurations, including Wi-Fi
                credentials, if you choose to automatically synchronize them
                with your other E-Commerce devices.
              </ListItem>
            </List>

            {/* Automatic Information */}
            <Typography variant="h5" component="h2" gutterBottom>
              Automatic Information
            </Typography>
            <Typography variant="body1" paragraph>
              Examples of the information we collect and analyze include:
            </Typography>
            <List>
              <ListItem>
                The internet protocol (IP) address used to connect your computer
                to the internet;
              </ListItem>
              <ListItem>Login, e-mail address, and password;</ListItem>
              <ListItem>The location of your device or computer;</ListItem>
              <ListItem>
                Content interaction information, such as content downloads,
                streams, and playback details, including duration and number of
                simultaneous streams and downloads, and network details for
                streaming and download quality, including information about your
                internet service provider;
              </ListItem>
              <ListItem>
                Device metrics such as when a device is in use, application
                usage, connectivity data, and any errors or event failures;
              </ListItem>
              <ListItem>
                E-Commerce Services metrics (e.g., the occurrences of technical
                errors, your interactions with service features and content,
                your settings preferences and backup information, location of
                your device running an application, information about uploaded
                images and files such as the file name, dates, times, and
                location of your images);
              </ListItem>
              <ListItem>Version and time zone settings;</ListItem>
              <ListItem>
                Purchase and content use history, which we sometimes aggregate
                with similar information from other customers to create features
                like{" "}
                <Link
                  to="https://www.amazon.in/gp/bestsellers"
                  target="_blank"
                  rel="noopener"
                >
                  E-Commerce Bestsellers
                </Link>
                ;
              </ListItem>
              <ListItem>
                The full Uniform Resource Locator (URL) clickstream to, through,
                and from our websites, including date and time; products and
                content you viewed or searched for; page response times,
                download errors, length of visits to certain pages, and page
                interaction information (such as scrolling, clicks, and
                mouse-overs);
              </ListItem>
              <ListItem>
                Phone numbers used to call our customer service number;
              </ListItem>
              <ListItem>
                Images or videos when you shop in our marketplace using
                E-Commerce Services.
              </ListItem>
            </List>

            {/* Information from Other Sources */}
            <Typography variant="h5" component="h2" gutterBottom>
              Information from Other Sources
            </Typography>
            <Typography variant="body1" paragraph>
              Examples of information we receive from other sources include:
            </Typography>
            <List>
              <ListItem>
                Updated delivery and address information from our carriers or
                other third parties, which we use to correct our records and
                deliver your next purchase or communication more easily;
              </ListItem>
              <ListItem>
                Account information, purchase or redemption information, and
                page-view information from some merchants with which we operate
                co-branded businesses or for which we provide technical,
                fulfillment, advertising, or other services;
              </ListItem>
              <ListItem>
                Information about your interactions with products and services
                offered by our affiliates;
              </ListItem>
              <ListItem>
                Search results and links, including paid listings (such as
                Sponsored Links);
              </ListItem>
              <ListItem>
                Information about internet-connected devices and services linked
                with Alexa;
              </ListItem>
              <ListItem>
                Credit history information from credit bureaus, which we use to
                help prevent and detect fraud and to offer certain credit or
                financial services to some customers.
              </ListItem>
            </List>

            {/* Information You Can Access */}
            <Typography variant="h5" component="h2" gutterBottom>
              Information You Can Access
            </Typography>
            <Typography variant="body1" paragraph>
              Examples of information you can access through E-Commerce Services
              include:
            </Typography>
            <List>
              <ListItem>
                Status of recent orders (including subscriptions);
              </ListItem>
              <ListItem>Your complete order history;</ListItem>
              <ListItem>
                Personally identifiable information (including name, e-mail,
                password, and address book);
              </ListItem>
              <ListItem>
                Payment settings (including payment method information,
                promotional certificate, gift card balances, and 1-Click
                settings);
              </ListItem>
              <ListItem>
                E-mail notification settings (including Product Availability
                Alerts, Delivers, Special Occasion Reminders, and newsletters);
              </ListItem>
              <ListItem>
                Recommendations and the products you recently viewed that are
                the basis for recommendations (including Recommended for You and
                Improve Your Recommendations);
              </ListItem>
              <ListItem>
                Shopping lists and gift registries (including Wish Lists);
              </ListItem>
              <ListItem>
                Your content, devices, services, and related settings, and
                communications and personalized advertising preferences;
              </ListItem>
              <ListItem>Content that you recently viewed;</ListItem>
              <ListItem>
                Voice recordings associated with your account;
              </ListItem>
              <ListItem>
                Your Profile (including your product Reviews, Recommendations,
                Reminders, and personal profile);
              </ListItem>
              <ListItem>
                If you are a seller, you can access your account and other
                information, and adjust your communications preferences, by
                updating your account in{" "}
                <Link
                  to="https://services.amazon.in/services/sell-on-amazon/benefits.html?ld=inrgooginkenshoo_502X203270_e_c_424967187013_asret_&gclid=CjwKCAjwydP5BRBREiwA-qrCGt78tz0nuWhmyVd6bXRkwH2Qd9CYRwu_Z9Y9WKvN2OOqJ2Y6lTeV4RoCBvgQAvD_BwE"
                  target="_blank"
                  rel="noopener"
                >
                  Seller Central
                </Link>
                .
              </ListItem>
              <ListItem>
                If you are a restaurant, you can access your account and other
                information, and adjust your communication preferences, by
                updating your account in Restaurant Central;
              </ListItem>
              <ListItem>
                If you are a service provider listing on our Service Provider
                Network, you can access your account and other information, and
                adjust your communication preferences, by updating your account
                in Service Provider Central;
              </ListItem>
            </List>
          </Container>

          <Box
            px={4}
            display={"flex"}
            flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          >
            {/* Grievance Officer */}
            <Box width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Grievance Officer
              </Typography>
              <Typography variant="body1" paragraph>
                Please find below the details of the grievance officer:
              </Typography>
              <Box mb={2}>
                <Typography variant="body1">
                  <strong>Name</strong>: Saurabh Joshi
                </Typography>
                <Typography variant="body1">
                  <strong>Designation</strong>: Grievance officer
                </Typography>
                <Typography variant="body1">
                  <strong>Email</strong>:{" "}
                  <Link to="mailto:grievance-officer@amazon.in">
                    grievance-officer@amazon.in
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <strong>Fax</strong>: 040 - 39922887
                </Typography>
                <Typography variant="body1">
                  <strong>Address</strong>: E-Commerce Seller Services Private
                  Limited (9O), Nos. 1401 to 1421, 14th Floor Block - E,
                  International Trade Tower, Nehru Place New Delhi, Delhi 110019
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                For details regarding the grievance redressal mechanism, please
                visit our Conditions of Use available{" "}
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?nodeId=202115000#GUID-523AEA8E-920A-4BA4-9EE0-2FCC6C3AB1D8__SECTION_E8DB72AB78B144658B508E816F23127B"
                  target="_blank"
                  rel="noopener"
                >
                  here
                </Link>
                .
              </Typography>
              <Typography variant="body1" paragraph>
                <Link
                  to="https://www.amazon.in/gp/help/customer/display.html?nodeId=202115000#GUID-523AEA8E-920A-4BA4-9EE0-2FCC6C3AB1D8__SECTION_E8DB72AB78B144658B508E816F23127B"
                  target="_blank"
                  rel="noopener"
                >
                  Click here
                </Link>{" "}
                to report infringement.
              </Typography>
              {/* Reporting Issues */}
              <Typography variant="body1" paragraph>
                <Link to="/gp/help/customer/display.html?nodeId=202115230">
                  Click here
                </Link>{" "}
                to report issues with orders, delivery, or sellers.
              </Typography>

              {/* Customer Support */}
              <Typography variant="body1" paragraph>
                Click{" "}
                <Link
                  href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"
                  target="_blank"
                  rel="noopener"
                >
                  here
                </Link>{" "}
                for customer support.
              </Typography>

              {/* Legal Information */}
              <Typography variant="body1" paragraph>
                The Grievance Officer is identified above pursuant to the
                provisions of applicable laws including but not limited to the
                Information Technology Act, 2000 and the Consumer Protection
                Act, 2019, and the Rules enacted under those laws.
              </Typography>
            </Box>
            <Box width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}>
              <Typography variant="h6">
                Was this information helpful?
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Yes
                </Button>
                <Button variant="outlined" color="secondary">
                  No
                </Button>
              </Box>

              <Typography variant="h6" mt={4}>
                Thank you for your feedback.
              </Typography>

              <Typography variant="body1" mt={2}>
                Please select what best describes the information:
              </Typography>
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup aria-label="feedback" name="feedback">
                  <FormControlLabel
                    value="Confused By Information"
                    control={<Radio />}
                    label="This information is confusing or wrong"
                  />
                  <FormControlLabel
                    value="Not What Looking For"
                    control={<Radio />}
                    label="This is not the information I was looking for"
                  />
                  <FormControlLabel
                    value="Didn't Like What Found"
                    control={<Radio />}
                    label="I do not like this policy"
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                label="Comments"
                multiline
                rows={4}
                maxRows={4}
                variant="outlined"
                fullWidth
                placeholder="commentsPlaceholderText"
                sx={{ mt: 2 }}
              />

              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>

              <Typography variant="body2" sx={{ mt: 3 }}>
                Thank you! While we are unable to respond directly to your
                feedback, we will use this information to improve our online
                Help.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Policy;
