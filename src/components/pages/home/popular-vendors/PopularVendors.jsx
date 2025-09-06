import Image from 'next/image'
import React from 'react'

const PopularVendors = () => {
  return (
    <section className="popular-products my-4">
      <div className="container">
        <h2>
          popular vendors
          <button href="#" className="btn btn-dark float-end">
            view all vendors
          </button>
        </h2>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <Image
                width={200}
                height={200}
                src="/images/table/EmptyTable.svg"
                className="card-img-top"
                alt="product-image"
              />
              <div className="card-body">
                <h4 className="card-title">vendor-name</h4>

                {/* <p className="card-text">
                           Some quick example text to build on the card title and make
                           up the bulk of the card’s content.
                         </p>
                         <a href="#" className="btn btn-primary">
                           Go somewhere
                         </a> */}
              </div>
              <div className="card-footer d-flex gap-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  category-1
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  category-2
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  category-3
                </a>
                {/* <button title="add-to-cart" className="btn btn-success">
                         cart
                       </button>
                       <button title="add-to-wishlist" className="btn btn-warning">
                         wishlist
                       </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularVendors
