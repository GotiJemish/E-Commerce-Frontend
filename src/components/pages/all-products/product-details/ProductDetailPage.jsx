"use client"
import { getProductDetails } from "@/store/slice/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailPage = ({id}) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.product.productDetail)
const loading = useSelector((state) => state.product.loading);
  // Fetch products when the page changes
useEffect(() => {
    if (!id) return; // Guard clause
    dispatch(
      getProductDetails({
        id: id
      })
    );
  }, [id, dispatch]);

console.log("object",productDetails)
  return (
    <div className="container my-5">
      {/* Product Details */}

      <div className="row">
      {loading ? (
            <div className="text-center my-5">
              <p>Loading products...</p>
              {/* You can replace this with a spinner component */}
            </div>
          ) : (<>
        {/* Product Image */}
      <div className="col-md-5">
  <img
    src={productDetails?.products_images?.[0]?.image || "#"}
    className="img-fluid rounded"
    alt={productDetails?.title || "Product Image"}
  />
</div>

        {/* Product Info */}
        <div className="col-md-7">
          <h2>{productDetails?.title}</h2>
          <p className="text-muted">Category: {productDetails?.category?.title}</p>

          <div className="d-flex gap-1">
            {productDetails?.tag_list?.map((item,i)=>(
<span className="bedge text-light bg-secondary" key={i}>{item}</span>
            ))}
            
          </div>
          <h4 className="text-primary">{productDetails?.price}</h4>
          <p>
            {productDetails?.description}
          </p>
          <div className="d-flex align-items-center mb-3">
            <label className="me-2">Quantity:</label>
            <input
              type="number"
              className="form-control w-25"
              defaultValue={1}
              min={1}
            />
          </div>
          <button className="btn btn-primary me-2">Demo</button>
          <button className="btn btn-danger me-2">buy now</button>
          <button className="btn btn-success me-2">Add to Cart</button>
          <button className="btn btn-outline-secondary">Add to Wishlist</button>
          {/* Ratings */}
          <div className="mt-4">
            <strong>Rating:</strong>
            <span className="text-warning">★★★★☆</span> (45 reviews)
          </div>
        </div>
        </>)}
      </div>
      {/* Related Products */}
      <div className="mt-5">
        <h3 className="mb-4">Related Products</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Product Card 1 */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product A</h5>
                <p className="card-text text-primary">$89.99</p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product B</h5>
                <p className="card-text text-primary">$129.99</p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product C</h5>
                <p className="card-text text-primary">$59.99</p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Product Card 4 */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product D</h5>
                <p className="card-text text-primary">$149.99</p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
