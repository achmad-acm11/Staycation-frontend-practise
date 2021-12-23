import React from "react";
// import ImageMostPicked1 from "assets/images/image-mostpicked-1.jpg";
// import ImageMostPicked2 from "assets/images/image-mostpicked-2.jpg";
// import ImageMostPicked3 from "assets/images/image-mostpicked-3.jpg";
// import ImageMostPicked4 from "assets/images/image-mostpicked-4.jpg";
// import ImageMostPicked5 from "assets/images/image-mostpicked-5.jpg";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="mostpicked-section container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`most-picked-${index}`}
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}{" "}
                  <span className="fw-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                    alt={item.title}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.title}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
