import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
// import { AuthHook } from "../context/authentication";
import { BACKEND_URL } from "../services/helper";
import axios from "axios";
import toast from "react-hot-toast";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { Link } from "react-router-dom";


const HomePage = () => {
  // const [authenticate, setAutenticate] = AuthHook();
  const[allproducts,setAllProducts]=useState([])
const[allcategories,setCategories]=useState([])
const[checkedCat,setCheckedCat]=useState([])

// for getting all products
const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/products/get-products`);
    if (response.data.success) {
      setAllProducts(response.data.allProducts);
    }
  } catch (error) {
    console.log(error)
    toast.error("Error in getting products");
  }
};
  // Getting all categories
  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/categories/get-categories`
      );
      if (response.data.success) {
        setCategories(response.data.allCategory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in getting categories");
    }
  };

// filters
// filter by category

const handleFilter = (value, cat_id) => {
  let all_checked = [...checkedCat];
  
  if (value) {
    all_checked.push(cat_id);
  } else {
    all_checked = all_checked.filter(
      (category) => category !== cat_id
    );
  }

  setCheckedCat(all_checked);
};


  useEffect(() => {
    getAllProducts();
  }, []);
useEffect(() => {
  getAllProducts();
  getAllCategories();
}, []);

  return (
    <Layout pagetitle={"Ecommerce - Home"}>
      {/* home*/}
      {/* {JSON.stringify(checkedCat, null, 4)}  */}


<Box sx={{ display: "flex", minHeight: "85vh", p: 2 }}>
  <Box
    sx={{
      display: { xs: "none", sm: "block" },
      width: { sm: "20%", md: "15%" },
      borderRight: 1,
      borderColor: "divider",
      pr: 2,
    }}
  >
    <Typography variant="h6" sx={{ mb: 2 }}>
      Filters
    </Typography>
    {/* Add filter options here */}
    <FormGroup>
    {allcategories?.map((cat)=>(
        <FormControlLabel control={
        <Checkbox key={cat._id} onChange={(event)=>handleFilter(event.target.checked,cat._id)}/>
      } label={cat.categoryname} />
      ))}
      </FormGroup>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: 2,
      width: "100%",
      p: 2,
    }}
  >
    <Typography variant="h6" sx={{ width: "100%", textAlign: "center", mb: 2 }}>
      All Products
    </Typography>

    <Grid container spacing={2}>
      {allproducts?.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product._id}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={`${BACKEND_URL}/products/get-product-image_main/${product._id}`}
              title={product.productname}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.productname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {product.category.categoryname}
      </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}.... 
              <Link size="small" variant="outlined">
                more details
              </Link>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>

             
              {/* <Button size="small" variant="outlined">
                wishlist
              </Button> */}
              {/* <Button size="small" variant="outlined">
                Share
              </Button> */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {[1, 2, 3].map((num) => (
                  <Box
                    key={num}
                    component="img"
                    src={`${BACKEND_URL}/products/get-product-image_small_${num}/${product._id}`}
                    alt={product.productname}
                    sx={{
                      height: 50,
                      width: 50,
                      borderRadius: 1,
                      objectFit: "cover",
                      border: 1,
                      borderColor: "divider",
                    }}
                  />
                ))}
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>


    </Layout>
  );
};

export default HomePage;
