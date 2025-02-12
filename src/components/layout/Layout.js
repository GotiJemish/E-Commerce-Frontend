import React from 'react'
import Header from './Header'
// import Header from './extra'
import Footer from './Footer'
import {  Box, createTheme, ThemeProvider } from '@mui/material'
import { Helmet } from "react-helmet";

const defaultTheme = createTheme();

const Layout = ({children,  metadescription,metakeywords,meteauther,pagetitle}) => {
  return (
  <>
  <Helmet>
  <meta charSet="UTF-8" />
  <meta name="description" content={metadescription} />
  <meta name="keywords" content={metakeywords} />
  <meta name="author" content={meteauther} />
  <title>{pagetitle}</title>

  </Helmet>
        <Header/>
        <ThemeProvider theme={defaultTheme}>
<Box sx={{minHeight:'85vh'}}>
      {children}
      </Box>
      
      </ThemeProvider>
      <Footer/>
      
    </>
  )
}

export default Layout


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';

// export default function TransitionAlerts() {
//   const [open, setOpen] = React.useState(true);

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Collapse in={open}>
//         <Alert
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setOpen(false);
//               }}
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//           sx={{ mb: 2 }}
//         >
//           Click the close icon to see the Collapse transition in action!
//         </Alert>
//       </Collapse>
//       <Button
//         disabled={open}
//         variant="outlined"
//         onClick={() => {
//           setOpen(true);
//         }}
//       >
//         Re-open
//       </Button>
//     </Box>
//   );
// }

