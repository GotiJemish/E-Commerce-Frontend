import React from "react";

import "./index.css";
import Image from "next/image";
import Link from "next/link";



// Custom MenuList with search input
const CategoryCard = ({data}) => {

  return (
    <div className="card">
      <Image
        width={200}
        height={200}
        loading="lazy"
        src="/images/table/EmptyTable.svg"
        className="card-img-top"
        alt="product-image"
      />
      <div className="card-body">
        <h4 className="card-title">
          <Link href={`/category/${data?.title}/category-id`}>{data?.title}</Link>
        </h4>
      </div>
      <div className="card-footer d-flex gap-1">
        <h5 className="text-muted">total orders : 23684</h5>
      </div>
    </div>
  );
};

export default CategoryCard;