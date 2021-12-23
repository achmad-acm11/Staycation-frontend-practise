import Button from "elements/Button";
import React from "react";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container">
      <h4 className="mb-3 fw-medium">Activity</h4>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div key={`${index}-${item._id}`} className="col-3">
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt={`Activities ${index}`}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`properties/${item._id}`}
                    className="stretched-link d-block text-gray-800"
                  >
                    <h5 className="h4">{item.name}</h5>
                  </Button>
                  <span className="text-gray-500">{item.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
