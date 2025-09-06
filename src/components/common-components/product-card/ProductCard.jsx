import React from "react";
import "./index.css";
import Image from "next/image";

const ProductCard = ({data}) => {
  return (
    <div className="card">
      <Image
        width={200}
        height={200}
        src="/images/table/EmptyTable.svg"
        className="card-img-top"
        alt="product-image"
      />
      <div className="card-body">
        <h4 className="card-title">{data?.title}</h4>
        <h5 className="price">
          price :- <span className="text-muted">{data?.price} Rs.</span>
        </h5>

        {/* <p className="card-text">
                                   Some quick example text to build on the card title and make
                                   up the bulk of the card’s content.
                                 </p>
                                 <a href="#" className="btn btn-primary">
                                   Go somewhere
                                 </a> */}
      </div>
      <div className="card-footer d-flex gap-1">
        <button title="add-to-cart" className="btn btn-success">
          cart
        </button>
        <button title="add-to-wishlist" className="btn btn-warning">
          wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
