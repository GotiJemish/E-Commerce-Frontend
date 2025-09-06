import CategoryCard from '@/components/common-components/category-card/CategoryCard';
import Image from 'next/image';
import React from 'react'

const PopularCategories = () => {
  return (
    <section className="popular-categories my-4">
      <div className="container">
        <h2>
         popular categories
          <button href="#" className="btn btn-dark float-end">
            view all categories
          </button>
        </h2>
        <div className="row">
          <div className="col-4">
            <CategoryCard/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories
