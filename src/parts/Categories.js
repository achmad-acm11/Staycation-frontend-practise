import Button from "elements/Button";
import React from "react";

export default function Categories() {
  return (
    <section className="categories-section container">
      <h4 className="mb-3 fw-medium">Houses with beauty backyard</h4>
      <div className="container-grid">
        <div className="item column-3 row-1">
          <div className="card">
            <div className="tag">
              Popular <span className="fw-light">choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/image-category-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h4>Green Park</h4>
              </Button>
              <span className="text-gray-500">Tangerang, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-3 row-1">
          <div className="card">
            <div className="tag">
              Popular <span className="fw-light">choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/image-category-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h4>Green Park</h4>
              </Button>
              <span className="text-gray-500">Tangerang, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-3 row-1">
          <div className="card">
            <div className="tag">
              Popular <span className="fw-light">choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/image-category-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h4>Green Park</h4>
              </Button>
              <span className="text-gray-500">Tangerang, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="item column-3 row-1">
          <div className="card">
            <div className="tag">
              Popular <span className="fw-light">choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/image-category-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h4>Green Park</h4>
              </Button>
              <span className="text-gray-500">Tangerang, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
