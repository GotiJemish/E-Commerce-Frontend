import { Box, Button, TextField } from '@mui/material';
import React from 'react';


const CategoryForm = ({ handleSubmit, categoryValue, setCategoryValue }) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper',
      }}
    >
      <TextField
        label="Enter New Category"
        variant="outlined"
        type="text"
        fullWidth
        value={categoryValue}
        onChange={(e) => setCategoryValue(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  </Box>
);

export default CategoryForm;
