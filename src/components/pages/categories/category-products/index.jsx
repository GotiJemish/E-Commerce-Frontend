import ProductCard from '@/components/common-components/product-card/ProductCard';
import Image from 'next/image';
import React from 'react'

const CategoryProducts = (props) => {
  return (
    <>
      <h1>category products list</h1>
      <section className="all-categories my-4">
        <div className="container">
          <h2> products</h2>
          <div className="row">
            <div className="col-4">
              <ProductCard name="p-1" />
            </div>
          </div>
          <nav aria-label="Page navigation example" className="mt-5">
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
          </nav>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
