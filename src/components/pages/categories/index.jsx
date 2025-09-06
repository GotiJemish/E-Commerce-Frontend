"use client"
import CategoryCard from '@/components/common-components/category-card/CategoryCard';
import CommanPagination from '@/components/common-components/comman-pagination/CommanPagination';
import { getCategoryList } from '@/store/slice/categorySlice';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CategoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category.categoryList);

  const itemsPerPage = 1;  // You can adjust this based on your design
  console.log("Product List=>", categoryList);

  // Fetch products when the page changes
  useEffect(() => {
    // Dispatch action with the new page and itemsPerPage
    dispatch(getCategoryList({ offset: (currentPage - 1) * itemsPerPage ,limit:itemsPerPage}));
  }, [currentPage, dispatch]);

  return (
    <>
      <h1>all categories</h1>
      <section className="all-categories my-4">
        <div className="container">
          <h2>all caegories</h2>
          <div className="row g-2">
            {categoryList?.data?.map((cat, i) => (
              <div className="col-4" key={i}>
                <CategoryCard data={cat} />
              </div>

            ))}

          </div>
<CommanPagination
            totalItems={categoryList?.count}  // Total items for pagination
            itemsPerPage={itemsPerPage}      // How many items to show per page
            currentPage={currentPage}        // Current page state
            onPageChange={(page) => setCurrentPage(page)}  // Update the current page
          />

          {/* <nav aria-label="Page navigation example" className='mt-5'>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav> */}

        </div>
      </section>
    </>
  );
}

export default CategoriesPage
