import ProductCard from '@/components/common-components/product-card/ProductCard';
import Image from 'next/image';
import React from 'react'

const LatestProducts = () => {
  return (
    <section className="latest-products my-4">
      <div className="container">
        <h2>
          latest products
          <button href="#" className="btn btn-dark float-end">
            view all products
          </button>
        </h2>
        <div className="row">
          <div className="col-4">
            <ProductCard name="p-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts
