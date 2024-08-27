import React, { useEffect, useState } from "react";
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
  TableHead,
} from "@mui/material";
import Sidebar from "../../components/admin/sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "./../../services/helper";
import CategoryForm from "../../components/admin/Category-update";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [categoryname, setCategoryName] = useState(""); // for new category
  const [open, setOpen] = useState(false); // for modal
  const [updatedcategory, setUpdateCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  // Handle category update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BACKEND_URL}/categories/update-category/${selectedCategoryId}`,
        { categoryname: updatedcategory }
      );
      if (response.data.success) {
        toast.success(response.data.message, `changed to ${updatedcategory}`);
        setSelectedCategoryId(null);
        setUpdateCategory("");
        getAllCategories();
        handleClose();
        // refreshPage();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating category");
    }
  };
  // Handle category delete
  const handleDelete = async (category_id) => {
    // console.log(category_id)
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/categories/delete-category/${category_id}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        getAllCategories();
        // refreshPage(); // Reloads the page to reflect the deletion
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting category");
    }
  };

  // Handle adding new category
  const handleaddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/categories/add-category`,
        { categoryname }
      );
      if (response.data.success) {
        setCategories(response.data.allCategory);
        toast.success(`${categoryname} is created`);
        setCategoryName("");
        refreshPage();
        // getAllCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in adding new category");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const columns = [
    { id: "index", label: "Index", minWidth: 50 },
    { id: "categoryname", label: "Categories", minWidth: 170 },
    { id: "actions", label: "Actions", minWidth: 100 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // modal opening and passing category id and name
  const openEditModal = (category) => {
    setSelectedCategoryId(category._id);
    setUpdateCategory(category.categoryname);
    handleOpen();
  };

  return (
    <Layout pagetitle={"admin - category"}>
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Sidebar />
        </Box>
        <CategoryForm
          handleSubmit={handleaddCategory}
          categoryValue={categoryname}
          setCategoryValue={setCategoryName}
        />
        <Box>
          {categories.length > 0 ? (
            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categories
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((category, index) => (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={category._id}
                        >
                          {columns.map((column) => {
                            if (column.id === "index") {
                              const serialNumber =
                                page * rowsPerPage + index + 1;
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {serialNumber}
                                </TableCell>
                              );
                            } else if (column.id === "actions") {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    sx={{ marginRight: 1 }}
                                    onClick={() => openEditModal(category)}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDelete(category._id)}
                                  >
                                    Delete
                                  </Button>
                                </TableCell>
                              );
                            } else {
                              const value = category[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {value}
                                </TableCell>
                              );
                            }
                          })}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <Box mt={2}>No categories available.</Box>
          )}
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CategoryForm
              handleSubmit={handleUpdate}
              categoryValue={updatedcategory}
              setCategoryValue={setUpdateCategory}
            />
          </Box>
        </Modal>
      </Box>
    </Layout>
  );
};

export default AddCategory;
