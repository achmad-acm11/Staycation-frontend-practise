import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <section className="featured-section container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${
                index === 0 ? "column-7 row-2" : "column-5 row-1"
              }`}
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    src={item.url}
                    alt={`fetured ${index}`}
                    className="img-cover"
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
