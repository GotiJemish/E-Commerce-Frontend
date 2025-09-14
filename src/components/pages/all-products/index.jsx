"use client";
import CommanPagination from "@/components/common-components/comman-pagination/CommanPagination";
import ProductCard from "@/components/common-components/product-card/ProductCard";
import { getProductList } from "@/store/slice/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const itemsPerPage = 10;  // You can adjust this based on your design
  console.log("Product List=>", productList);

  // Fetch products when the page changes
  useEffect(() => {
    // Dispatch action with the new page and itemsPerPage
    dispatch(getProductList({ offset: (currentPage-1)*itemsPerPage ,limit:itemsPerPage}));
  }, [currentPage, dispatch]);


  return (
    <>
      <h1>All Products</h1>
      <section className="all-categories my-4">
        <div className="container">
          <h2>All Products</h2>
          <div className="row">
            {productList?.data?.map((product, i) => (
              <div className="col-4" key={i}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          <CommanPagination
            totalItems={productList?.count}  // Total items for pagination
            itemsPerPage={itemsPerPage}      // How many items to show per page
            currentPage={currentPage}        // Current page state
            onPageChange={(page) => setCurrentPage(page)}  // Update the current page
          />
        </div>
      </section>
    </>
  );
};

export default AllProductsPage;
