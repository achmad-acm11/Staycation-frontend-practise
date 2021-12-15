import React from "react";

export default function FeaturedImage() {
  return (
    <section className="featured-section container">
      <div className="container-grid sm">
        <div className="item column-7 row-2">
          <div className="card h-100">
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="fetured 1"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
        <div className="item column-5 row-1">
          <div className="card h-100">
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="fetured 1"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
        <div className="item column-5 row-1">
          <div className="card h-100">
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="fetured 1"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
