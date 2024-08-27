import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "./../../services/helper";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {

// for parameters
const params=useParams()

// for navigation
const navigate=useNavigate()

 //for selecting category
 const [categorieslist, setCategories] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState('none');
 

//   for update product
  const [shipping, setShipping] = useState(false);
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image_main, setImage_main] = useState("");
  const [image_small_1, setImage_small_1] = useState("");
  const [image_small_2, setImage_small_2] = useState("");
  const [image_small_3, setImage_small_3] = useState("");
  const [product_id, setProduct_id] = useState("");

// get one product data

const getSingleProduct=async()=>{
    try {
        const response = await axios.get(
          `${BACKEND_URL}/products/get-single-product/${params.productslug}`
        );
        if (response.data.success) {
            // console.log(response.data.singleProduct)

            const singleproduct=response.data.singleProduct

            setProductname(singleproduct.productname)
         setDescription(singleproduct.description)
         setPrice(singleproduct.price)
         setShipping(singleproduct.shipping)
         setQuantity(singleproduct.quantity)
         setImage_main(singleproduct.image_main)
         setImage_small_1(singleproduct.image_small_1)
setImage_small_2(singleproduct.image_small_2)
setImage_small_3(singleproduct.image_small_3)
setSelectedCategory(singleproduct.category._id)
          setProduct_id(singleproduct._id);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error in getting single product data");
      } 
}


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

  useEffect(() => {
    getSingleProduct();
    getAllCategories();
  },[]);




  // for update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ProductData = new FormData();

      ProductData.append("productname", productname);
      ProductData.append("description", description);
      ProductData.append("price", price);
      ProductData.append("category", selectedCategory);
      ProductData.append("quantity", quantity);
      image_main && ProductData.append("image_main", image_main);
      image_small_1 && ProductData.append("image_small_1", image_small_1);
      image_small_2 && ProductData.append("image_small_2", image_small_2);
      image_small_3 && ProductData.append("image_small_3", image_small_3);
      ProductData.append('shipping',shipping)
      console.log(ProductData)
      console.log(selectedCategory)
      const response = await axios.put(
        `${BACKEND_URL}/products/update-product/${product_id}`,
        ProductData
      );
      if (response.data.success) {
        toast.success(`product is updated`);
        navigate("/admin-dashboard/products-list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating products");
    }
  };
//   console.log(category)
  return (
    <Layout pagetitle={"admin - product"}>
      <Box sx={{ display: "flex", minHeight: "85vh", padding: 2, gap: 4 }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>
<Typography>
    update product
</Typography>
        <Box
          sx={{
            maxWidth: 400,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          {/* Dropdown for selecting category */}
         
       
          <Autocomplete
  value={
    categorieslist.find((cat) => cat._id === selectedCategory) || selectedCategory
  }
  onChange={(event, newValue) =>
    setSelectedCategory(newValue ? newValue._id : selectedCategory._id)
  }
  id="controllable-states-demo"
  options={categorieslist}
  getOptionLabel={(option) => option.categoryname || ""}
  isOptionEqualToValue={(option, value) => option._id === value._id}
  sx={{ width: 300, marginBottom: 3 }}
  renderInput={(params) => (
    <TextField {...params} label="Select Category" variant="outlined" />
  )}
/>




          {/* File upload */}
          <TextField
            label={image_main ? image_main.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_main(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_main ? (
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              <Box
                component="img"
                src={URL.createObjectURL(image_main)}
                alt="Product Main Image"
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
          ):(
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Box
              component="img"
              src={`${BACKEND_URL}/products/get-product-image_main/${product_id}`}
              alt="Product Main Image"
              style={{
                height: 200,
                width: 200,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Box>
          )}






          {/* File upload */}
          <TextField
            label={image_small_1 ? image_small_1.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_1(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_1 ? (
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              <Box
                component="img"
                src={URL.createObjectURL(image_small_1)}
                alt="Product Main Image"
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
          ):(
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Box
              component="img"
              src={`${BACKEND_URL}/products/get-product-image_small_1/${product_id}`}
              alt="Product Main Image"
              style={{
                height: 200,
                width: 200,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Box>
          )}

          {/* File upload */}
          <TextField
            label={image_small_2 ? image_small_2.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_2(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_2 ? (
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              <Box
                component="img"
                src={URL.createObjectURL(image_small_2)}
                alt="Product Main Image"
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
          ):(
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Box
              component="img"
              src={`${BACKEND_URL}/products/get-product-image_small_2/${product_id}`}
              alt="Product Main Image"
              style={{
                height: 200,
                width: 200,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Box>
          )}

          {/* File upload */}
          <TextField
            label={image_small_3 ? image_small_3.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_3(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_3 ? (
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              <Box
                component="img"
                src={URL.createObjectURL(image_small_3)}
                alt="Product Main Image"
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
          ):(
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Box
              component="img"
              src={`${BACKEND_URL}/products/get-product-image_small_3/${product_id}`}
              alt="Product Main Image"
              style={{
                height: 200,
                width: 200,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Box>
          )}

          <TextField
            label={"Product Name"}
            type="text"
            name="productname"
            fullWidth
            value={productname}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setProductname(event.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label={"Product Description"}
            type="text"
            name="description"
            fullWidth
            value={description}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setDescription(event.target.value)}
            sx={{ marginBottom: 3 }}
          />

          <TextField
            label={"Product Price"}
            type="number"
            name="price"
            fullWidth
            value={price}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setPrice(event.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label={"Product Quantity"}
            type="number"
            name="price"
            fullWidth
            value={quantity}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setQuantity(event.target.value)}
            sx={{ marginBottom: 3 }}
          />

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="shipping"
  defaultValue={shipping}
  value={shipping}
  onChange={(e) => setShipping(e.target.value)}
>
  <FormControlLabel value={false} control={<Radio />} label="No" />
  <FormControlLabel value={true} control={<Radio />} label="Yes" />
</RadioGroup>


          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Product
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default UpdateProduct;
