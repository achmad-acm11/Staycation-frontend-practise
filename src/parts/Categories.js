import Button from "elements/Button";
import React from "react";

export default function Categories(props) {
  return props.data.map((item, index) => {
    if (item.itemId.length === 0) return null;

    return (
      <section
        key={`${index}-${item._id}`}
        className="categories-section container"
      >
        <h4 className="mb-3 fw-medium">{item.name}</h4>
        <div className="container-grid">
          {item.itemId.map((value, idx) => {
            return (
              <div
                key={`${item._id}-${value._id}-${idx}`}
                className="item column-3 row-1"
              >
                <div className="card">
                  {value.isPopular && (
                    <div className="tag">
                      Popular <span className="fw-light">choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={`${process.env.REACT_APP_HOST}/${value.imageId[0].imageUrl}`}
                      alt={value.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${value._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <h4>{value.title}</h4>
                    </Button>
                    <span className="text-gray-500">
                      {value.city}, {value.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  });
}
