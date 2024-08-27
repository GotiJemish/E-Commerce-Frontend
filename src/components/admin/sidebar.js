import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { NavLink, useLocation } from "react-router-dom";
import { AuthHook } from '../../context/authentication';

const Sidebar = () => {
  const location = useLocation();
  const logoStyle = { height: '40px' };
  
  const [authenticate] = AuthHook();
  
  // Define the menu items based on user role
  const menuItems = authenticate.user.role === 1 ? [
    { key: "add-category", to: "/admin-dashboard/add-category", label: "Add Category" },
    { key: "add-product", to: "/admin-dashboard/add-product", label: "Add Product" },
    { key: "user-list", to: "/admin-dashboard/user-list", label: "Users List" },
    { key: "products-list", to: "/admin-dashboard/products-list", label: "Products List" },
    { key: "extra", to: "/admin-dashboard/extra", label: 'Extra' },
    
  ] : [
    { key: "user-profile", to: "/user-dashboard/user-profile", label: "Profile" },
    { key: "user-orders", to: "/user-dashboard/user-orders", label: "Orders" },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', minHeight: 20 }}>
        <img src="/assets/images/logo.png" style={logoStyle} alt="Website's logo" />
      </Box>

      <Box sx={{ width: 240, minWidth: 100 }} role="presentation">
        <List>
          {menuItems.map(item => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.to}
                autoFocus={location.pathname === item.to}
                sx={{
                  backgroundColor: location.pathname === item.to ? '#1976d2' : 'inherit',
                  '&:hover': {
                    backgroundColor: '#f25514',
                  },
                }}
              >
                <ListItemIcon>
                  <VolunteerActivismIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
