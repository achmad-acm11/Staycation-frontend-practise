import React from "react";
// import ImageMostPicked1 from "assets/images/image-mostpicked-1.jpg";
import ImageMostPicked2 from "assets/images/image-mostpicked-2.jpg";
import ImageMostPicked3 from "assets/images/image-mostpicked-3.jpg";
import ImageMostPicked4 from "assets/images/image-mostpicked-4.jpg";
import ImageMostPicked5 from "assets/images/image-mostpicked-5.jpg";
import Button from "elements/Button";

export default function MostPicked() {
  return (
    <section className="Mostpicked-section container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        <div className="item column-4 row-2">
          <div className="card card-featured">
            <div className="tag">
              $50 <span className="fw-light">per night</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/image-mostpicked-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                className="stretched-link d-block text-white"
                href="/properties"
              >
                <h5>Blue Origins Farms</h5>
              </Button>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card card-featured">
            <div className="tag">
              $22 <span className="fw-light">per night</span>
            </div>
            <figure className="img-wrapper">
              <img src={ImageMostPicked2} alt="Item 2" className="img-cover" />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                className="stretched-link d-block text-white"
                href="/properties"
              >
                <h5>Ocean Land</h5>
              </Button>
              <span>Bandung, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card card-featured">
            <div className="tag">
              $856 <span className="fw-light">per night</span>
            </div>
            <figure className="img-wrapper">
              <img src={ImageMostPicked3} alt="Item 3" className="img-cover" />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                className="stretched-link d-block text-white"
                href="/properties"
              >
                <h5>Stark House</h5>
              </Button>
              <span>Malang, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card card-featured">
            <div className="tag">
              $62 <span className="fw-light">per night</span>
            </div>
            <figure className="img-wrapper">
              <img src={ImageMostPicked4} alt="Item 4" className="img-cover" />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                className="stretched-link d-block text-white"
                href="/properties"
              >
                <h5>Vinna Vill</h5>
              </Button>
              <span>Malang, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card card-featured">
            <div className="tag">
              $72 <span className="fw-light">per night</span>
            </div>
            <figure className="img-wrapper">
              <img src={ImageMostPicked5} alt="Item 5" className="img-cover" />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                className="stretched-link d-block text-white"
                href="/properties"
              >
                <h5>Bobox</h5>
              </Button>
              <span>Medan, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
