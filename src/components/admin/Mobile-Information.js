
import React, { useState } from 'react';
import { Box,  IconButton, Drawer,
  } from '@mui/material';



import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './sidebar';


const MobileInformation=()=> {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 'auto', px: 2, pb: 3, pt: 2 }} role="presentation">
     
      <Sidebar />
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
       <CloseIcon />
      </IconButton>
    </Box>
    
  );

  return (
    <Box>
 <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

      <Drawer open={open} anchor="left" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}



export default MobileInformation;
