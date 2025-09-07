"use client"
import CommanPagination from '@/components/common-components/comman-pagination/CommanPagination';
import ProductCard from '@/components/common-components/product-card/ProductCard';
import { getCategoryProductsList } from '@/store/slice/productSlice';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const itemsPerPage = 1;  // You can adjust this based on your design
const CategoryDetails = ({ categoryId }) => {
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.product.categoryProducts)
const loading = useSelector((state) => state.product.loading);
  // Fetch products when the page changes
useEffect(() => {
    if (!categoryId) return; // Guard clause
    dispatch(
      getCategoryProductsList({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
        category: categoryId,
      })
    );
  }, [categoryId, currentPage, dispatch]);

console.log("object",categoryProducts)
  return (
    <>
      <h1>category products list</h1>
      <section className="all-categories my-4">
        <div className="container">
          <h2> products</h2>

           {loading ? (
            <div className="text-center my-5">
              <p>Loading products...</p>
              {/* You can replace this with a spinner component */}
            </div>
          ) : (<>
          <div className="row">
            {categoryProducts?.data?.map((product, i) => (
              <div className="col-4" key={i}>
                <ProductCard name="p-1" data={product} />
              </div>
            ))}

          </div>
          <CommanPagination
            totalItems={categoryProducts?.count}  // Total items for pagination
            itemsPerPage={itemsPerPage}      // How many items to show per page
            currentPage={currentPage}        // Current page state
            onPageChange={(page) => setCurrentPage(page)}  // Update the current page
          />
</>)}
        </div>
      </section>
    </>
  );
};

export default CategoryDetails;
