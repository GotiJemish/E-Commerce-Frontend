import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  Grid,
  ListItemText,
  Alert,
  Button,
  CardMedia,
  Divider,
  CardContent,
  Card,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
  { text: "Recommended Topics", active: true },
  { text: "Shipping & Delivery" },
  { text: "Amazon Prime" },
  { text: "Payments & Pricing" },
  { text: "Amazon Pay" },
  { text: "Product Troubleshooting" },
  { text: "Amazon Bazaar" },
  { text: "Returns, Refunds, Replacement" },
  { text: "Ordering" },
  { text: "Managing Your Account" },
  { text: "Devices & Digital Services (D2S)" },
  { text: "More Help (D2S)" },
  { text: "Amazon Business" },
  { text: "Other Topics & More Help" },
  { text: "Self Service" },
];

const cards = [
  {
    title: "Your Orders",
    description: ["Track packages", "Edit or cancel orders"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png",
    link: "/gp/css/order-history?ref_=hp_ss_v3_yo_t4",
  },
  {
    title: "Returns and Refunds",
    description: ["Return or exchange items", "Print return mailing labels"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png",
    link: "/gp/css/order-history?ref_=hp_ss_v3_rr_t4",
  },
  {
    title: "Manage Addresses",
    description: ["Update your addresses", "Add address, landmark details"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address.png",
    link: "/gp/css/account/address/view.html?ref_=hp_ss_v3_ma_t4",
  },
  {
    title: "Manage Prime",
    description: ["View your benefits", "Membership details"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png",
    link: "/gp/primecentral?ref_=hp_ss_v3_mp_t4",
  },
  {
    title: "Payment Settings",
    description: [
      "Add or edit payment methods",
      "Change expired debit or credit card",
    ],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3.png",
    link: "/cpe/managepaymentmethods?ref_=hp_ss_v3_ps_t4",
  },
  {
    title: "Account Settings",
    description: ["Change your email or password", "Update login information"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/IN-your-account.png",
    link: "/ap/cnep?ref_=hp_ss_v3_as_t4",
  },
  {
    title: "Digital Services and Device Support",
    description: ["Find device help and support", "Troubleshoot device issues"],
    image:
      "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/family_device.png",
    link: "/gp/help/customer/display.html?nodeId=200127470&ref_=hp_ss_v3_ds_t4",
  },
];

const recommendedTopics = [
  {
    title: "Learn how to...",
    links: [
      {
        text: "Track your package",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GENAFPTNLHV7ZACW",
      },
      {
        text: "Shipment is Late",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G3H9BPFKAXSW553X",
      },
      {
        text: "Undeliverable Packages",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GCC7G9HKYQBZT5FX",
      },
      {
        text: "Find a Missing Package that Shows as Delivered",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GCU8BWGTQNJKQEBS",
      },
      {
        text: "Returns and Replacements - FAQ",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G202115040",
      },
      {
        text: "Damaged, Defective or Wrong Product - FAQ",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GQHC9JYSMPRP39RH",
      },
      {
        text: "Amazon Bazaar",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=Tce0idTha1BLJw7Kos",
      },
      {
        text: "Product Troubleshooting - FAQs (Electronics)",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=TFXmcncLOqCGOBSNdr",
      },
      {
        text: "Self-service video library",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G2QJYUE6Q9FH5JKL",
      },
      {
        text: "Get started with Amazon",
        url: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GFNMQDRWSE2HRJ22",
      },
    ],
  },
  {
    title: "Try it Yourself",
    links: [
      {
        text: "Track your order",
        url: "https://www.amazon.in/gp/css/order-history/ref=hp_gt_rt_wmo",
      },
      {
        text: "Change Your Language Preference",
        url: "https://www.amazon.in/customer-preferences/edit?ref_=icp_cs_lop_help",
      },
      {
        text: "Manage Your Returns",
        url: "https://www.amazon.in/gp/css/returns/homepage.html/ref=hp_gt_rt_ret",
      },
      {
        text: "Using Amazon Pay balance",
        url: "https://www.amazon.in/l/11962108031?ref=hp_gt_rt_apay_t_uapb_dk",
      },
      {
        text: "View Amazon Pay Transactions",
        url: "https://www.amazon.in/gp/payment/statement?ref=hp_gt_rt_apay_t_vs_dk",
      },
      {
        text: "Manage Your Payment Methods",
        url: "https://www.amazon.in/gp/css/account/cards/view.html/ref=hp_gt_rt_ss_comp_mpo",
      },
    ],
  },
];

const sections = [
  {
    title: "To know about Amazon Prime",
    items: [
      {
        text: "About Amazon Prime and Prime Lite Membership Benefits",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G6LDPN7YJHYKH2J6",
      },
      {
        text: "How to Sign Up for Amazon Prime",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=201910190",
      },
      {
        text: "The Amazon Prime Membership Fee",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G34EUPKVMYFW8N2U",
      },
      {
        text: "About Prime Eligible Items",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GR2WKYLHWHLVK6R9",
      },
      {
        text: "Amazon Prime Delivery Benefits",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GRPQFCNVUDYCBG24",
      },
      {
        text: "More in Prime",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GJNNP777QLUYFPNG",
      },
    ],
    tryIt: {
      text: "Sign up for Amazon Prime today",
      href: "https://www.amazon.in/amazonprime",
    },
  },
  {
    title: "For information on available payment options",
    items: [
      {
        text: "Pay on Delivery",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=202054820",
      },
      {
        text: "EMI",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=202054460",
      },
      {
        text: "Accepted Payment Methods",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GFBWMNXEPYVJAY9A",
      },
      {
        text: "Payment Issues",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GJLLHTPTG32P95DR",
      },
      {
        text: "Resolve a Declined Payment",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GF8B8BP3Q4HQADU8",
      },
      {
        text: "More in Payment, Pricing & Promotions",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=201894450",
      },
    ],
    tryIt: {
      text: "Manage your payment methods",
      href: "https://www.amazon.in/cpe/managepaymentmethods?ref_=ya_d_c_pmt_mpo",
    },
  },
  {
    title: "For information related to Amazon Pay",
    items: [
      {
        text: "Amazon Pay Later",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GJ626ASQQ6PD2KZY",
      },
      {
        text: "Bill Payments",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GKGXX92SJ88Q9YY2",
      },
      {
        text: "About Amazon Pay ICICI Bank Credit Card",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=G9QV3NF4ALZ4HRQE",
      },
      {
        text: "Amazon Pay Wallet - FAQs",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=202135170",
      },
      {
        text: "Amazon Pay Gift Cards",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GMEPD5NLAENJEC9H",
      },
      {
        text: "Amazon Pay KYC FAQs",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GRX62PFZCZLJETJH",
      },
      {
        text: "Terms and Conditions - Amazon Pay Wallet",
        href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=202123460",
      },
      {
        text: "More in Amazon Pay",
        href: "https://www.amazon.in/gp/help/customer/display.html/?ie=UTF8&nodeId=202123450&ref=cs_apay_t_lp_dk",
      },
    ],
    tryIt: {
      text: "Manage your Amazon Pay account",
      href: "https://www.amazon.in/amazonpay/home?ref_=nav_em_apay_nav_desktop_0_1_1_25",
    },
  },
];
const HelpCategoryContent = ({ content }) => (
  <Grid container spacing={2}>
    {content.map((section, index) => (
      <Grid item xs={6} key={index}>
        <Typography variant="h6" gutterBottom>
          {section.title}
        </Typography>
        <List>
          {section.links.map((link, i) => (
            <ListItem key={i} component="div">
              <ListItemText>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    ))}
  </Grid>
);

const Help = () => {
  return (
    <Layout pagetitle={"Ecommerce - help"}>
      <Box sx={{ mt: 4, mb: 4 }}>
        {/* Alert Section */}
        <Box sx={{ mb: 2 }}>
          <List>
            <ListItem>
              <Alert severity="warning" aria-live="polite" aria-atomic="true">
                <Typography>
                  <i className="a-icon a-icon-alert" />
                  For information on our live sale events, including promotions,
                  deals, cashbacks, and quick solutions, refer to our Help page
                  on{" "}
                  <Link
                    href="https://www.amazon.in/gp/help/customer/display.html?nodeId=TTOLfLWVy6YRkUJc35"
                    target="_blank"
                  >
                    Sale Events
                  </Link>
                  .
                </Typography>
              </Alert>
            </ListItem>
          </List>
        </Box>

        {/* Expander Content */}
        <Box sx={{ display: "none", mb: 4 }}>
          <Button
            variant="text"
            aria-expanded="false"
            role="button"
            sx={{ display: "none" }}
          >
            <i className="a-icon a-icon-extender-expand" />
            <span>See all alerts (alert-count more)</span>
          </Button>
        </Box>

        {/* Main Section */}
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Hello. What can we help you with?
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} aria-hidden="true" />

        {/* Subsection */}
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" gutterBottom>
            Some things you can do here
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link href={card.link} underline="none">
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      boxShadow: 3,
                      borderRadius: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      sx={{ height: 100, objectFit: "contain", m: 2 }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {card.title}
                      </Typography>
                      <ul>
                        {card.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 2 }} aria-hidden="true" />

        {/* Browse Help Topics */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>
            Browse Help Topics
          </Typography>

          <List
            sx={{ bgcolor: "background.paper", borderRadius: 1, boxShadow: 1 }}
          >
            {categories.map((category, index) => (
              <ListItem
                key={index}
                component={Link}
                href="#"
                sx={{
                  bgcolor: category.active ? "lightgrey" : "transparent",
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": {
                    bgcolor: "lightblue",
                  },
                }}
              >
                <ListItemText primary={category.text} />
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 4 }}>
            <HelpCategoryContent content={recommendedTopics} />
          </Box>

          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <List sx={{ pl: 0, listStyle: "none" }}>
                {section.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <Typography variant="body2">
                      <Link href={item.href} target="_blank" rel="noopener">
                        {item.text}
                      </Link>
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Try it Yourself
              </Typography>
              <Typography variant="body2">
                <Link href={section.tryIt.href} target="_blank" rel="noopener">
                  {section.tryIt.text}
                </Link>
              </Typography>
            </Box>
          ))}

          {/* Additional sections */}
          <Box sx={{ width: 500, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List>
                  <ListItem>
                    <Typography variant="h6" gutterBottom>
                      For assisting you in your shopping journey
                    </Typography>
                  </ListItem>
                  {[
                    {
                      text: "Search and Browse for Items",
                      href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GSUNWNFT2ALMPR3L",
                    },
                    {
                      text: "Ordering with Amazon - FAQ",
                      href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GDF5PQP4Z6SUH4CQ",
                    },
                    // ...other items
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <Link href={item.href} target="_blank" rel="noopener">
                        {item.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List>
                  <ListItem>
                    <Typography variant="h6" gutterBottom>
                      Try it Yourself
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="https://www.amazon.in/gp/css/order-history"
                      target="_blank"
                    >
                      Find tracking information and order details
                    </Link>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Help;
