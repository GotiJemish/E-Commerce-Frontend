import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "./../../services/helper";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  // for navigation
  const navigate = useNavigate();

  //for selecting category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("none");

  const [shipping, setShipping] = useState(false);
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image_main, setImage_main] = useState("");
  const [image_small_1, setImage_small_1] = useState("");
  const [image_small_2, setImage_small_2] = useState("");
  const [image_small_3, setImage_small_3] = useState("");

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
    getAllCategories();
  }, []);

  // for add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ProductData = new FormData();

      ProductData.append("productname", productname);
      ProductData.append("description", description);
      ProductData.append("price", price);
      ProductData.append("category", selectedCategory);
      ProductData.append("quantity", quantity);
      ProductData.append("image_main", image_main);
      ProductData.append("image_small_1", image_small_1);
      ProductData.append("image_small_2", image_small_2);
      ProductData.append("image_small_3", image_small_3);
      ProductData.append('shipping',shipping)
      console.log(ProductData)

      const response = await axios.post(
        `${BACKEND_URL}/products/add-product`,
        ProductData
      );
      if (response.data.success) {
        setCategories(response.data.allCategory);
        toast.success(`product is created`);
        navigate("/admin-dashboard/products-list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in adding new products");
    }
  };

  return (
    <Layout pagetitle={"admin - product"}>
      <Box sx={{ display: "flex", minHeight: "85vh", padding: 2, gap: 4 }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>

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
              categories.find(
                (category) => category._id === selectedCategory
              ) || null
            }
            onChange={(event, newValue) =>
              setSelectedCategory(newValue ? newValue._id : null)
            }
            id="controllable-states-demo"
            options={categories}
            getOptionLabel={(option) => option.categoryname || ""}
            isOptionEqualToValue={(option, value) => option._id === value}
            sx={{ width: 300, marginBottom: 3 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Category"
                variant="outlined"
              />
            )}
          />

          {/* File upload */}
          <TextField
            label={image_main ? image_main.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            required
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_main(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_main && (
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
          )}

          {/* File upload */}
          <TextField
            label={image_small_1 ? image_small_1.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            required
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_1(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_1 && (
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
          )}

          {/* File upload */}
          <TextField
            label={image_small_2 ? image_small_2.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            required
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_2(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_2 && (
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
          )}

          {/* File upload */}
          <TextField
            label={image_small_3 ? image_small_3.name : "Upload Image"}
            type="file"
            name="image_main"
            accept="image/*"
            required
            fullWidth
            hidden
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setImage_small_3(event.target.files[0])}
            sx={{ marginBottom: 3 }}
          />

          {/* Display uploaded image */}
          {image_small_3 && (
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
          )}

          <TextField
            label={"Product Name"}
            type="text"
            name="productname"
            required
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
            required
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
            required
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
            required
            fullWidth
            value={quantity}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setQuantity(event.target.value)}
            sx={{ marginBottom: 3 }}
          />

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="shipping" // Set the name prop directly on the RadioGroup
            defaultValue={shipping} // Make sure to set defaultValue or value on the RadioGroup itself
            value={shipping}
            onChange={(e) => setShipping(e.target.value)} // Add onChange event handler to capture the selected value
          >
            <FormControlLabel value={false} control={<Radio />} label="No" />
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
          </RadioGroup>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Product
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default AddProduct;
