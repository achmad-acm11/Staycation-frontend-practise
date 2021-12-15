import Button from "elements/Button";
import Star from "elements/Star";
import React from "react";

export default function Testimony() {
  return (
    <section className="testimonial-section container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero">
            <img
              src="/images/testimonial-landingpages.jpg"
              alt="testimonial"
              className="position-absolute"
              style={{ margin: "30px 0 0 30px", zIndex: 1 }}
            />
            <img
              src="/images/img-hero-frame.jpg"
              alt=""
              className="position-absolute"
              style={{ margin: "0 -30px -30px 0" }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>Happy Family</h4>
          <Star value={5} width={35} height={35} spacing={4} />
          <h5 className="h2 fw-light lh-2 my-3">
            What a great trip with my family and <br />I should try again next
            time soon ...
          </h5>
          <span className="d-block text-gray-500">Angga, Product Designer</span>
          <Button
            className="btn px-5"
            style={{ marginTop: 40 }}
            hasShadow
            isPrimary
            type="link"
            href=""
          >
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  );
}
