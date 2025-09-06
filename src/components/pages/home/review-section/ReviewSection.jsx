import React from "react";

const ReviewSection = () => {
  return (
    <section className="popular-products my-4">
      <div className="container">
        <h2>reviews section</h2>
        <div className="row">
          
          <div className="col-4">
            <div className="card">
              <div className="stars-cover d-flex gap-2">
                <i>stars</i>
                <i>stars</i>
                <i>stars</i>
              </div>
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{"{"}" "{"}"}
                  <cite title="Source Title">customer name</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
