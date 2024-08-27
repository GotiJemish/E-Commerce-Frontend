import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../components/layout/Layout";

import {
  Box,
  Button,
  TableRow,
  TablePagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../../services/helper";
import { Link } from "react-router-dom";
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from "./../../components/reusables/Table-Components";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("category");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns = [
    { id: "index", label: "Index", numeric: true },
    { id: "category.categoryname", label: "Category Name", numeric: false },
    { id: "productname", label: "Product Name", numeric: false },
    { id: "image_main", label: "Main Image", numeric: false },

    { id: "image_small_1", label: "child images", numeric: false },
        { id: "image_small_2", label: "child images", numeric: false },
        { id: "image_small_3", label: "child images", numeric: false },

    { id: "description", label: "Description", numeric: false },
    { id: "price", label: "Price", numeric: true },
    { id: "quantity", label: "Quantity", numeric: true },
    { id: "updatedAt", label: "Last Updated", numeric: false },
    { id: "actions", label: "Actions", numeric: false },
  ];

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/products/get-products`);
      if (response.data.success) {
        setProducts(response.data.allProducts);
      }
    } catch (error) {
      toast.error("Error in getting products");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const visibleRows = useMemo(
    () =>
      stableSort(products, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, products]
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;




  //delete confirmation box
const handleConfirm = async (product_id,t) => {
     try {
      const response = await axios.delete(
        `${BACKEND_URL}/products/delete-product/${product_id}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        getAllProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting product");
    } finally {
    toast.dismiss(t.product_id);
  }
};
  // Handle product delete
  const handleDelete = async (product_id,message) => {

      toast((t) => (
        <div>
          {message}
          <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'space-between' }}>
            <Button  variant="contained" onClick={() => toast.dismiss(t.product_id)}>Close</Button>
            <Button  variant="contained" color="error" onClick={() => handleConfirm(product_id,t)}>Confirm</Button>
          </div>
        </div>
      ));
    // };



    // try {
    //   const response = await axios.delete(
    //     `${BACKEND_URL}/products/delete-product/${product_id}`
    //   );
    //   if (response.data.success) {
    //     toast.success(response.data.message);
    //     getAllProducts();
    //     // refreshPage(); // Reloads the page to reflect the deletion
    //   } else {
    //     toast.error(response.data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error in deleting product");
    // }
  };

  return (
    <Layout pagetitle={"admin - product"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>
        <Box sx={{ flex: 1, p: 2 }}>
          {products.length > 0 ? (
            <Paper sx={{ width: "80%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    columns={columns}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => (
                      <TableRow hover tabIndex={-1} key={row._id}>
                        {columns.map((column) => {
                          const value = column.id.includes(".")
                            ? column.id.split(".").reduce((o, i) => o[i], row)
                            : row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.numeric ? "right" : "left"}
                            >
                              {column.id === "index" ? (
                                index + 1
                              ) : column.id === "actions" ? (
                                <>
                                  <Link
                                    to={`/admin-dashboard/update-product/${row.productslug}`}
                                  >
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      sx={{ marginRight: 1 }}
                                    >
                                      Edit
                                    </Button>
                                  </Link>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDelete(row._id,'are you sure to delete this product?')}
                                  >
                                    Delete
                                  </Button>
                                </>
                              ) : column.id === "updatedAt" ? (
                                new Date(value).toLocaleDateString()
                              ) : column.id === "image_main" ? (
                                <Box
                                  component="img"
                                  src={`${BACKEND_URL}/products/get-product-image_main/${row._id}`}
                                  alt={row.productname}
                                  sx={{
                                    height: 50, // Adjusted height for better visibility
                                    width: 50, // Adjusted width for better visibility
                                    borderRadius: 1, // Optional: Adds rounded corners
                                    objectFit: "cover", // Ensures the image is not stretched
                                    overflow: "hidden",
                                  }}
                                />
                              ) : column.id === "image_small_1" ? (
                                <Box
                                  component="img"
                                  src={`${BACKEND_URL}/products/get-product-image_small_1/${row._id}`}
                                  alt={row.productname}
                                  sx={{
                                    height: 50, // Adjusted height for better visibility
                                    width: 50, // Adjusted width for better visibility
                                    borderRadius: 1, // Optional: Adds rounded corners
                                    objectFit: "cover", // Ensures the image is not stretched
                                    overflow: "hidden",
                                  }}
                                />
                              ) : column.id === "image_small_2" ? (
                                  <Box
                                    component="img"
                                    src={`${BACKEND_URL}/products/get-product-image_small_2/${row._id}`}
                                    alt={row.productname}
                                    sx={{
                                      height: 50, // Adjusted height for better visibility
                                      width: 50,  // Adjusted width for better visibility
                                      borderRadius: 1, // Optional: Adds rounded corners
                                      objectFit: "cover", // Ensures the image is not stretched
                                      overflow:'hidden'
                                    }}
                                  />
                                ) : column.id === "image_small_3" ? (
                                  <Box
                                    component="img"
                                    src={`${BACKEND_URL}/products/get-product-image_small_3/${row._id}`}
                                    alt={row.productname}
                                    sx={{
                                      height: 50, // Adjusted height for better visibility
                                      width: 50,  // Adjusted width for better visibility
                                      borderRadius: 1, // Optional: Adds rounded corners
                                      objectFit: "cover", // Ensures the image is not stretched
                                      overflow:'hidden'
                                    }}
                                  />
                                ):(

                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 33 * emptyRows }}>
                        <TableCell colSpan={columns.length} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <Box mt={2}>No products available.</Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductsList;
