


// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { NavLink } from "react-router-dom";

// const drawerWidth = '100%';
// const drawerHeight = '20%';
// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Login', path: '/login' },
//   { label: 'Register', path: '/register' },
//   { label: 'Cart', path: '/cart' }
// ];

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton component={NavLink} to={item.path} sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>


//           {/* extra */}



//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.label}
//                 component={NavLink}
//                 to={item.path}
//                 sx={{ color: '#fff' }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,height:drawerHeight, },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const menuItems = [
    { text: 'Inbox', icon: <InboxIcon /> },
    { text: 'Starred', icon: <MailIcon /> },
    { text: 'Send email', icon: <InboxIcon /> },
    { text: 'Drafts', icon: <MailIcon /> },
    { text: 'All mail', icon: <InboxIcon /> },
    { text: 'Trash', icon: <MailIcon /> },
    { text: 'Spam', icon: <InboxIcon /> },
  ];

  const list = (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MoreVertIcon />
      </Button>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
}
