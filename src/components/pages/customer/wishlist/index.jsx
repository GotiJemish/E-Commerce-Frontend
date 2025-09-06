// Wishlist.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,499",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹4,999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,799",
    image: "https://via.placeholder.com/150",
  },
];

const Wishlist = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
      <h2 className="mb-4 fw-bold text-center">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="text-center text-muted">Your wishlist is empty.</div>
      ) : (
        <div className="row">
          {wishlistItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-primary fw-semibold">
                    {item.price}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;
