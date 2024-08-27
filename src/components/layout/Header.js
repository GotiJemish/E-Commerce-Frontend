import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Badge, MenuItem, Menu,
  Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText
} from '@mui/material';
import {  AccountCircle, ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import SearchBox from '../reusables/searchbox';
import { AuthHook } from '../../context/authentication';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import toast from 'react-hot-toast';
import MobileInformation from '../admin/Mobile-Information';

import CloseIcon from '@mui/icons-material/Close';



const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Category', path: '/category' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (event, menuType) => setAnchorEl({ anchor: event.currentTarget, type: menuType });
  const handleMenuClose = () => setAnchorEl(null);

  const [authenticate, setAuthenticate] = AuthHook();

  const handleLogout = () => {
    handleMenuClose();
    setAuthenticate({ ...authenticate, user:null, token:'' });
    localStorage.removeItem('authentication');
    toast.success('logout successfully')
  };

  const renderMenu = (menuType) => (
  
      menuType === 'profile' ? (
        authenticate.user ? (
<>
           <Menu
          anchorEl={anchorEl?.anchor}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl?.type === menuType && anchorEl?.anchor)}
          onClose={handleMenuClose}
        >
          
          {authenticate.user.role === 1 ? (
          <MenuItem key="dashboard" component={NavLink} to="/admin-dashboard" onClick={handleMenuClose}>
            Dashboard
          </MenuItem>
        ) : (
          <MenuItem key="dashboard" component={NavLink} to="/user-dashboard" onClick={handleMenuClose}>
            Dashboard
          </MenuItem>
        )}
        
            <MenuItem  key={'logout'} component={NavLink} to="/" onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>

        ) : (

        <>
        <Menu
   anchorEl={anchorEl?.anchor}
   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
   keepMounted
   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
   open={Boolean(anchorEl?.type === menuType && anchorEl?.anchor)}
   onClose={handleMenuClose}
 >
         <MenuItem  key={'login'} component={NavLink} to="/login" onClick={handleMenuClose}>Login</MenuItem>
         <MenuItem  key={'register'} component={NavLink} to="/register" onClick={handleMenuClose}>Register</MenuItem>
         </Menu> </>
        )
      ) : (
        <Menu
      anchorEl={anchorEl?.anchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl?.type === menuType && anchorEl?.anchor)}
      onClose={handleMenuClose}
    >
        <MenuItem key={'cart'} component={NavLink} to="/cart" onClick={handleMenuClose}>Cart</MenuItem>
        </Menu>
      )
  );
  

  const renderMobileMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl?.anchor && anchorEl?.type === 'mobile')}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={(e) => handleMenuOpen(e, 'profile')}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={(e) => handleMenuOpen(e, 'cart')}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  const drawer = (<>
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box height={60} display="flex" alignItems="center" justifyContent="center">
        <Box
          component="img"
          src="/assets/images/logo.png"
          alt="website logo"
          width={200}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={NavLink} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/cart" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
   <IconButton
        onClick={handleDrawerToggle}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
       <CloseIcon />
      </IconButton>
  </>
    
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}

          {/* here it is sidebar informations */}
           <MobileInformation />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box
              component="img"
              src="/assets/images/logo.png"
              alt="website logo"
              sx={{ width: { sm: '150px', md: '200px' } }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <SearchBox />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex' }}>
            <IconButton sx={{ display: { xs: 'none', sm: 'flex' } }} onClick={(e) => handleMenuOpen(e, 'cart')} size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={(e) => handleMenuOpen(e, 'profile')}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, display: { sm: 'none' } }}
          >
            <MoreVertIcon />
          </IconButton>
          </Box>

        


        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
        anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {renderMobileMenu}
      {renderMenu('profile')}
      {renderMenu('cart')}
    </Box>
  );
};

export default Header;










